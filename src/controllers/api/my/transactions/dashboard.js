import moment from 'moment'
import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyDashboard = async (req, res) => {
  try {
    const userId = req.session.user.id
    const orderBy = req.query.orderBy || 'id'
    const sortBy = req.query.sortBy || 'asc'
    const date = req.query.date || '30'

    const foundTransactions = await prisma.transaction.findMany({
      where: {
        userId,
        date: {
          gte: new Date(moment().subtract(date, 'days'))
        }
      },
      orderBy: {
        [orderBy]: sortBy
        // id: asc
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
