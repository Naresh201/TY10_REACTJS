import React,{useState} from 'react';
import {Card} from "react-bootstrap";
import "./Box.css";

 function MyCard(props) {
     const [cards, setcard] = useState([
     {image:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072823__340.jpg",title:"road forest fall autumn season picture",text:"It’s easy to think nature will always be with us. But even in my lifetime, birds like starlings and house sparrows have declined so much they’re now listed as endangered."},
     {image:"https://cdn.pixabay.com/photo/2021/04/25/04/11/plants-6205510__340.jpg",title:"plants wildflowers bush shrub picture",text:"Overlooking the importance of nature, as we go about our busy lives, makes it easier for it to disappear right in front of our eyes."},
     {image:"https://cdn.pixabay.com/photo/2015/09/09/16/05/forest-931706__340.jpg",title:"forest mist nature trees mystic picture",text:"Great as those places are, nature is also on our doorstep all year round. Even in winter. Just add your own curiosity, a chunk of attention span and a dollop of patience."},
     {image:"https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518__340.jpg",title:"railroad landscape countryside rail picture",text:"Pressures of daily life mean we’re increasingly detached from nature even though nature in many forms is there for us. Yes, like love, nature is all around – and it’s free."}]);

     const rendercard =(cards,index)=>{
         return (
            <Card style={{ width: '18rem' }}  key="index" classname="box"> 
            <Card.Img variant="top" src={cards.image}/>
            <Card.Body>
            <Card.Title>{cards.title}</Card.Title>
            <Card.Text>
            {cards.text}
           </Card.Text>
            </Card.Body>
             </Card>
         )
     }
    return (
        <div className="grid">
            {cards.map(rendercard)}
          
        </div>
    )
}

export default  React.memo(MyCard);