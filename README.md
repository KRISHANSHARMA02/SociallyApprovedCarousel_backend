# Node.js Backend

A simple Node.js backend with Express.js and MongoDB.

## Project Structure

- `controllers/` - Contains the controller logic
- `db/` - Database connection files
- `models/` - Mongoose models
- `routers/` - Express routers
- `server.js` - Main server file

## Installation

1. Clone the repository
2. Run `npm install`
3. Set up your MongoDB URI in `.env` file
4. Run `npm start` or `npm run dev` for development

## Usage

The server runs on port 3000 by default.

API endpoints:
- GET /api/users - Get all users
- GET /api/users/:id - Get user by ID
- POST /api/users - Create a new user
- PUT /api/users/:id - Update user
- DELETE /api/users/:id - Delete user