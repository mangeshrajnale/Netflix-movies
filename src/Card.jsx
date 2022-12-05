import React from 'react'
import Heading from './Heading';
import Images from './Images';

function Card(props){
    return(
      <>
    <div className="cards">
    <div className='card'>
      <Images imgsrc={props.imgsrc} />
      <div className='card__info'>
      <span className='card__category'>{props.title} </span>
      <Heading movien={props.movien} />
      <a href={props.link} target="_blank">
        <button className='btn'>Watch Now</button>
      </a>
      </div>
    </div>
    </div>
  </>
  
    );
  }
export default Card;