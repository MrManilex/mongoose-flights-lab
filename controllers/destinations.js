import { Destination } from "../models/destination.js"

function newDestiny(req, res){
  Destination.find({}, function(err, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination', 
      destinations
    })
  })
}

export {
  newDestiny as new
}