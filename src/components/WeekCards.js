import React, { useState } from 'react'
import { CardsContainer } from './WeekCardElements'
import Slider from "react-slick";
import SliderCard from './SliderCard';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const WeekCards = ({weatherData}) => {
    const [expandedCard, SetExpandedCard] = useState(0)

    var settings = {
        arrows: true,
        swipe: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 2,
        variableWidth: true,
        swipeToSlide: true,
        draggable: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                  slidesToShow: 4,
                  slidesToScroll: 4
                }
            },
            {
                breakpoint: 1000,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 3
                }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };


  return (
    <CardsContainer>
        <Slider style={{width:"90%"}} {...settings}>
            <SliderCard weatherData={weatherData} index={0} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={1} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={2} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={3} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={4} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={5} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={6} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={7} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={8} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={9} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={10} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={11} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={12} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={13} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={14} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={15} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={16} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={17} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={18} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={19} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={20} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
            <SliderCard weatherData={weatherData} index={21} setExpandedCard={SetExpandedCard} expandedCard={expandedCard}/>
        </Slider>
    </CardsContainer>
  )
}

export default WeekCards