import camelCase from 'camelcase-keys'

import DB from '../db'

export const getReviewsByHotelId = async (hotelId) => {
  const res = await DB.query('SELECT ROUND(AVG(score)::numeric ,1), COUNT(*) FROM reviews WHERE hotel_id=$1::int',[hotelId]);
  return camelCase(res.rows[0]);
}
