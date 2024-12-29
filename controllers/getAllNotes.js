import notesModel from '../models/notesSchema.js';

const getAllNotes = async(req , res) => {
    console.log("in createNote");
    const notes = await notesModel.find();
    console.log(notes);
    res.status(200).send({"notes" : notes}) ;
    
}

export default getAllNotes;