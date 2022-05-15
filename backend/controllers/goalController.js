// @desc Get all goals
// @route GET /api/goals
// @access PRIVATE
const getGoals = (req, res) => {
  res.status(200).json({ message: "Git Goals" });
};
// @desc Set a goal
// @route POST /api/goals
// @access PRIVATE
const setGoal = (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error("please add a text");
  }
  res.status(200).json({ message: "Set Goal" });
};
// @desc Update a goal
// @route UPDATE /api/goals/:id
// @access PRIVATE
const updateGoal = (req, res) => {
  res.status(200).json({ message: `Update Goal ${req.params.id}` });
};
// @desc Delete a goal
// @route DELETE /api/goals/:id
// @access PRIVATE
const deleteGoal = (req, res) => {
  res.status(200).json({ message: `Delete Goal ${req.params.id}` });
};

module.exports = {
  getGoals,
  setGoal,
  updateGoal,
  deleteGoal,
};
