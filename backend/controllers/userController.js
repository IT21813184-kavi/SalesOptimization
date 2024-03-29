import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js'


// @desc Auth user/set token
// route POST /api/users/auth
// @access Public
const authUser = asyncHandler(async (req, res) => {
      //res.status(401);
     // throw new Error('Something went wrong');
     res.status(200).json({ message: 'Auth User'});
});

// @desc Register a new user
// route POST /api/users
// @access Public
const registerUser = asyncHandler(async (req, res) => {
   console.log(req.body);
 
    res.status(200).json({ message: 'Register User'});
});

// @desc logout user
// route POST /api/users/logout
// @access Public
const logoutUser = asyncHandler(async (req, res) => {
    //res.status(401);
   // throw new Error('Something went wrong');
   res.status(200).json({ message: 'Logout User'});
});

// @desc Get user profile
// route GET /api/users/profile
// @access Private
const getUserProfile = asyncHandler(async (req, res) => {
    //res.status(401);
   // throw new Error('Something went wrong');
   res.status(200).json({ message: ' User profile'});
});

// @desc Update user profiles
// route POST /api/users/profiles
// @access Private
const updateUserProfile = asyncHandler(async (req, res) => {
    //res.status(401);
   // throw new Error('Something went wrong');
   res.status(200).json({ message: 'Update user profile'});
});






export { 
    authUser,
    registerUser,
    logoutUser,
    getUserProfile,
    updateUserProfile
};