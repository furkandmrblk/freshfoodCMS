import Head from 'next/head';
import { HeroTitle, HeroSubtitle } from '../components/HeroStyled';

import sanity from '../lib/sanity';

const query = `*[_type == 'Title'] {
  title,
  slug
}[0]`;

const query2 = `*[_type == 'Subtitle'] {
  subtitle,
  slug
}[0]`;

const Home = ({ title, subtitle }) => {
  return (
    <div>
      <HeroTitle>{title.title}</HeroTitle>
      <HeroSubtitle>{subtitle.subtitle}</HeroSubtitle>
    </div>
  );
};

export const getStaticProps = async () => {
  const title = await sanity.fetch(query);
  const subtitle = await sanity.fetch(query2);

  return {
    props: {
      title: title,
      subtitle: subtitle,
    },
  };
};

export default Home;
