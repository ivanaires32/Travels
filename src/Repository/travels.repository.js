import connection from "../database/database.js";

export async function allTravels() {
    const travels = await connection.query(`
        SELECT passengers."fullName", COUNT(passenger_travels."passengerId") FROM passengers
        JOIN passenger_travels ON passenger_travels."passengerId" = passengers.id
        GROUP BY "fullName"
        LIMIT 100
    `)

    const result = travels.rows

    return result
}

export async function offsetTravels(page) {
    const travels = await connection.query(`
        SELECT passengers."fullName", COUNT(passenger_travels."passengerId") FROM passengers
        JOIN passenger_travels ON passenger_travels."passengerId" = passengers.id
        GROUP BY "fullName"
        LIMIT 100
        OFFSET $1
    `, [page * 100])

    const result = travels.rows

    return result
}