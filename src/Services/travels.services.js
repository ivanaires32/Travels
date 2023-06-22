import { allTravels, offsetTravels } from "../Repository/travels.repository.js";

async function getTravels() {
    const result = await allTravels()

    return result
}

async function pageTravels(page) {
    const result = await offsetTravels(page)

    return result
}

const travelsService = {
    getTravels, pageTravels
}

export default travelsService