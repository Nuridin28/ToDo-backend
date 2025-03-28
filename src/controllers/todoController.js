const Todo = require("../models/Todo");

exports.getTodos = async (req, res) => {
  const { status } = req.query;
  const filter = { user: req.user.userId };

  if (status) {
    filter.status = status;
  }

  const todos = await Todo.find(filter);
  res.json(todos);
};

exports.createTodo = async (req, res) => {
  const { title, status } = req.body;
  const todo = new Todo({ title, status, user: req.user.userId });
  await todo.save();
  res.json(todo);
};

exports.updateTodo = async (req, res) => {
  const { status } = req.body;
  const todo = await Todo.findById(req.params.id);

  if (!todo || todo.user.toString() !== req.user.userId) {
    return res.status(401).json({ msg: "Доступ запрещен" });
  }

  if (status) {
    todo.status = status;
  }

  await todo.save();
  res.json(todo);
};

exports.deleteTodo = async (req, res) => {
  const todo = await Todo.findById(req.params.id);
  if (!todo || todo.user.toString() !== req.user.userId) {
    return res.status(401).json({ msg: "Доступ запрещен" });
  }

  await todo.deleteOne();
  res.json({ msg: "Задача удалена" });
};
