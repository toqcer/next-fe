import cookie from 'cookie';
import adminLogin from 'utils/api/adminLogin';

export default async function handler(req, res) {
  try {
    const credentials = {
      email: req.body.email,
      password: req.body.password,
    };
    const response = await Promise.any([adminLogin(credentials)]);
    const { token, refresh_token } = response.data;

    res.setHeader('Set-Cookie', [
      cookie.serialize('tokenAdmin', token, {
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 1800,
        sameSite: 'strict',
        path: '/',
      }),
      cookie.serialize('refreshAdmin', refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== 'development',
        maxAge: 36000,
        sameSite: 'strict',
        path: '/',
      }),
    ]);
    (res.statusCode = 200), res.json({ success: true });
  } catch (e) {
    (res.statusCode = 500), res.json({ failed: e });
  }
}
