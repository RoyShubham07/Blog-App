import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
let posts = [];

// Home route to display all posts
app.get("/", (req, res) => {
    res.render("index.ejs", { posts: posts });
});

// Route to create a new post
app.get("/new-post", (req, res) => {
    res.render("new-post.ejs");
});

// Handle new post form submission
app.post("/new-post", (req, res) => {
    const post = {
        title: req.body.title,
        content: req.body.content
    };
    posts.push(post);
    res.redirect('/');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});