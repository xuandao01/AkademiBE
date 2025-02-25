import express from 'express'
import eventController from '../controller/eventController.js';

const eventRouter = express.Router();

/**
 * @swagger
 * /timeline:
 *   get:
 *     summary: Get all timeline
 *     description: Get all timeline.
 *     responses:
 *       200:
 *         description: Get all timeline.
 */
eventRouter.get('/', eventController.getEvents);

/**
 * @swagger
 * /timeline:
 *   post:
 *     summary: Add timeline
 *     description: Add timeline.
 *     responses:
 *       200:
 *         description: Add timeline.
 */
eventRouter.post('/', eventController.addEvent);

export default eventRouter;