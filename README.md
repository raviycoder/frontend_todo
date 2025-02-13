# Todo List Application

This is a full-stack Todo List application with a backend built using Node.js, Express, and MongoDB, and a frontend built using Next.js.

## Getting Started

### Backend

1. **Install Dependencies**: Navigate to the `backend` directory and install the required dependencies.
    ```bash
    cd backend
    npm install
    ```

2. **Environment Variables**: Create a `.env` file in the [backend](http://_vscodecontentref_/1) directory and add the necessary environment variables.
    ```env
    MONGO_URI=<your-mongodb-uri>
    JWT_SECRET=<your-jwt-secret>
    ```

3. **Run the Server**: Start the development server.
    ```bash
    npm run start
    ```

### Frontend

1. **Install Dependencies**: Navigate to the [frontend](https://github.com/raviycoder/frontend_todo) directory and install the required dependencies.
    ```bash
    cd frontend
    npm install
    ```

2. **Run the Development Server**: Start the development server.
    ```bash
    npm run dev
    ```

3. **Open in Browser**: Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Functionality

### Backend

- **User Authentication**: Users can register and log in using JWT-based authentication.
- **Todo Management**: Users can create, read, update, and delete todo items.
- **Database Connection**: The app connects to a MongoDB database to store user and todo data.

### Frontend

- **User Interface**: A responsive UI built with Next.js for managing todo items.
- **API Integration**: The frontend communicates with the backend API to perform CRUD operations on todo items.
- **Authentication**: Users can log in and manage their todos securely.

## Deployment

The easiest way to deploy the Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Learn More

To learn more about the technologies used in this project, take a look at the following resources:

- [Express Documentation](https://expressjs.com/)
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Next.js Documentation](https://nextjs.org/docs)
- [Learn Next.js](https://nextjs.org/learn)

## License

This project is licensed under the ISC License.