import { Flight } from '../models/flight.js'

function index(req, res){
  Flight.find({}, function(err, flight){
    res.render('flights/index', {
      title: 'All Flights',
      flight: flight
    })
  })
}

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res){
  const flight = new Flight(req.body)
  flight.save((err) => {
    if(err) {
      return res.redirect('flights/new')
    }
    res.redirect(`/movies/${flight._id}`)
  })
}

export{
  index,
  newFlight as new,
  create 
}