import { Router } from 'express'

import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// API | USER
router.post('/api/user/signup', (await import('./controllers/api/user/signup.js')).default)
router.post('/api/user/login', (await import('./controllers/api/user/login.js')).default)
router.delete('/api/user/logout', (await import('./controllers/api/user/logout.js')).default)

// API | MY | DASHBOARD
router.get('/api/my/transactions/dashboard', authenticateUser('json'), (await import('./controllers/api/my/transactions/dashboard.js')).default)

// API | MY | ADD TRANSACTION
router.get('/api/my/transactions/create', authenticateUser('json'), (await import('./controllers/api/my/transactions/create.js')).default)

// PAGES | USER
router.get('/user/signup', (await import('./controllers/pages/user/signup.js')).default)
router.get('/user/login', (await import('./controllers/pages/user/login.js')).default)

// PAGES | MY | ADD TRANSACTION
router.get('/my/transactions/create', authenticateUser('html'), (await import('./controllers/pages/my/transactions/create.js')).default)

// PAGES | USER *AUTHENTICATION REQUIRED
router.get('/my/transactions/dashboard', authenticateUser('html'), (await import('./controllers/pages/my/transactions/dashboard.js')).default)

export default router
