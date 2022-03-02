import moment from 'moment'
import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyDashboard = async (req, res) => {
  try {
    const userId = req.session.user.id
    const orderBy = req.query.orderBy || 'id'
    const sortBy = req.query.sortBy || 'asc'
    const date = req.query.date || 'All'

    const where = { userId, date: {} }

    switch (date) {
      case 'Today':
        where.date.gte = new Date(moment().startOf('day'))
        break
      case '2Week':
        where.date.gte = new Date(moment().startOf('week').subtract(7))
        break
      case 'Month':
        where.date.gte = new Date(moment().startOf('month'))
        break
      default:
        break
    }

    const foundTransactions = await prisma.transaction.findMany({
      where,
      orderBy: {
        [orderBy]: sortBy
      },
      include: {
        category: true
      }
    })

    return res.status(200).json(foundTransactions)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyDashboard
