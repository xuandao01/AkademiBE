import express from 'express'
import multer from 'multer';
import teacherMiddleware from '../middleware/teacherMiddleware.js';
import teacherController from '../controller/teacherController.js';

const teacherRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
})
/**
 * @swagger
 * /teachers:
 *   get:
 *     summary: Get all teachers
 *     description: Retrieve a list of all teachers.
 *     responses:
 *       200:
 *         description: A list of teachers.
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.get('/', teacherController.getTeacher);

/**
 * @swagger
 * /teachers/register:
 *   post:
 *     summary: Register teachers account
 *     description: Register teachers account.
 *     responses:
 *       200:
 *         description: Register teachers account.
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.post('/register', teacherMiddleware.checkValidUser ,teacherController.register);

/**
 * @swagger
 * /teachers/up-avatar:
 *   put:
 *     summary: Teacher update avatar
 *     description: Teacher update avatar
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.put('/up-avatar',teacherMiddleware.verifyToken, upload.single('avatar'), teacherController.uploadAvatar);

/**
 * @swagger
 * /teachers/login:
 *   post:
 *     summary: Teacher login
 *     description: Teacher login
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.post('/login' ,teacherController.login);

/**
 * @swagger
 * /teachers/forgot:
 *   post:
 *     summary: Teacher forgot account
 *     description: Teacher forgot account
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.post('/forgot' ,teacherController.forgotPass);

/**
 * @swagger
 * /teachers/update-teacher:
 *   put:
 *     summary: Teacher update account
 *     description: Teacher update account
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.put('/update-teacher', teacherMiddleware.verifyToken, teacherController.updateUser);

/**
 * @swagger
 * /teachers/change-password:
 *   put:
 *     summary: Teacher change-password account
 *     description: Teacher change-password account
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.put('/change-password', teacherMiddleware.verifyToken, teacherController.changePassword);

/**
 * @swagger
 * /teachers/reset-pass:
 *   put:
 *     summary: Teacher reset-pass account
 *     description: Teacher reset-pass account
 * tags:
 *   name: teacher
 *   description: Product management APIs
 */
teacherRouter.put('/reset-pass',teacherController.resetPass)


export default teacherRouter