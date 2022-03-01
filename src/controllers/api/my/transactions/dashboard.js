import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyDashboard = async (req, res) => {
  try {
    const userId = req.session.user.id
    const orderBy = req.query.orderBy || 'id'
    const sortBy = req.query.sortBy || 'asc'
    // localhost:3000/my/transactions/dashboard?orderBy=amount
    // localhost:3000/my/transactions/dashboard?orderBy=date

    const foundTransactions = await prisma.transaction.findMany({
      where: {
        userId
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
    return handleErrors(res, res)
  }
}

export default controllersApiMyDashboard
