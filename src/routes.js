import { Router } from 'express'

import authenticateUser from './_middlewares/authenticate-user.js'

const router = Router()

// API | USER
router.post('/api/user/signup', (await import('./controllers/api/user/signup.js')).default)
router.post('/api/user/login', (await import('./controllers/api/user/login.js')).default)

// API | MY DASHBOARD
router.get('/api/my/transactions/dashboard', authenticateUser('json'), (await import('./controllers/api/my/transactions/dashboard.js')).default)

// PAGES | USER
router.get('/user/signup', (await import('./controllers/pages/user/signup.js')).default)
router.get('/user/login', (await import('./controllers/pages/user/login.js')).default)

// PAGES | USER *AUTHENTICATION REQUIRED
router.get('/my/transactions/dashboard', authenticateUser('html'), (await import('./controllers/pages/my/transactions/dashboard.js')).default)

// STATIC
router.get('/', (await import('./controllers/static/home.js')).default)

export default router
