const controllersPagesUserLogin = async (req, res) => {
  res.render('user/login', { layout: 'layout-without-navbar' })
}

export default controllersPagesUserLogin
