import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check Out Our Latest Services!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/webdesign.png'
              text='Every well-designed website caters for the needs of its users'
              label='Webdevelopment'
              path='/services'
            />
            <CardItem
              src='images/app.jpg'
              text='I am a designer who designs delightful and useful experiences'
              label='UI-Design'
              path='/services'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/coding1.jpg'
              text='Well Versed Coding Skills'
              label='Coding '
              path='/services'
            />
            <CardItem
              src='images/ui1.jpg'
              text='Excellent App Desinging '
              label='App-Development'
              path='/products'
            />
            <CardItem
              src='images/wordpress.png'
              text='E-commerce website'
              label='Wordpress'
              path='/products'
            />
            
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/graphic-design1.jpg'
              text='Well Versed Designs'
              label='Designing '
              path='/services'
            />
            <CardItem
              src='images/graphic-design2.jpg'
              text='Excellent Desinging '
              label='Designing Tools'
              path='/products'
            />
            <CardItem
              src='images/app.jpg'
              text='Dynamic App Developement'
              label='App-Development'
              path='/products'
            />
            
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
