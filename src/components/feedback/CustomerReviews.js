import React from 'react';
import Slider from 'react-slick';
import "../feedback/CustomerReviews.css"
import 'slick-carousel/slick/slick.css';
const reviews = [
  {
    id: 1,
    name: 'William Hence',
    comment: 'We just wanted to thank you for the beautiful cake you created for our wedding. It was simply delicious and meticulously decorated. You made the process easy, and put us at ease. You are a true professional and a talented baker and we are forever thankful for helping our dream wedding come true.',
    position: 'Marketing Manager'
  },
  {
    id: 2,
    name: 'Richard Brooke',
    comment: 'We just wanted to thank you for the beautiful cake you created for our wedding. It was simply delicious and meticulously decorated. You made the process easy, and put us at ease. You are a true professional and a talented baker and we are forever thankful for helping our dream wedding come true.',
    position: 'Business Owner'
  },
  {
    id: 3,
    name: 'Jeff Hammer',
    comment: 'Many thanks to everybody at Bakery for the gorgeous 35th birthday cake which was enjoyed by all on Sunday. You have won a new legion of fans. Much love to you all.',
    position: 'Sales'
  }
];

const CustomerReviews = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
    <Slider {...settings}>
      <div className='feedback'>
        <h3>CLIENTS' TESTIMONIALS</h3>
        <p>{reviews[0].comment}</p>
        <h4>{reviews[0].name}</h4>
        <h5> {reviews[0].position}</h5>
      </div>
      <div className='feedback'>
        <h3>CLIENTS' TESTIMONIALS</h3>
        <p>{reviews[1].comment}</p>
        <h4>{reviews[1].name}</h4>
        <h5> {reviews[1].position}</h5>
      </div>
      <div className='feedback'>
        <h3>CLIENTS' TESTIMONIALS</h3>
        <p>{reviews[2].comment}</p>
        <h4>{reviews[2].name}</h4>
        <h5> {reviews[2].position}</h5>
      </div>
    </Slider>
  );
};

export default CustomerReviews;