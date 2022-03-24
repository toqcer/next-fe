import cookie from 'cookie';

export default (req, res) => {
  try {
    res.setHeader('Authorization', 'asdasdasd');
    res.setHeader(
      "Set-Cookie",
      [cookie.serialize("tokenAdmin", req.body.token, {
        secure: process.env.NODE_ENV !== "development",
        maxAge: req.body.expires,
        sameSite: "strict",
        path: "/",
      }),
      cookie.serialize("refreshAdmin", req.body.refresh_token, {
        httpOnly: true,
        secure: process.env.NODE_ENV !== "development",
        maxAge: req.body.expires,
        sameSite: "strict",
        path: "/",
      })]
    );
    res.statusCode = 200,
      res.json({ success: true })
  } catch (e) {
    console.log(e)
    res.statusCode = 500,
      res.json({ failed: e })
  }
};
