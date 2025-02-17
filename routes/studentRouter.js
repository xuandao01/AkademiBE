import express from 'express'
import studentController from '../controller/studentController.js';
import studentMiddleware from '../middleware/studentMiddleware.js';
import multer from 'multer';

const studentRouter = express.Router();

const storage = multer.memoryStorage();
const upload = multer({
    storage: storage
})
/**
 * @swagger
 * /students:
 *   get:
 *     summary: Get all students
 *     description: Retrieve a list of all students.
 *     responses:
 *       200:
 *         description: A list of students.
 */
studentRouter.get('/', studentController.getListStudent);

/**
 * @swagger
 * /students/register:
 *   post:
 *     summary: Student register account
 *     description: Student register account.
 *     responses:
 *       200:
 *         description: Student register account.
 */
studentRouter.post('/register', studentMiddleware.checkRegister, studentController.register);

/**
 * @swagger
 * /students/update-student:
 *   put:
 *     summary: Student update
 *     description: Student update.
 *     responses:
 *       200:
 *         description: Student update.
 */
studentRouter.put('/update-student', studentController.updateNewStudent);

/**
 * @swagger
 * /students/update-student-avatar:
 *   put:
 *     summary: Student avatar update
 *     description: Student avatar update.
 *     responses:
 *       200:
 *         description: Student avatar update.
 */
studentRouter.put('/update-student-avatar', upload.single('avatar'), studentController.uploadAvatar);

/**
 * @swagger
 * /students/update-student/:studentID:
 *   put:
 *     summary: Student update by id
 *     description: Student update by id.
 *     responses:
 *       200:
 *         description: Student update by id.
 */
studentRouter.put('/update-student/:studentID', studentController.updateStudent);

/**
 * @swagger
 * /students/delete-student/:studentID:
 *   delete:
 *     summary: Student delete by id
 *     description: Student delete by id.
 *     responses:
 *       200:
 *         description: Student delete by id.
 */
studentRouter.delete('/delete-student/:studentID', studentController.deleteStudent)

export default studentRouter;