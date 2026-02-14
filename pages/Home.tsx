
import React from 'react';
import Hero from '../components/Hero';
import Revelation from '../components/Revelation';
import Courses from '../components/Courses';
import Excellence from '../components/Excellence';
import Stats from '../components/Stats';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import FooterCTA from '../components/FooterCTA';

interface HomeProps {
  translations: any;
}

const Home: React.FC<HomeProps> = ({ translations: t }) => {
  return (
    <>
      <Hero translations={t} />
      <Revelation translations={t} />
      <Courses translations={t} />
      <Excellence translations={t} />
      <Stats translations={t} />
      <Testimonials translations={t} />
      <FAQ translations={t} />
      <FooterCTA translations={t} />
    </>
  );
};

export default Home;
