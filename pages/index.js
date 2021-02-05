import Head from 'next/head';
import Link from 'next/link';
import { groq } from 'next-sanity';
import sanity, { getClient } from '../lib/sanity';

// export async function getStaticProps() {
//   const query = groq`*[_type == "Title"]{
//     title,
//     slug

//   }`;
//   const herotitle = await getClient().fetch(query);

//   return {
//     props: {
//       title: herotitle,
//     },
//   };
// }

const query = `*[_type == "Title"] {
  title,
  slug
}[0]`;

const Home = ({ title }) => {
  return (
    <div>
      <h1>{title.title}</h1>
    </div>
  );
};

export const getStaticProps = async () => {
  const title = await sanity.fetch(query);
  console.log(title);

  return {
    props: {
      title: title,
    },
  };
};

export default Home;
