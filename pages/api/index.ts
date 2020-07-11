import { NextApiRequest, NextApiResponse } from 'next';
import Cors from 'cors';

// Initializing the cors middleware
const cors = Cors({
	methods: [ 'GET', 'HEAD', 'POST' ]
});

// Helper method to wait for a middleware to execute before continuing
// And to throw an error when an error happens in a middleware
function runMiddleware(req, res, fn) {
	return new Promise((resolve, reject) => {
		fn(req, res, (result) => {
			if (result instanceof Error) {
				return reject(result);
			}

			return resolve(result);
		});
	});
}

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
	await runMiddleware(req, res, cors);

	const { query, body }: any = req;
	console.log(req.query, query, body);
	res.setHeader('Content-Type', 'application/json');
	res.setHeader('Cache-Control', 'max-age=180000');
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.status(200).json({ name: 'Allie' });
};

export default handler;
