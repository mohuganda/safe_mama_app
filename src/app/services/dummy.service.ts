import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DummyService {

  images = [
    {
      name : 'The Hill',
      img : 'assets/imgs/movies/1.jpg'
    },
    {
      name : 'PK',
      img : 'assets/imgs/movies/2.jpg'
    },
    {
      name : 'Aladdin',
      img : 'assets/imgs/movies/3.jpg'
    },
    {
      name : 'Mohanjo Daro',
      img : 'assets/imgs/movies/4.jpg'
    },
    {
      name : 'Bahubali 2',
      img : 'assets/imgs/movies/5.jpg'
    },
    {
      name : 'Avengers Endgame',
      img : 'assets/imgs/movies/6.jpg'
    },
    {
      name : 'Jazbaa',
      img : 'assets/imgs/movies/7.jpg'
    },
    {
      name : 'Ultra',
      img : 'assets/imgs/movies/8.jpg'
    },
    {
      name : 'Beauty and the Beast',
      img : 'assets/imgs/movies/9.jpg'
    },
    {
      name : 'Freedom',
      img : 'assets/imgs/movies/10.jpg'
    },
    {
      name : 'Black Panthor',
      img : 'assets/imgs/movies/11.jpg'
    },
    {
      name : '1917 Time is the enemy',
      img : 'assets/imgs/movies/12.jpg'
    },
    {
      name : 'Joker',
      img : 'assets/imgs/movies/13.jpg'
    },
    {
      name : 'Satyamev Jayate',
      img : 'assets/imgs/movies/14.jpg'
    },
    {
      name : 'Raees',
      img : 'assets/imgs/movies/15.jpg'
    },
    {
      name : 'Project Power',
      img : 'assets/imgs/movies/16.jpg'
    },
    {
      name : 'A star is born',
      img : 'assets/imgs/movies/17.jpg'
    },
    {
      name : 'Kaabil',
      img : 'assets/imgs/movies/18.jpg'
    },
    {
      name : 'After what happens when people die',
      img : 'assets/imgs/movies/19.jpg'
    },
    {
      name : 'The Nightingale',
      img : 'assets/imgs/movies/20.jpeg'
    },
    {
      name : 'Mismatched',
      img : 'assets/imgs/movies/21.jpg'
    },
    {
      name : 'Ludo',
      img : 'assets/imgs/movies/22.jpg'
    },
    {
      name : 'Article 15',
      img : 'assets/imgs/movies/23.jpg'
    },
    {
      name : 'Bang Bang',
      img : 'assets/imgs/24.jpg'
    },

  ];

  landscape = [
      {
          img : 'assets/imgs/landscape_imgs/1.jpg',
          name : 'Ender\'s Game',
      },
      {
          img : 'assets/imgs/landscape_imgs/2.jpg',
          name : 'X-MEN Apocalypse',
      },
      {
          img : 'assets/imgs/landscape_imgs/3.jpg',
          name : 'The Lord of the Rings',
      },
      {
          img : 'assets/imgs/landscape_imgs/4.jpg',
          name : 'Let me in',
      },
      {
        img : 'assets/imgs/landscape_imgs/5.png',
        name : 'Galactic Graveyard',
      },
      {
        img : 'assets/imgs/landscape_imgs/6.jpg',
        name : 'The Reverend',
      },
      {
        img : 'assets/imgs/landscape_imgs/7.jpg',
        name : 'Aladdin',
      },
      {
        img : 'assets/imgs/landscape_imgs/8.jpg',
        name : 'Highway',
      },
      {
        img : 'assets/imgs/landscape_imgs/9.jpg',
        name : 'Captain America',
      },
      {
        img : 'assets/imgs/landscape_imgs/10.jpg',
        name : 'A start is born',
      },
      {
        img : 'assets/imgs/landscape_imgs/11.jpg',
        name : 'Thor',
      },
      {
        img : 'assets/imgs/landscape_imgs/12.jpg',
        name : 'Rise',
      },
      {
        img : 'assets/imgs/landscape_imgs/13.jpg',
        name : 'Land of Mine',
      },
      {
        img : 'assets/imgs/landscape_imgs/14.jpg',
        name : 'Inception',
      },
      {
        img : 'assets/imgs/landscape_imgs/15.jpg',
        name : 'Interstellar',
      },
      {
        img : 'assets/imgs/landscape_imgs/16.jpg',
        name : 'Tom Cruise Oblivion',
      },
      {
        img : 'assets/imgs/landscape_imgs/17.jpg',
        name : 'Spider Man',
      },
  ];

  resources = [
    {
      name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      img : 'assets/imgs/news/news1.jpg',
      icn : 'assets/imgs/news/news_icn1.png'
    },
    {
      name : 'It is a long established fact that a reader will be distracted by the readable',
      img : 'assets/imgs/news/news2.jpg',
      icn : 'assets/imgs/news/news_icn2.png'
    },
    {
      name : 'There are many variations of passages of Lorem Ipsum available',
      img : 'assets/imgs/news/news3.jpg',
      icn : 'assets/imgs/news/news_icn3.png'
    },
    {
      name : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      img : 'assets/imgs/news/news4.jpg',
      icn : 'assets/imgs/news/news_icn4.png'
    },
    {
      name : 'The standard chunk of Lorem Ipsum used since the 1500s',
      img : 'assets/imgs/news/news5.jpg',
      icn : 'assets/imgs/news/news_icn2.png'
    },
    {
      name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      img : 'assets/imgs/news/news6.jpg',
      icn : 'assets/imgs/news/news_icn1.png'
    },
  ];

  reporter = [
    {
      name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      img : 'assets/imgs/news/reporter1.jpg',
      icn : 'assets/imgs/news/news_icn1.png'
    },
    {
      name : 'It is a long established fact that a reader will be distracted by the readable',
      img : 'assets/imgs/news/reporter2.jpg',
      icn : 'assets/imgs/news/news_icn2.png'
    },
    {
      name : 'There are many variations of passages of Lorem Ipsum available',
      img : 'assets/imgs/news/reporter3.jpg',
      icn : 'assets/imgs/news/news_icn3.png'
    },
    {
      name : 'Contrary to popular belief, Lorem Ipsum is not simply random text',
      img : 'assets/imgs/news/reporter4.jpg',
      icn : 'assets/imgs/news/news_icn4.png'
    },
    {
      name : 'The standard chunk of Lorem Ipsum used since the 1500s',
      img : 'assets/imgs/news/reporter5.jpg',
      icn : 'assets/imgs/news/news_icn2.png'
    },
    {
      name : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
      img : 'assets/imgs/news/reporter6.jpg',
      icn : 'assets/imgs/news/news_icn1.png'
    },
    {
      name : 'The standard chunk of Lorem Ipsum used since the 1500s',
      img : 'assets/imgs/news/reporter7.jpg',
      icn : 'assets/imgs/news/news_icn2.png'
    }
  ];

  channels = [
      'assets/imgs/channels/c1.jpg',
      'assets/imgs/channels/c2.jpg',
      'assets/imgs/channels/c3.jpg',
      'assets/imgs/channels/c4.jpg',
      'assets/imgs/channels/c5.jpg',
      'assets/imgs/channels/c6.jpg',
      'assets/imgs/channels/c7.jpg',
      'assets/imgs/channels/c8.jpg',
      'assets/imgs/channels/c1.jpg',
      'assets/imgs/channels/c2.jpg',
      'assets/imgs/channels/c3.jpg',
      'assets/imgs/channels/c4.jpg',
      'assets/imgs/channels/c5.jpg',
      'assets/imgs/channels/c6.jpg',
      'assets/imgs/channels/c7.jpg',
      'assets/imgs/channels/c8.jpg',
  ];

  languages = [
    {
      name : 'English',
      img : 'assets/imgs/img7.jpg'
    }
  ];


  constructor() { }
}
