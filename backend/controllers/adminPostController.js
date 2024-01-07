// Import Admin Model
const Admin = require('../models/AdminModel');

// Define the controller
const adminController = (req, res) => {
    const { username, password } = req.body;

    // Check if the username already exists
    Admin.findOne({ username: username })
        .then((existingAdmin) => {
            if (existingAdmin) {
                return res.status(409).json({ message: 'Username already exists' });
            }

            // If the username doesn't exist, create a new admin
            const newAdmin = new Admin({
                username: username,
                password: password,
            });

            // Save the new admin to the database
            newAdmin.save()
                .then(() => {
                    res.status(201).json({ message: 'Admin created successfully' });
                })
                .catch((saveError) => {
                    console.error('Error saving admin:', saveError.message);
                    res.status(500).json({ message: 'Error creating admin' });
                });
        })
        .catch((error) => {
            console.error('Error checking existing admin:', error.message);
            res.status(500).json({ message: 'Error creating admin' });
        });
};


// Export the controller
module.exports = adminController;
