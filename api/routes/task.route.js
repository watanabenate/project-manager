const express = require('express');
const app = express();

// GET
app.get("/task/:id", (req, res) => {
    // TODO logic for retrieving task
});

// POST
app.post("/task", (req, res) => {
    // TODO logic for creating task
})

// PUT
app.put("/task", (req, res) => {
    // TODO logic for updating task
})

// GET
app.get("/tasks", (req, res) => {
    // TODO logic for retrieving tasks
});

// GET
app.delete("/task/:id", (req, res) => {
    // TODO logic for deleting task
});

