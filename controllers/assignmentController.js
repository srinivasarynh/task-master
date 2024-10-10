const Task = require('./../models/assignmentModel');
const catchAsync = require('./../utils/catchAsync');
const AppError = require('./../utils/appError');
const User = require('../models/userModel');

exports.upload = catchAsync(async (req, res, next) => {
    const task = await Task.create({
        task: req.body.task,
        user: req.body.user,
        admin: req.body.admin,
    });

    res.status(201).json({
        status: 'success',
        data: {
            task
        }
    })
});


exports.getAdmins = catchAsync(async (req, res, next) => {
    const admins = await User.find({
        role: 'Admin'
    }).select('_id name email');

    res.status(200).json({
        status: 'success',
        data: {
            admins
        }
    })
});

exports.getAssignments = catchAsync(async (req, res, next) => {
    const assignments = await Task.find({
        admin: req.user._id        
    });

    res.status(200).json({
        status: 'success',
        data: {
            assignments
        }
    });
});

exports.accept = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const acceptance = await Task.findByIdAndUpdate(id, {
        status: 'Accepted'
    });

    res.status(200).json({
        status: 'success',
        data: {acceptance}
    })
});

exports.reject = catchAsync(async (req, res, next) => {
    const id = req.params.id;
    const acceptance = await Task.findByIdAndUpdate(id, {
        status: 'Rejected'
    });

    res.status(200).json({
        status: 'success',
        data: {acceptance}
    })
});