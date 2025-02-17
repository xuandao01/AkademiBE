import express from 'express'
import notiController from '../controller/notiController.js';

const notiRouter = express.Router();

/**
 * @swagger
 * /notifications:
 *   get:
 *     summary: Get all notify
 *     description: Get all notify.
 *     responses:
 *       200:
 *         description: Get all notify.
 */
notiRouter.get('/', notiController.getNoti);

/**
 * @swagger
 * /notifications:
 *   post:
 *     summary: Add notify
 *     description: Add notify.
 *     responses:
 *       200:
 *         description: Add notify.
 */
notiRouter.post('/', notiController.postNoti);

export default notiRouter