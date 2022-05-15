const getGoals = (req, res) => {
  res.status(200).json({ message: "Git Goals" });
};

const setGoal = (req, res) => {
  res.status(200).json({ message: "Set Goal" });
};

const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};

const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
