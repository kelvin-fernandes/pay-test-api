import { Router } from 'express';

import CityController from './app/controllers/CityController';

const routes = new Router();

routes.get('/cities', CityController.index);

export default routes;
