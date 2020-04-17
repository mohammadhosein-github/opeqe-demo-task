import React, { useState, useEffect, useRef } from "react";
import CarouselIcon from "../../media/carousel-control.svg";
import FirstMeal from "../../media/meal-images/first-meal.jpg";
import SecondMeal from "../../media/meal-images/second-meal.jpg";
import ThirdMeal from "../../media/meal-images/third-meal.jpg";

export default function Carousel() {
  const carousel_ref = useRef(null);
  const card_ref = useRef(null);

  const [scroll, set_scroll] = useState(0);
  const [slides_number, set_slides_number] = useState(0);
  const [current_slide, set_current_slid] = useState(0);

  const meals_data = [
    {
      image: FirstMeal,
      title: "Chopped Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 13.8,
    },
    {
      image: SecondMeal,
      title: "Kale Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 6.0,
    },
    {
      image: ThirdMeal,
      title: "Eggs Benedict",
      meal_type: "à la carte",
      cuisine_type: "American",
      course_type: "Main Course",
      free_pickup: true,
      preparation: 7,
      price: 13.48,
    },
    {
      image: SecondMeal,
      title: "Kale Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 6,
    },
    {
      image: FirstMeal,
      title: "Chopped Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 13.8,
    },
    {
      image: SecondMeal,
      title: "Kale Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 6.0,
    },
    {
      image: ThirdMeal,
      title: "Eggs Benedict",
      meal_type: "à la carte",
      cuisine_type: "American",
      course_type: "Main Course",
      free_pickup: true,
      preparation: 7,
      price: 13.48,
    },
    {
      image: SecondMeal,
      title: "Kale Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 6,
    },
    {
      image: FirstMeal,
      title: "Chopped Salad",
      meal_type: "Salad",
      cuisine_type: "American",
      course_type: "Appetizer",
      free_pickup: true,
      preparation: 7,
      price: 13.8,
    },
  ];

  useEffect(() => {
    let length_of_all_cards = card_ref.current.clientWidth * meals_data.length;
    set_slides_number(length_of_all_cards / carousel_ref.current.clientWidth);
  });

  return (
    <div className="col-11 m-auto">
      <div style={{ fontSize: "1.5rem", margin: "0 0 20px 5px" }}>
        Appetizer
      </div>
      <div className="w-100  px-0 food-carousel" ref={carousel_ref}>
        <div
          className="cards-container mr-5"
          style={{
            transform: `translateX(-${scroll}%)`,
          }}
        >
          {meals_data.map((item) => {
            return (
              <div className="food-card d-inline-block px-1" ref={card_ref}>
                <div style={{ height: "100%", overflow: "hidden" }}>
                  <a href="#">
                    <img
                      className="food-image"
                      src={item.image}
                      alt={item.name}
                      draggable="false"
                    />
                  </a>
                </div>
                <div className="food-title">{item.title}</div>
                <div className="food-info">
                  <a href="#" className="food-type">
                    {item.meal_type}
                  </a>
                  . <a href="#">{item.cuisine_type}</a>.{" "}
                  <a href="#">{item.course_type}</a>
                </div>
                <div className="d-flex justify-content-between">
                  <span>
                    <span>{item.preparation} Mins </span>
                    <span>${item.price}</span>
                  </span>
                  <span>{item.free_pickup === true && "Free Pickup"}</span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="buttons-container">
          <button
            className="btn carousel-btn next-btn"
            onClick={() => {
              if (current_slide <= slides_number - 1) {
                set_scroll(scroll + 100);
                set_current_slid(current_slide + 1);
              }
            }}
          >
            <img src={CarouselIcon} alt="next_slide" />
          </button>
          <button
            className="btn carousel-btn prev-btn"
            onClick={() => {
              if (current_slide >= 1) {
                set_scroll(scroll - 100);
                set_current_slid(current_slide - 1);
              }
            }}
          >
            <img src={CarouselIcon} alt="prev_slide" />
          </button>
        </div>
      </div>
    </div>
  );
}
