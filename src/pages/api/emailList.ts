import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

type ResponseData = {
  emailList: JSON;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ResponseData>
) {
  if (req.method === 'GET') {
    const { page } = req.query;

    const response = await axios.get(
      `https://flipkart-email-mock.now.sh?${parseFloat(page)}`
    );

    res.status(200).json({ emailList: response?.data });
  } else {
    res.status(400);
  }

  // res.status(200).json({ message: 'Hello from Next.js!' })
}
