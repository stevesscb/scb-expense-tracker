const controllersPagesTransactionsShow = async (req, res) => {
  res.render('transactions/show', { id: req.params.id })
}

export default controllersPagesTransactionsShow
