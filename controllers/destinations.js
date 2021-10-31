import { Destination } from "../models/destination.js"

function newDestiny(req, res){
  res.render('destinations/index', {
    title: 'Add Destination'
  })
}

export {
  newDestiny as new
}