import express from 'express';
import { createOne, readAll, readOne, deleteOne, updateOne } from '../services/texts';
import { NewText } from '../types';
const router = express.Router();

router.get('/', (req, res) => {
    if (req.query.level) {
        const level = readAll(req.query.level as string);
        res.send(level);
    } else {
        const texts = readAll();
        res.send(texts);
    }
});

router.get('/:id', (req, res) => {
    const text = readOne(req.params.id);
    if (!text) {
        res.sendStatus(404);
    }
    res.send(text);
});

router.post('/', (req, res) => {
    const body: unknown = req.body;

	if (
		!body ||
		typeof body !== "object" ||
		!("content" in body) ||
		!("level" in body) ||
		typeof body.content !== "string" ||
		typeof body.level !== "string" ||
		!body.content.trim() ||
		!body.level.trim() ||
        !["easy", "medium", "hard"].includes(body.level)) {
		return res.sendStatus(400);
	}
	const newText = body as NewText;

	const addedText = createOne(newText);

	if (!addedText) {
		return res.sendStatus(409);
	}

	return res.json(addedText);
});

router.delete('/:id', (req, res) => {
    const deletedText = deleteOne(req.params.id);
    if (!deletedText) {
        res.sendStatus(404);
    }
    res.send(deletedText);
});

router.put('/:id', (req, res) => {
    const body: unknown = req.body;

    if (
        !body ||
        typeof body !== "object" ||
        !("content" in body) ||
        !("level" in body) ||
        typeof body.content !== "string" ||
        typeof body.level !== "string" ||
        !body.content.trim() ||
        !body.level.trim() ||
        !["easy", "medium", "hard"].includes(body.level)) {
        return res.sendStatus(400);
    }
    const newText = body as NewText;

    const updatedText = updateOne(req.params.id, newText);

    if (!updatedText) {
        return res.sendStatus(409);
    }

    return res.json(updatedText);
});

export default router;