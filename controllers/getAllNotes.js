import notesModel from '../models/notesSchema.js';

const getAllNotes = async(req , res) => {
    const {username} = req.body;
    console.log(username)
    console.log("in createNote");
    const notes = await notesModel.find({username});
    console.log(notes);
    res.status(200).send({"notes" : notes}) ;
    
}

export default getAllNotes;