import camelCase from 'camelcase-keys'

import DB from '../db'

export const getLowestPriceByHotelId = async (hotelId) => {

    const res = await DB.query('SELECT * FROM rooms INNER JOIN openings ON rooms.id = openings.room_id WHERE hotel_id=$1::int AND openings.sale_id=90::int ORDER BY openings.discount_price ASC', [hotelId]);
    // const res = await DB.query('SELECT * FROM rooms INNER JOIN openings ON rooms.id = openings.room_id LEFT JOIN (SELECT bookings.room_id, bookings.date as bookedDate, COUNT(*) as stockSold FROM bookings GROUP BY (bookings.room_id, bookings.date)) AS booked ON booked.room_id = rooms.id AND booked.bookedDate = openings.date WHERE hotel_id=$1::int AND openings.sale_id=90::int ORDER BY openings.discount_price ASC', [hotelId]);

    /*const test = await DB.query('SELECT room_id, date, COUNT(*) as stockSold FROM bookings GROUP BY bookings.room_id, bookings.date');

    res.rows.map(value => {
        const filteredBooking = test.rows.filter(i => i.room_id == value.room_id & i.date == value.date);
        return {
            id: value.id,
            name: value.name,
            hotelId: value.hotelId,
            saleId: value.saleId,
            roomId: value.roomId,
            date: value.date,
            stock: value.stock,
            price: value.price,
            discountPrice: value.discountPrice, 
            booked: filteredBooking.length
        }

    }
    )*/


    return camelCase(res.rows[0]);
}
