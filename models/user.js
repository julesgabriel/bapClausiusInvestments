// models/user.js

// The User model.
"use strict";

const Sequelize = require("sequelize");
const bcryptjs = require("bcryptjs");

const config = require("../config/config");
const db = require("../services/database");

/**
 * The user model
 * @module models/user
 */

/**
 * The model definition
 * @member modelDefinition
 * @type {Object}
 */
var modelDefinition = {
    id: {
        type: Sequelize.INTEGER,
        unique: true,
        primaryKey: true,
        autoIncrement: true
    },
    email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
    },
    user: {
        type: Sequelize.STRING,
        allowNull: false
    },

    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answers_A: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answers_B: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answers_C: {
        type: Sequelize.STRING,
        allowNull: false
    },
    answers_D: {
        type: Sequelize.STRING,
        allowNull: false
    },
    authentification: {
        type: Sequelize.INTEGER,
        allowNull: false,
    }
};

/**
 * The model options
 * @member
 * @type {Object}
 */
var modelOptions = {
    /* Hooks are functions which are called before and after calls in sequelize are executed.
     *  cf https://docs.sequelizejs.com/manual/hooks.html
     */
    hooks: {
        beforeValidate: hashPassword // Hash the password automatically every new registration
    }
};

// 3: Define the User model.
var UserModel = db.define("user", modelDefinition, modelOptions);

// 4: Add functions to the model
UserModel.comparePasswords = comparePasswords;

/**
 * Compares two passwords.
 * @param {string} password - the password we want to compare
 * @param {object} user - the user object containing a password property
 * @param {function} callback - callback function depending on success
 */
function comparePasswords(password, user, callback) {
    bcryptjs.compare(password, user.password, function (error, isMatch) {
        if (error) {
            return callback(error);
        }

        return callback(null, isMatch);
    });
}

/**
 * Hashes the password for a user object
 * @param {object} user - a user object containing a password property
 */
function hashPassword(user) {
    if (user.changed("password")) {
        return bcryptjs.hash(user.password, 10).then(function (password) {
            user.password = password;
        });
    }
}

module.exports = UserModel;
