const TodoModel = require("../models/TodoModels");

module.exports = {
  getTodo: async (req, res, next) => {
    try {
      const todo = await TodoModel.findById(req.params.id);
      res.send(todo);
    } catch (err) {
      res.status(404).json({ message: "Todo not found" });
    }
  },
  getTodos: async (req, res, next) => {
    try {
      const todos = await TodoModel.find();
      res.send(todos);
    } catch (err) {
      res.status(404).json({ message: "Todos not found" });
    }
  },
  postTodo: async (req, res, next) => {
    try {
      const todo = new TodoModel(req.body);
      await todo.save();
      res.status(201).json({ message: "Todo saved successfully" });
    } catch (error) {
      res.status(400).json({ message: "Birşeyler yanlış gitti." });
    }
  },
  deleteTodo: async (req, res, next) => {
    try {
      await TodoModel.findByIdAndDelete(req.params.id);
      res.status(200).json({ message: "Todo deleted successfully" });
    } catch (err) {
      next(err);
    }
  },
  updateTodo: async (req, res, next) => {
    try {
      await TodoModel.findByIdAndUpdate(req.params.id, req.body);
      res.status(200).json({ message: "Todo updated successfully" });
    } catch (err) {
      res.status(400).json({ message: err.message });
    }
  },
};
