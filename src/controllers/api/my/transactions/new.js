import yup from 'yup'

import prisma from '../../../_helpers/prisma.js'
import handleErrors from '../../../_helpers/handle-errors.js'

const createSchema = yup.object({
  type: yup.string().required(),
  description: yup.string(),
  amount: yup.number().min(0.01),
  date: yup.date()
})

const controllersApiMyTransactionCreate = async (req, res) => {
  try {
    const {
      body,
      session: {
        user: {
          id: userId
        }
      }
    } = req

    const verifiedData = await createSchema.validate(body, {
      abortEarly: false,
      stripUnknown: true
    })
    console.log(verifiedData)

    const newTransaction = await prisma.transaction.create({
      data: {
        ...verifiedData,
        userId
      }
    })

    return res.status(201).json(newTransaction)
  } catch (err) {
    return handleErrors(res, err)
  }
}

export default controllersApiMyTransactionCreate
