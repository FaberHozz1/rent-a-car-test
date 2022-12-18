import { INavbarItems } from '@core/interfaces/navbar.interface';
import { MODULES, ROUTES } from './routes.constant';

export const NAVBAR_ITEMS: { [key: string]: INavbarItems } = {
  [MODULES.HOME]: {
    text: 'Inicio',
    path: ROUTES[MODULES.HOME],
  },
  [MODULES.SERVICES]: {
    text: 'Servicios',
    path: ROUTES[MODULES.SERVICES],
  },
  [MODULES.CONTACT_US]: {
    text: 'Contáctanos',
    path: ROUTES[MODULES.CONTACT_US],
  },
  // You can add paths to another feature, like a payment method, user information and other things
};

export const NAVBAR_ITEMS_DEFAULT: INavbarItems[] = [
  NAVBAR_ITEMS[MODULES.HOME],
  NAVBAR_ITEMS[MODULES.SERVICES],
  NAVBAR_ITEMS[MODULES.CONTACT_US],
];

// You can create another navbar items constant to another states, like a user sessión or admin session and other things.
