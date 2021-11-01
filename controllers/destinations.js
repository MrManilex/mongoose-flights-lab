import { Destination } from "../models/destination.js"

function newDestiny(req, res){
  res.render('destinations/new', {
    title: 'Add Destination'
  })
}

export {
  newDestiny as new
}