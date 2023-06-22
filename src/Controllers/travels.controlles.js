import httpStatus from "http-status";
import travelsService from "../Services/travels.services.js";
export async function getTravels(req, res) {
    const { page } = req.query
    try {
        const number = Number(page)
        if (page && isNaN(number)) {
            return res.sendStatus(httpStatus.BAD_REQUEST)
        }

        if (page) {
            const result = await travelsService.pageTravels(number)

            return res.send(result)
        } else {
            const result = await travelsService.getTravels()
            return res.send(result)
        }

    } catch (err) {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message)
    }
}