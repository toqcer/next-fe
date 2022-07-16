import cookie from 'cookie';
import adminLogin from 'utils/api/adminLogin';

export default async function handler(req, res) {
  (res.statusCode = 200), res.json({ name: 'jhon doe' });
}
