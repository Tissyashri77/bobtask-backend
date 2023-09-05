const mongoose = require('mongoose');

const MovieBookingSchema = new mongoose.Schema({
    movieId:{
        type:String,
        required:true
    },
    showdate:{
        type: Date,
        required: true,
    },
    showtime:{
        type: String,
        required:true
    },
    seats:{
        type:Array,
        required:true
    },
    bookedbyId:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("bookings",MovieBookingSchema  )