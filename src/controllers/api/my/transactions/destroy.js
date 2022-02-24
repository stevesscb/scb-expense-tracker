import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const controllersApiTransactionsDestroy = async (req, res) => {
  try {
    const { params: { id } } = req
    const deletedTransaction = await prisma.transaction.delete({ where: { id: Number(id) } })
    return res.status(200).json(deletedTransaction)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [
  controllersApiTransactionsDestroy
]
