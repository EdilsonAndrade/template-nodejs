import { Router } from 'express';

const routes = new Router();

routes.get('/', (req, res) => {
  return res.json('You are connected to the NodeJs template!');
});

export default routes;
