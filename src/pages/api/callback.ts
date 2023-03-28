import { NextApiRequest, NextApiResponse} from 'next'

export default async function APIAuthCallback(req: NextApiRequest, res: NextApiResponse) {

    res.redirect('/thanks')
}