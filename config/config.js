// config/config.js

// Application configuration.
"use strict";

const config = module.exports;

// Database credentials
config.db = {
    user: "root",
    password: "root",
    name: "clausius"
};

config.db.details = {
    host: "localhost",
    port: 3306,
    dialect: "mysql",
    dialectOptions: {
        dateStrings: true,
        typeCast: function (field, next) {
            // for reading from database
            if (field.type === "DATETIME") {
                return field.string();
            }
            return next();
        }
    },
    timezone: "+02:00"
};

