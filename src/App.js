import React from 'react';
import PropTypes from "prop-types";

const foodILike =
 [
  {
    id:1,
    name: "kimchi",
    imgsrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS5nBxdTHrcv3FEVGvrqC-cjiVMWJhyqME03Me5bKUE7oDCAP8WeV8Y2NmUX4&usqp=CAc",
    rating: 5
  },
  {
    id:2,
    name: "hamburger",
    imgsrc: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/RedDot_Burger.jpg/450px-RedDot_Burger.jpg",
    rating: 4.0

  }
]


function Food({fav, img, rating}){
  return <div>
    <h1>I like {fav}</h1>
    <h4>{rating} / 5.0 </h4>
    <img src={img} alt={fav} />
    </div>;
}

Food.propTypes = {
  fav: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
};

function App() {
  return (
    <div>
      {foodILike.map(dish=><Food key={dish.id} fav={dish.name} img={dish.imgsrc} rating={dish.rating} />)}
    </div>
  );
}

export default App;
