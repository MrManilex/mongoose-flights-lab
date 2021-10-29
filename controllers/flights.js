import { Flight } from '../models/flight.js'

function index(req, res){
  Flight.find({}, function(err, flight){
    res.render('flights/index', {
      title: 'All Flights',
      flight
    })
  })
}

function newFlight(req, res){
  res.render('flights/new')
}

export{
  index,
  newFlight as new
}