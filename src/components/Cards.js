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
              src='/photos/screenfair.png'
              text='ScreenShare - A video sharing youtube clone built using Django and Python.'
              label='WEBSITE'
              path='/services/1'
            />
           
            <CardItem
              src='/photos/vellaapp.png'
              text='Vella - IOS and Android app, that tracks personality data to offer specified motivations'
              label='Freelance'
              path='/services/2'
                         />
            <CardItem
              src='/photos/ghostphoto.png'
              text='Ghost-Fighter - '
              label='Game'
              path='/services/3'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='/photos/blueclwon.png'
              text='I like doing creative stuff with my fre time. I trained as a clown and wrote a novel.'
              label='Hobby'
              path='/services/4'
            />
            <CardItem
              src='/photos/sorting.png'
              text='Sorting Visualizer - a component that visualizes different sorting algorithms.'
              label='Component'
              path='/services'
            />
            <CardItem
              src='/photos/pillars.webp'
              text='Astronomy - one of my favorite things to do with my free time is look at the stars.'
              label='Hobby'
              path='/services'
            />
            <CardItem
              src='/photos/craigslist.png'
              text='GA-list - fullstack application based on craigslist. Final project for coding bootcamp.'
              label='Website'
              path='/services'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;