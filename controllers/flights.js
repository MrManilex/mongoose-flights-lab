import { Flight } from '../models/flight.js'

function index(req, res){
  Flight.find({}, function(err, flight){
    res.render('flights/index', {
      title: 'All Flights',
      flight
    })
  })
}

export{
  index
}