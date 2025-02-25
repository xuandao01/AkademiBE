import EventModel from "../model/event.schema.js"

const eventController = {
    getEvents: async (req, res) => {
        try{
            let {data_type, reference_id} = req.query;
            let data = await EventModel.find({data_type, reference_id});
    
            res.status(200).send(data);
        }
        catch (e) {
            res.status(500).send("Internal server error");
        }
    },

    addEvent: async (req, res) => {
        try{
            let data = req.body;
            console.log(data);
            let result = await EventModel.create(data);
            res.status(200).send(result);
        }
        catch (e) {
            res.status(500).send("Internal server error");
        }
    }
}

export default eventController;