const express = require('express');
const assignmentController = require('../controllers/assignmentController');
const protectMiddleware = require("../middleware/protectMiddleware");

const router = express.Router();

router.use(protectMiddleware.protect);

router.post('/upload', assignmentController.upload);
router.get('/admins', assignmentController.getAdmins);
router.get('/assignments', assignmentController.getAssignments);
router.post('/assignments/:id/accept', assignmentController.accept);
router.post('/assignments/:id/reject', assignmentController.reject);


module.exports = router;