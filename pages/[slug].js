import Head from 'next/head';
import imageUrlBuilder from '@sanity/image-url';
import { useState, useEffect } from 'react';
import GlobalStyle from '../theme/globalStyles';
import Navbar from '../components/Navbar';
import {
  ProductDescription,
  ProductDescriptionTitle,
  ProductDiv,
  ProductImage,
  ProductItemDiv,
  ProductSubtitle,
  ProductTitle,
} from '../components/SlugStyled';
import Footer from '../components/Footer';

export const Post = ({
  image,
  title,
  subtitle,
  descriptiontitle,
  description,
}) => {
  const [imageUrl, setImageUrl] = useState('');

  useEffect(() => {
    const imgBuilder = imageUrlBuilder({
      projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
      dataset: 'production',
    });

    setImageUrl(imgBuilder.image(image));
  }, [image]);

  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>freshfood - Product</title>
      </Head>
      <GlobalStyle />
      <Navbar />
      <ProductDiv>
        <ProductImage src={imageUrl} />
        <ProductItemDiv>
          <ProductTitle>{title}</ProductTitle>
          <ProductSubtitle>{subtitle}</ProductSubtitle>
          <ProductDescriptionTitle>{descriptiontitle}</ProductDescriptionTitle>
          <ProductDescription>{description}</ProductDescription>
        </ProductItemDiv>
      </ProductDiv>
      <Footer />
    </>
  );
};

export const getServerSideProps = async (pageContext) => {
  const pageSlug = pageContext.query.slug;

  if (!pageSlug) {
    return {
      notFound: true,
    };
  }

  const query0 = encodeURIComponent(
    `*[ _type == 'products' && slug.current == '${pageSlug}' ]`
  );
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query0}`;

  const result = await fetch(url).then((res) => res.json());
  const products = result.result[0];

  if (!products) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: {
        image: products.image,
        title: products.title,
        subtitle: products.subtitle,
        descriptiontitle: products.descriptiontitle,
        description: products.description,
        price: products.price,
      },
    };
  }
};

export default Post;
