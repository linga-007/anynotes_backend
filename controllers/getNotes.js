import notesModel from '../models/notesSchema.js';

const getNotes = async(req , res) => {
    console.log("in createNote");
    
    const {noteId} = req.params;
    console.log(noteId);
   
    try{
        const note = await notesModel.find({noteId: noteId});
        if(note.length ===1){
            res.status(200).json({"note" : note})
        }   
        else{
            res.status(400).json({"msg" : "note not found"})
        }
        
    }
    catch(e){
        console.error(e);
        return res.status(500).json({message : 'Server Error'});
    }
}

export default getNotes;