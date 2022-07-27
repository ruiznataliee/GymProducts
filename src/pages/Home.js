import React from "react";
import SimpleImageSlider from "react-simple-image-slider";
import "./Home.css";
import CardItem from "./CardItem";

export default function Home() {
 

  const images = [
    { url: "images/WorkOut1.webp" },
    { url: "images/WorkOut6.jpg" },
    { url: "images/WorkOut10.webp" },
  ];
 
 
  return (
    <div>
    <div className='show'>
    <h2>BUILD YOUR DREAM GYM!</h2>
      <h3>PAIN IS TEMPORARY, GLORY IS FOREVER</h3>
      <SimpleImageSlider
        className="SlideContainer"
        width={"100%"}
        height={630}
        images={images}
        showBullets={true}
        showNavs={true}
      />

</div>
<div className="pop">
      <h2>Most Popular Below!</h2>
</div>
      <div className="cards">
        {/* <div className="cards__container"> */}
          {/* <div className="cards__wrapper"> */}
            <ul className="cards__items">
              <CardItem
                src="images/weight.webp"
                text="The Better Body Barbell and Weight Bundle is a perfect package deal to get you set up with barbell lifting basics."
                label="Better Body Barbell and Weight Bundle"
                path="/products"
              />

              <CardItem
                src="images/bell.jpeg"
                text="Comes with 3 kinds of weight plates, which will allow you to create different weight combinations with the dumbbells and customize workouts."
                label="Pthage dumbbell set"
                path="/products"
              />
            
              <CardItem
                src="images/fit.png"
                text="Currently the most advanced fitness watch. It can track your stress levels and heart health."
                label="Fitbit"
                path="/products"
              />
            </ul>
          </div>
        </div>
      // </div>
    // </div>
  );
}
