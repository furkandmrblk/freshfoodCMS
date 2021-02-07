import Head from 'next/head';
import sanity from '../lib/sanity';

import GlobalStyle from '../theme/globalStyles';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Products from '../components/Products';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const query = `*[_type == 'hero'] {
  title,
  subtitle,
}[0]`;
const query2 = `*[_type == 'about'] {
  text,
  text2,
}[0]`;
const query3 = `*[_type == 'contact'] {
  ceo,
  adress,
  number,
}[0]`;

const Home = ({ title, about, contact, products }) => {
  return (
    <>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <title>freshfood | Healthy & Fresh Fitness Food</title>
      </Head>
      <div>
        <GlobalStyle />
        <Navbar />
        <Hero title={title.title} subtitle={title.subtitle} />
        <About text={about.text} text2={about.text2} />
        <Products
          products={products}
          title={products.title}
          title={products.title}
          image={products.image}
          subtitle={products.subtitle}
          descriptiontitle={products.descriptiontitle}
          description={products.description}
          price={products.price}
        />
        <Contact
          ceo={contact.ceo}
          adress={contact.adress}
          number={contact.number}
        />
        <Footer />
      </div>
    </>
  );
};

export const getStaticProps = async () => {
  const query0 = encodeURIComponent('*[ _type == "products" ]');
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
  const url = `https://${projectId}.api.sanity.io/v1/data/query/production?query=${query0}`;
  const result = await fetch(url).then((res) => res.json());

  const title = await sanity.fetch(query);
  const about = await sanity.fetch(query2);
  const contact = await sanity.fetch(query3);

  return {
    props: { title, about, contact, products: result.result },
  };
};

export default Home;
