import mongoose from 'mongoose';

const schema = new mongoose.Schema(
    {
        username : {
            type : String,
            required : true,
        } , 
        noteId : {
            type : String,
            required : true,
        },
        title : {
            type : String,
            required : true,
        },
        content : {
            type : String,
            required : true,
        }
    }
)

const notesModel = mongoose.model('notes', schema)

export default notesModel;