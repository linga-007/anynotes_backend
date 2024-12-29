import express from 'express';
import createNote from '../controllers/createNote.js';
import getAllNotes from '../controllers/getAllNotes.js';
import getNotes from '../controllers/getNotes.js';

const router = express.Router();

router.post('/createNote', createNote);
router.get('/getNotes' , getAllNotes);
router.get('/note/:noteId', getNotes);

export default router;