import jwt from 'jsonwebtoken';
import User from '../models/user.model.js';

// Middleware to protect routes and ensure the user is authenticated
const protectRoute = async (req, res, next) => {
    try {
        // Get the token from the cookies of the incoming request
        const token = req.cookies.jwt;

        // If no token is found, respond with 401 Unauthorized
        if (!token) {
            return res.status(401).json({ error: "Unauthorized - No token provided" });
        }

        // Verify the token using the secret key from environment variables
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        // If token is invalid or expired, return 401 Unauthorized
        if (!decoded) {
            return res.status(401).json({ error: 'Unauthorized - Invalid token' });
        }

        // Find the user in the database using the decoded userId from the token
        const user = await User.findById(decoded.userId).select("-password"); // Don't send the password

        // If no user is found, respond with 404 Not Found
        if (!user) {
            return res.status(404).json({ error: "User not found" });
        }

        // If the user is found, attach the user to the request object for later use
        req.user = user;

        // Continue to the next middleware/controller
        next();

    } catch (error) {
        // Log the error and send a 500 Internal Server Error response if something goes wrong
        console.log("Error in protectRoute middleware", error.message);
        res.status(500).json({ error: "Internal server error" });
    }
}

export default protectRoute; // Export the middleware so it can be used in other parts of the app
