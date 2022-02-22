const controllersPagesMyDashboard = async (req, res) => {
  res.render('my/transactions/dashboard', { addExpense: true, back: false })
}

export default controllersPagesMyDashboard
