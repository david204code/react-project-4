import React from 'react';

const Slider = props => (
  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel">
  <div className="carousel-inner">
    {props.slides.map( slide => (
      <div key={slide.id} className="carousel-item">
       <img className="d-block w-100" src={slide.image} alt="First slide"/>
      </div>
    ))}
   
  </div>
</div>
);

export default Slider;