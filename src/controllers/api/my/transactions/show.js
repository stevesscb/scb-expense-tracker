import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiTransactionsShow = async (req, res) => {
  try {
    const { params: { id } } = req
    const foundTransaction = await prisma.Transaction.findUnique({
      where: { id: Number(id) },
      include: {
        category: true,
        user: true
      }
    })
    return res.status(200).json(foundTransaction)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [
  controllersApiTransactionsShow
]
