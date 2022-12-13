import { GetServerSideProps } from "next";
import Head from 'next/head';
import Image from "next/future/image";
import Link from "next/link";
import Stripe from "stripe";
import { stripe } from "../lib/stripe";
import { ImageContainer, ImagesContainer, SuccessContainer } from "../styles/pages/success";

interface SuccessProps {
  customerName: string;
  products: {
    id: string;
    name: string;
    images: string[];
  }[]
}

export default function Success({ customerName, products }: SuccessProps) {
  return (
    <>
      <Head>
        <title>Compra Efetuada | Ignite Shop</title>
        
        <meta name="robots" content="noindex" />
      </Head>

      <SuccessContainer>
        <h1>Compra efetuada!</h1>

        <ImagesContainer>
          {products.map((product) => (
            <ImageContainer key={product.name}>
              <Image src={product?.images[0]} width={120} height={110} alt="" />
            </ImageContainer>
          ))}
        </ImagesContainer>

        <p>
          Uhuul <strong>{customerName}</strong>, suas camisetas já está a caminho da sua casa.
        </p>

        <Link href="/">
          <a>
            Voltar ao catálogo
          </a>
        </Link>
      </SuccessContainer>
    </>
  )
}

export const getServerSideProps:  GetServerSideProps = async ({ query }) => {
  if (!query.session_id) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      }
    }
  }

  const sessionId = String(query.session_id);

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product']
  });

  const customerName = session.customer_details.name;
  const products = [...session.line_items.data].map(
    (product) => product.price.product,
  ) as Stripe.Product[]

  return {
    props: {
      customerName,
      products,
    },
  }
}
