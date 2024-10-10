## Blog Web Application
This is a simple Blog Web Application built using Node.js, Express.js, and EJS. The application allows users to create and view blog posts. The posts do not persist between sessions as this version does not use a database. The project emphasizes styling to create a visually appealing and responsive user interface, including features like animated gradient backgrounds and 3D effects.

## Features
Create and view blog posts.
Posts are not persisted between sessions.
Responsive design for mobile, tablet, and desktop views.
Animated purple gradient background with moving shades.
Modern and user-friendly UI styling with 3D hover effects.
## Technologies Used
Node.js: JavaScript runtime environment.
Express.js: Web framework for Node.js.
EJS (Embedded JavaScript): Templating engine for rendering views.
CSS: For styling, including animations and responsive design.
## Project Structure
```bash
├── public
│   └── styles.css      # Stylesheet for the application
├── views
│   ├── index.ejs       # Main EJS template for displaying blog posts and form
│   └── layout.ejs      # Layout file for consistent header/footer
├── app.js              # Main application file (Express.js server)
├── package.json        # Project dependencies and metadata
└── README.md           # Project documentation
```
## Setup Instructions
Clone the repository:

```bash
git clone https://github.com/RoyShubham07/blog-web-app.git
```
Navigate to the project directory:

```bash
cd blog-web-app
```
## Install dependencies:

Make sure you have Node.js installed. Then run:

```bash
npm install
```
Start the server:

Run the following command to start the application:

```bash
node app.js
```
View the application:

Open your browser and go to http://localhost:3000 to view the blog.

## Screenshot
![Screenshot 2024-10-11 005225](https://github.com/user-attachments/assets/2344117d-be9b-4137-b00c-1edb0b7afbda)
