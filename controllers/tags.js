import Debug from "debug"
import ec from "../util/error-codes.js"
const debug = Debug("app:tagsController")

// To be removed after implementing actual service methods
const data = {
    tags: [],
    counter: 0,
}

var tagsController = {}

tagsController.add = (req, res) => {
    const tag = req.body
    if (!tag.color || !tag.name) {
        res.json({ errorMessage: ec.tags.INVALID_REQ})
    } else {
        tag.id = data.counter++
        data.tags.push(tag)
        res.json(tag)
    }
}

tagsController.all = (req, res) => {
    res.json(data.tags)
}

export default tagsController