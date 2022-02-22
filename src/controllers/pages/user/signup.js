const controllersPagesUserSignup = async (req, res) => {
  res.render('user/signup', { layout: 'layout-without-navbar' })
}

export default controllersPagesUserSignup
