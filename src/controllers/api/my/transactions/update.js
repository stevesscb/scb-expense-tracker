import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const updateSchema = yup.object({
  type: yup.string().required(),
  description: yup.string(),
  amount: yup.number().min(0.01),
  date: yup.date(),
  category: yup.object({
    name: yup.string().required()
  })
})

const controllersApiTransactionsUpdate = async (req, res) => {
  try {
    const { params: { id }, body } = req
    const verifiedData = await updateSchema.validate(body, { abortEarly: false, stripUnknown: true })
    const updated = await prisma.transaction.update({ where: { id: Number(id) }, data: verifiedData })
    return res.status(200).json(updated)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default [
  controllersApiTransactionsUpdate
]
