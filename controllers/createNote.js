import notesModel from '../models/notesSchema.js';

const createNote = async(req , res) => {
    console.log("in createNote");
    const {username ,noteId , title,  content} = req.body;
    console.log(title);
    const notes = await notesModel.find();
    console.log(notes);
    try{

        const filterNotes = notes.filter((note) => note.noteId === noteId)
        if(filterNotes.length > 0){
            generateNoteId();
        }
        else{
            const newNote = new notesModel({
                username : username,
                noteId : noteId,
                title : title,
                content : content
            })
            await newNote.save();
            res.status(201).json({message : 'Note created successfully', noteId : noteId});
        }
        
    }
    catch(e){
        console.error(e);
        return res.status(500).json({message : 'Server Error'});
    }
}

const generateNoteId = () => {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'; 
        let result = '';
        for (let i = 0; i < 10; i++) {
            result += characters.charAt(Math.floor(Math.random() * characters.length));
        }
        return result;
}

export default createNote;