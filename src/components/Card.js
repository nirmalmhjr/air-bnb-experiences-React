import React from 'react'
import star from "../images/star.png";



export default function Cards(props) {
  console.log(props)

  let badgeText ;
  if(props.openSpots === 0 ){
    badgeText = 'SOLD OUT'
  } else if(props.location === 'Online'){
    badgeText = 'Online'
  }

  return (
    <div className="card">
      {badgeText && <div className='card-badge'>{badgeText}</div>}
      <img src={`../images/${props.coverImg}`} alt="" className="card-image" />
      <div className="card-stats">
        <img src={star} alt="" className="card-star" />
        <span>{props.stats.rating}</span>
        <span className="gray">({props.stats.reviewCount}) . </span>
      </div>
      <p className="card-title">{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  );
}

// {/* <section className='cards'> */}
//     {/* <div> */}
//         {/* <img src={canyon} alt="" /> */}
//         {/* <p>Let's go to Grand Canyon</p> */}
//         {/* <span><b>From $136</b> / person</span> */}
//     {/* </div> */}
//     {/* <div> */}
//         {/* <img src={mountainBike} alt="" /> */}
//         {/* <p>Experience Mountain Bike</p> */}
//         {/* <span><b>From $125</b> / person</span> */}
//     {/* </div> */}
//     {/* <div> */}
//         {/* <img src={scubaDiving} alt="" /> */}
//         {/* <p>Explore Underwater</p> */}
//         {/* <span><b>From $125</b> /person</span> */}
//     {/* </div> */}
// {/* </section> */}