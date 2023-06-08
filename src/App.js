import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Contact from './components/Contact'
// import katiezaferes from "../src/images/katiezaferes.png";
// import mountainbike from "../src/images/mountainbike.png";
// import weddingphotography from "../src/images/weddingphotography.png";

import datas from './data'



export default function App(){
 let cards = datas.map(data=>{
    return (
      <Card
        key={data.id}
        // data = {data}
        {...data}
      />
    );

 })

return (
  <>
    <Navbar />
    <Hero />
    <section className='cards-list'>
      {cards}
    </section>
    <Contact />
  </>
);
}


{/* <h1>Good {timeOfDay} {firstName} {lastName} it's currently {hours} o'clock</h1> */}

        /*
      previously defined props:
        openSpots = {data.openSpots}
        img={`../images/${data.coverImg}`}
        rating={data.stats.rating}
        reviewCount={data.stats.reviewCount}
        location={data.location}
        title={data.title}
        price={data.price}
 */