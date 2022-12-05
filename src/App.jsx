import React from 'react';
import Card from './Card';
import Sdata from './Sdata';

const App = () => (
<>
<h1 className='heading_style'>List of Top 6 Movies in Hotstar</h1>
{Sdata.map((val,index) => {
  console.log(index);
  return(
    <Card id={val.id}
         imgsrc={val.imgsrc}
         title={val.title}
         movien={val.movien}
         link={val.link}/>
  )
})}
</>
);

export default App;
 
