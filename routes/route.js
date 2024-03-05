const express = require("express");
const router = express.Router();
const {
  getTodo,
  postTodo,
  updateTodo,
  deleteTodo,
  getTodos,
} = require("../controllers/TodoController");

// GET TODO
router.get("/get-todo/:id", getTodo);

// GET TODOS
router.get("/get-todos", getTodos);

//! POST TODOS
router.post("/post-todo", postTodo);

//! PUT TODOS  (UPDATE)  /todos/:id
router.put("/todos/:id", updateTodo);

//! DELETE TODOS       // todos/:id
router.delete("/todos/:id", deleteTodo);

module.exports = router;
