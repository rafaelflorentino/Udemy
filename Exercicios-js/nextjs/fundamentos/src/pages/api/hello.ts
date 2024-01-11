// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json({
     name: 'Teste Api',
     metodo: req.method,
     nome: req.query.nome,
     idade: req.query.idade,
     params: JSON.stringify(req.query)
    })
}
