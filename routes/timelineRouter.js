import express from 'express'
import timelineController from '../controller/timelineController.js';

const timelineRouter = express.Router();

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
timelineRouter.get('/', timelineController.getTimeline);

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
timelineRouter.post('/', timelineController.postTimeline);

export default timelineRouter;