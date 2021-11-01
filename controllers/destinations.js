import { Destination } from "../models/destination.js"

function newDestiny(req, res){
  Destination.find({}, function(err, destinations) {
    res.render('destinations/new', {
      title: 'Add Destination', 
      destinations
    })
  })
}

function create(req, res){
  const destination = new Destination(req.body)
  destination.save(function(err) {
    if(err) {
      return res.redirect('/destination/new')
    }
    res.redirect('/destinations/new')
  })
}

export {
  newDestiny as new,
  create
}