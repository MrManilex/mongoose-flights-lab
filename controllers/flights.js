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
      return res.redirect('/flights/new')
    }
    res.redirect(`/flights/${flight._id}`)
  })
}

function show(req, res){
  Flight.findById(req.params.id, function(err, flight){
    res.render('flights/show', {
      flight,
    })
  })
}

export{
  index,
  newFlight as new,
  create,
  show
}