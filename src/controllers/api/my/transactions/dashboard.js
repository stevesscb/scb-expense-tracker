import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiMyDashboard = async (req, res) => {
  try {
    const userId = req.session.user.id

    const foundTransactions = await prisma.transaction.findMay({
      where: {
        userId
      },
      orderBy: {
        date: 'asc'
      },
      include: {
        category: true
      }
    })

    return res.json(200).json(foundTransactions)
  } catch (err) {
    return handleErrors(res, res)
  }
}

export default controllersApiMyDashboard
