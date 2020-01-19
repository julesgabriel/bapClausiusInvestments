const db = require("../services/database");
const User = require("../models/user");
var authController = {};


authController.signUp = function(req, res) {
    try {
        const errors = validationResult(req); // Finds the validation errors in this request and wraps them in an object with handy functions

        if (!errors.isEmpty()) {
            res.status(422).json({ errors: errors.array() });
            return;
        }

        // Sync to the db, creates table if not exists
        db.sync().then(function() {
            // Builds the new user object
            const newUser = {
                user : req.body.user,
                email: req.body.email,
                password: req.body.password,
                answers_A: req.body.answers_A,
                answers_B: req.body.answers_B,
                answers_C: req.body.answers_C,
                answers_D: req.body.answers_D,
                authentication : 0,
            };

            // INSERT INTO of a new user in the `users` table
            return User.create(newUser)
                .then(function(result) {
                    // Remove the password for the return value
                    delete newUser.password;

                    // Save user info inside cookies
                    req.session.user_id = result.user_id;
                    req.session.user_role = result.user_role;

                    // If successful, reacts according to the role
                    switch (result.user_role) {
                        case userRoles.patient: {
                            var newPatient = {
                                user_id: result.user_id
                            };

                            // INSERT INTO of a new patient in the `patients` table
                            Patient.create(newPatient).then(function(resultNewPatient) {
                                req.session.patient_id = resultNewPatient.patient_id;

                                // Create the JWT token for the passport JWT authentication
                                var token = jwt.sign({ id: newPatient.user_id }, keys.secret, {
                                    expiresIn: "30m"
                                });

                                // Sends success message + the token the client has to save for future JWT authentication
                                res.status(201).json({
                                    data: newUser,
                                    message: "Account created!",
                                    success: true,
                                    token: "JWT " + token
                                });
                            });
                            break;
                        }
                        case userRoles.deliverer: {
                            var newDeliverer = {
                                user_id: result.user_id,
                                society: req.body.society,
                                type: req.body.type
                            };

                            // INSERT INTO of a new deliverer in the `deliverers` table
                            Deliverer.create(newDeliverer).then(function(resultNewDeliverer) {
                                req.session.deliverer_id = resultNewDeliverer.deliverer_id;

                                // Sends success message + the token the client has to save for future JWT authentication
                                res.status(201).json({
                                    data: newUser,
                                    message:
                                        "Account created! Waiting for administrator validation.",
                                    success: true
                                });
                            });
                            break;
                        }
                        case userRoles.pharmacist: {
                            var newPharmacist = {
                                user_id: result.user_id
                            };

                            // INSERT INTO of a pharmacist in the `pharmacists` table
                            Pharmacist.create(newPharmacist).then(function(
                                resultNewPharmacist
                            ) {
                                req.session.pharmacist_id = resultNewPharmacist.pharmacist_id;

                                // Sends success message + the token the client has to save for future JWT authentication
                                res.status(201).json({
                                    data: newUser,
                                    message:
                                        "Account created! Waiting for administrator validation.",
                                    success: true
                                });
                            });
                            break;
                        }
                    }
                })
                .catch(function(error) {
                    console.log(error);
                    res.status(403).json({ message: "Username already exists!" });
                });
        });
    } catch (err) {
        return next(err);
    }
};


module.exports = authController;