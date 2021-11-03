import { Flight } from '../models/flight.js'
import { Destination } from '../models/destination.js'

function index(req, res){
  Flight.find({}, function(err, flight){
    res.render('flights/index', {
      title: 'All Flights',
      flight
    })
  })
}

function newFlight(req, res){
  res.render('flights/new', {
    title: 'Add Flight'
  })
}

function create(req, res){
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const flight = new Flight(req.body)
  flight.save(function(err) {
    if(err) {
      console.log(err)
      console.log(req.body)
      return res.redirect('/flights/new')
    }
    console.log(req.body)
    res.redirect('/flights')
  })
}

function show(req, res){
  Flight.findById(req.params.id)
  .populate('destinations')
  .exec(function(err, flight) {
    Destination.find({_id: {$nin: flight.destinations}}, function(err, destination) {
      res.render('flights/show', {
        title: 'Flight Detail',
        flight,
        destination
      })
    })
  })
}

function createTicket(req, res){
  Flight.findById(req.params.id, function(err, flight){
    flight.tickets.push(req.body)
    flight.save(function(err){
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

function addDestiny(req, res){
  Flight.findById(req.params.id, function(err, flight) {
    flight.destinations.push(req.body.destinationId)
    flight.save(function(err) {
      res.redirect(`/flights/${flight._id}`)
    })
  })
}

export{
  index,
  newFlight as new,
  create,
  show,
  createTicket,
  addDestiny
}