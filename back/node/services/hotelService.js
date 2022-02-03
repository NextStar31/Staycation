import camelCase from 'camelcase-keys'

import DB from '../db'

export const getHotels = async () => {
  const res = await DB.query('SELECT * FROM hotels INNER JOIN (SELECT ROUND(AVG(score)::numeric ,1) as review_score, COUNT(*) as review_count, hotel_id FROM reviews GROUP BY reviews.hotel_id) AS reviewTable ON reviewTable.hotel_id=hotels.id  INNER JOIN (SELECT openings.price as start_price, openings.discount_price, openings.room_id, rooms.hotel_id FROM rooms INNER JOIN openings ON rooms.id = openings.room_id WHERE openings.sale_id=90::int ) AS CheapestRooms ON CheapestRooms.hotel_id=hotels.id ORDER BY CheapestRooms.discount_price ASC');

  const result = [];
  for (let index = 0; index < res.rows.length; index++) {
    const hotel = res.rows[index];
    if (!result.find(x => x.id === hotel.id)) {
      hotel.discount_percentage = Math.round((hotel.start_price - hotel.discount_price) / hotel.start_price * 100);
      result.push(hotel);
    }
  }

  result.sort((a, b) => (a.discount_percentage < b.discount_percentage) ? 1 : ((b.discount_percentage < a.discount_percentage) ? -1 : 0));

  return camelCase(result);
}
