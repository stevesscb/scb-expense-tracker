import { Router } from 'express'

import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// API | USER
router.post('/api/user/signup', (await import('./controllers/api/user/signup.js')).default)
router.post('/api/user/login', (await import('./controllers/api/user/login.js')).default)
router.delete('/api/user/logout', (await import('./controllers/api/user/logout.js')).default)

// API | MY TRANSACTIONS
router.get('/api/my/transactions/dashboard', authenticateUser('json'), (await import('./controllers/api/my/transactions/dashboard.js')).default)
router.post('/api/my/transactions/create', authenticateUser('json'), (await import('./controllers/api/my/transactions/create.js')).default)
router.delete('/api/my/transactions/:id', authenticateUser('json'), (await import('./controllers/api/my/transactions/destroy.js')).default)
router.put('/api/my/transactions/:id/edit', authenticateUser('json'), (await import('./controllers/api/my/transactions/edit.js')).default)

// PAGES | USER
router.get('/user/signup', (await import('./controllers/pages/user/signup.js')).default)
router.get('/user/login', (await import('./controllers/pages/user/login.js')).default)

// PAGES | MY TRANSACTIONS
router.get('/my/transactions/create', authenticateUser('html'), (await import('./controllers/pages/my/transactions/create.js')).default)
router.get('/my/transactions/dashboard', authenticateUser('html'), (await import('./controllers/pages/my/transactions/dashboard.js')).default)
router.get('/my/transactions/:id/edit', authenticateUser('html'), (await import('./controllers/pages/my/transactions/edit.js')).default)

// STATIC | LANDING PAGE
router.get('/', (req, res) => { res.redirect('/user/login') })

export default router
