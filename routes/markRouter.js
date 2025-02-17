import express from 'express'
import markController from '../controller/markController.js';

const markRouter = express.Router();

/**
 * @swagger
 * /marks:
 *   get:
 *     summary: Get all mark
 *     description: Get all mark.
 *     responses:
 *       200:
 *         description: Get all mark.
 */
markRouter.get('/', markController.getMark);

/**
 * @swagger
 * /marks:
 *   post:
 *     summary: Add mark
 *     description: Add mark.
 *     responses:
 *       200:
 *         description: Add mark.
 */
markRouter.post('/', markController.postMark);

/**
 * @swagger
 * /marks:
 *   put:
 *     summary: Update mark
 *     description: Update mark.
 *     responses:
 *       200:
 *         description: Update mark.
 */
markRouter.put('/update-mark/:studentID', markController.updateMark)

export default markRouter