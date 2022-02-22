const controllersPagesCreateTransaction = async (req, res) => {
  res.render('my/transactions/create', { back: true })
}

export default controllersPagesCreateTransaction
