// routes/api.js

/**
 * Route list
 *  Signup : api/signup
 *  Login : api/authenticate
 *  Logout : api/logout
 *
 *  Profile : api/profile
 *  Admin : api/admin
 *
 *  Search products multi pharmacies : api/search/xxxx
 *  Search products mono pharmacy : api/search/pharmacy/xxxx
 */

"use strict";

const router = require("express").Router();

const config = require("../config/config");

const AuthController = require("../controllers/signUp");
// const UserController = require("../controllers/userController");


/**
 * The routes module
 * @module APIRoutes
 */

/**
 * The routes module constructor
 * @member
 * @function
 * @param {object} passport - the passport token security
 */

var APIRoutes = function (passport) {
    // ----------------------------------------- AUTHENTICATION -------------------------------------------- //

    // Register - POST
    router.post(
        "/users/inscription",

        AuthController.signUp
    );
};

module.exports = APIRoutes;
