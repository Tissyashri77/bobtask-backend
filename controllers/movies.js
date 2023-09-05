const movieBookingSchema = require("../models/movieBookingSchema");
const moviesSchema = require("../models/moviesSchema");

const movieslist = async(req, res, next) => {
    try{
        const movies = await moviesSchema.find()
        return res.json(movies)
    }
    catch(e) {
        next(error)
    }
}

const moviebyId = async(req, res, next) => {
    try{
        const movie = await moviesSchema.findById(req.params.id)
        return res.json(movie)
    }
    catch(e){
        next(error)
    }
}

const moviebooking = async(req, res, next) => {
    const {movieId, showdate, showtime, seats, bookedbyId} = req.body;
    try{
        console.log(bookedbyId);
        const bookings = new movieBookingSchema({movieId, showdate, showtime, seats, bookedbyId});
        await bookings.save()
        res.json({status:200})
    }
    catch(e){
        console.log(e)
    }
}


const getMoviebookingbyId = async (req, res) => {
    try {
      const movieId = req.params.id;
      const { date, time } = req.query;
  
      console.log(date);
      console.log(time.toString());

      // Parse date and time from query string and convert to Date object
  
      // Use the `$and` operator to filter based on both movieId, date, and time
      const booking = await movieBookingSchema.findOne({
        movieId: movieId,
        time:time.toString()
      });
  
      return res.json(booking);
    } catch (e) {
      console.log(e);
      return res.status(500).json({ error: "An error occurred" });
    }
  };
  

module.exports = {movieslist, moviebyId, moviebooking, getMoviebookingbyId}