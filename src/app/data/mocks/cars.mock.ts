import { ICar } from '@core/interfaces/car.interface';

const AUTOS: ICar[] = [
  {
    brand: 'Dodge',
    model: '2017',
    name: 'Charger',
    photo: '/assets/img/dodge.png',
    price: '10000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2016',
    name: 'RS7',
    photo: '/assets/img/audi.png',
    price: '65000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Audi',
    model: '2016',
    name: 'RS7',
    photo: '/assets/img/audi_rs.png',
    price: '60000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
  {
    brand: 'Range Rover',
    model: '2020',
    name: 'Velar',
    photo: '/assets/img/suv.png',
    price: '60000',
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
  },
];

export const MOCK_CARS: ICar[] = [...AUTOS, ...AUTOS.reverse()];
// export const MOCK_CARS: ICar[] = [];
