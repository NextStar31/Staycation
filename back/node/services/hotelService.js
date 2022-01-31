import camelCase from 'camelcase-keys'

import DB from '../db'

export const getHotels = async () => {
  const res = await DB.query('SELECT * FROM hotels')
  return camelCase(res.rows)
}
