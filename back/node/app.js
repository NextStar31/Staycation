import express from 'express'
import cors from 'cors'

import { getUser } from './services/userService';
import { getHotels } from './services/hotelService';
import { getReviewsByHotelId } from './services/reviewService';
import { getLowestPriceByHotelId } from './services/priceService';

const app = express();

app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello World!');
})

app.get('/users/:id', async (req, res) => {
  const user = await getUser(req.params.id);
  res.send(user);
})

app.get('/hotels', async (req, res) => {
  const hotels = await getHotels();
  res.send(hotels);
})

app.get('/reviews/:hotel_id', async (req, res) => {
  const reviews = await getReviewsByHotelId(req.params.hotel_id);
  res.send(reviews);
})

app.get('/prices/:hotel_id', async (req, res) => {
  const prices = await getLowestPriceByHotelId(req.params.hotel_id);
  res.send(prices);
})

app.listen(9000, function () {
  console.log('Example app listening on port 9000!');
})
