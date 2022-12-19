import { ICar } from '@core/interfaces/car.interface';

const AUTOS: ICar[] = [
  {
    brand: 'Dodge',
    model: '2022',
    name: 'Charger',
    photo: './assets/img/dodge.png',
    price: '10000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2021',
    name: 'RS7',
    photo: '/assets/img/audi.png',
    price: '20000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2020',
    name: 'RS7',
    photo: '/assets/img/audi_rs.png',
    price: '30000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Range Rover',
    model: '2019',
    name: 'Velar',
    photo: '/assets/img/suv.png',
    price: '40000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Dodge',
    model: '2018',
    name: 'Charger',
    photo: './assets/img/dodge.png',
    price: '50000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2017',
    name: 'RS7',
    photo: './assets/img/audi.png',
    price: '60000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2016',
    name: 'RS7',
    photo: './assets/img/audi_rs.png',
    price: '70000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Range Rover',
    model: '2015',
    name: 'Velar',
    photo: './assets/img/suv.png',
    price: '80000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const MOCK_CARS: ICar[] = [...AUTOS];
