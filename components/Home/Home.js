import React from 'react'
import Hero from './Hero/Hero';
import About from './About/About';
import Courses from './Courses';
import Services from './services/Services';
import Article from './Article/Article';

function Home() {
  return (
    <div className='bg-green-60 h-full'>
      <Hero />
      <About />
      <Courses />
      <Services />
      <Article />
      {/* <Footer /> */}
    </div>
  )
}

export default Home;
