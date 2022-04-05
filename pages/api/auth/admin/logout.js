import cookie from "cookie";

export default (req, res) => {
    console.log(res);
    res.setHeader(
        "Set-Cookie",
        [cookie.serialize("tokenAdmin",'', {
            secure: process.env.NODE_ENV !== "development",
            maxAge: 0,
            sameSite: "strict",
            path: "/",
          }),
          cookie.serialize("refreshAdmin",'', {
            httpOnly: true,
            secure: process.env.NODE_ENV !== "development",
            maxAge: 0,
            sameSite: "strict",
            path: "/",
          })]
    );
    res.statusCode = 200,
        res.json({ success: true })
};
