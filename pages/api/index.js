import cookie from 'cookie';
import adminLogin from 'src/api/adminLogin';

export default async (req, res) => {
  (res.statusCode = 200), res.json({ name: 'jhon doe' });
};
