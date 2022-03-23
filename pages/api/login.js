import cookie from 'cookie';

export default (req, res) => {
  res.setHeader(
    "Set-Cookie",
    [cookie.serialize("tokenAdmin", req.body.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: req.body.expires,
      sameSite: "strict",
      path: "/",
    }),
    cookie.serialize("refreshAdmin", req.body.tokenAdmin, {
      httpOnly: true,
      secure: process.env.NODE_ENV !== "development",
      maxAge: req.body.expires,
      sameSite: "strict",
      path: "/",
    })]
  );
  res.statusCode = 200,
    res.json({ success: true })
};
