# Full Stack eCommerce Project   [**🔗Live Link**](https://easy-shoppe.vercel.app/)

## Overview
This project is a complete eCommerce application built using modern web development technologies. It includes a React-based frontend, a Node.js backend with Express, and MongoDB as the database. The application supports user authentication, product management, cart functionality, order placement, and integrates with Stripe and Razorpay payment gateways. The application is fully deployed on Vercel.

![Screenshot 2024-12-11 111020](https://github.com/user-attachments/assets/1d587b69-6c8b-4121-892e-fc7d4fe21c6d)

## Features
- **Frontend**: Responsive design with React.js and routing.
- **Authentication**: User and admin authentication using secure practices.
- **Admin Panel**: Dashboard for product and order management.
- **Payment Gateways**: Integrated with Stripe and Razorpay for secure transactions.
- **Deployment**: Full stack deployed using Vercel for seamless performance.

## Project Setup
To set up the project locally:

### Frontend
1. Clone the repository.
2. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

### Backend
1. Navigate to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Set up the environment variables:
   - Create a `.env` file with the necessary variables (e.g., MongoDB URI, Stripe keys, Razorpay keys).
4. Start the backend server:
   ```bash
   npm start
   ```

## Pages and Features

### Home Page
- Developed components for showcasing featured products and categories.

### Collection Page
- Displays a list of product collections.

### Product Page
- Shows detailed information about individual products, including images, descriptions, and price.

### Cart and Place Order Page
- Allows users to manage their cart and place orders.

### My Orders and Login Page
- Enables users to view their order history and login securely.

### About and Contact Page
- Provides information about the business and a contact form.

## Backend Features

### User Authentication
- Secure registration and login for users.
- Admin-specific authentication for accessing the admin dashboard.

### Product Upload
- Admins can add, update, and delete products.

### Order Management
- Orders are recorded and can be viewed in the admin panel.
- Users can view their order history.

### APIs Integration
- APIs connect the backend to both the frontend and the admin panel.

## Payment Integration
- **Stripe Payment Gateway**: For global users.
- **Razorpay Payment Gateway**: For Indian users.

## Deployment
- The project is deployed on [Vercel](https://vercel.com/) for both frontend and backend.

## Technologies Used
- **Frontend**: React.js, React Router.
- **Backend**: Node.js, Express.js.
- **Database**: MongoDB.
- **Styling**: Tailwind CSS.
- **Authentication**: JWT (JSON Web Tokens).
- **Payment Gateways**: Stripe, Razorpay.
- **Deployment**: Vercel.

## How to Contribute
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature-name
   ```
3. Make your changes and commit them:
   ```bash
   git commit -m "Added feature-name"
   ```
4. Push to the branch:
   ```bash
   git push origin feature-name
   ```
5. Open a pull request.
