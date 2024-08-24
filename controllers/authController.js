const User = require('../models/userModel');


const JWT=require('jsonwebtoken')
const bcrypt=require('bcryptjs')




const registerController = async (req, res) => {
    try {
        const { userName, email, password, phone, address } = req.body;

        // Validation
        if (!userName || !email || !password || !address || !phone) {
            return res.status(400).send('Please provide all fields');
        }

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).send({
                message: "Email already exists"
            });
        }



        //copied from documentation 
//hashing password
        var salt=bcrypt.genSaltSync(10)

        const hashedPassword= await bcrypt.hash(password,salt)



        // Create user
        const user = await User.create({ userName, email, password: hashedPassword, phone, address });

        return res.status(201).json({
            user
        });

    } catch (error) {
        console.error(error);
        // Properly returning the error response and using res.status(500).json
        return res.status(500).json({
            message: "Server Error",
            error: error.message
        });
    }
}

//LOGIN

const loginController = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Check if both email and password are provided
        if (!email || !password) {
            return res.status(400).send('Fields not filled');
        }

        // Find user by email
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).send('User not found');
        }

        // Verify password (assuming you are hashing passwords, add comparison here)

        // Generate JWT token
        const token = JWT.sign({ id: user._id }, process.env.JWT_SECRET, {
            expiresIn: "7d",
        });

        // Return the token
        return res.status(200).send({ token });

    } catch (error) {
        console.error(error);
        return res.status(500).send('Server Error');
    }
};
module.exports = { registerController, loginController };
