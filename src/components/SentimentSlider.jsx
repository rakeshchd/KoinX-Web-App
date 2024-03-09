import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./SentimentSliderStyles.css"

function SentimentSlider(){

    const sentiment_data = [
        {
            cName: "blue",
            image: "fa-solid fa-circle-user",
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem iure praesentium.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex natus labore et, ad doloremque unde quam reprehenderit laudantium numquam minus vel nostrum dolor ut vitae est quae accusantium dolorum voluptatibus mollitia! Ea, doloribus aperiam. Rerum aliquam tenetur asperiores numquam!"
        },
        {
            cName: "green",
            image: "fa-solid fa-circle-user",
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem iure praesentium.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex natus labore et, ad doloremque unde quam reprehenderit laudantium numquam minus vel nostrum dolor ut vitae est quae accusantium dolorum voluptatibus mollitia! Ea, doloribus aperiam. Rerum aliquam tenetur asperiores numquam!"
        },
        {
            cName: "yellow",
            image: "fa-solid fa-circle-user",
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem iure praesentium.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex natus labore et, ad doloremque unde quam reprehenderit laudantium numquam minus vel nostrum dolor ut vitae est quae accusantium dolorum voluptatibus mollitia! Ea, doloribus aperiam. Rerum aliquam tenetur asperiores numquam!"
        },
        {
            cName: "red",
            image: "fa-solid fa-circle-user",
            heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor quidem iure praesentium.",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ex natus labore et, ad doloremque unde quam reprehenderit laudantium numquam minus vel nostrum dolor ut vitae est quae accusantium dolorum voluptatibus mollitia! Ea, doloribus aperiam. Rerum aliquam tenetur asperiores numquam!"
        }
    ]

    const settings = {
        slidesToShow: 2,
    };

    return(
        <div className="sentiment-slider">
            <Slider {...settings}>
            {
                sentiment_data.map((d) => (
                    <div className={d.cName}>
                        <i className={d.image}></i>
                        <div>
                            <p className="slider-upper">{d.heading}</p>
                            <p className="slider-lower">{d.description}</p>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </div>
    );
}

export default SentimentSlider;



