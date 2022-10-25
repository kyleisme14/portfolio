import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC projects!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='/photos/blueclwon.png'
              text='ScreenShare - A video sharing youtube clone built using Django and Python.'
              label='WEBSITE'
              path='/services'
            />
           
            <CardItem
              src='/photos/vellaapp.png'
              text='Vella - IOS and Android app, that tracks personality data to offer specified motivations'
              label='App'
              href='https://www.thevellaapp.com/' 
                         />
            <CardItem
              src='/photos/fakespace.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/photos/blueclwon.png'
              text='Explore the hidden waterfall deep inside the Amazon Jungle'
              label='Adventure'
              path='/services'
            />
            <CardItem
              src='/photos/yellowpants.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='/photos/pillars.webp'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
            <CardItem
              src='/photos/fakespace.png'
              text='Travel through the Islands of Bali in a Private Cruise'
              label='Luxury'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;