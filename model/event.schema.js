import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
    date: String,
    from: String,
    to: String,
    color: String,
    data_type: String,
    reference_id: String,
    type: String,
    content: String
})

const EventModel = mongoose.model('event', eventSchema);

export default EventModel;