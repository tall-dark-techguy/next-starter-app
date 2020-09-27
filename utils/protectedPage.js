import { getCurrentUser } from "./authService";

function protectedPage(ctx, props) {
  const { req, res } = ctx;
  const redirectUrl = "/login?session=null";
  const tokenName = process.env.AUTH_TOKEN_NAME;

  /* handle server side */
  if (typeof window === "undefined") {
    let token = req.headers.cookie;

    if (!token || !getCurrentUser(token.substr(tokenName.length + 1))) {
      res.writeHead(302, {
        Location: redirectUrl,
      });
      res.end();
      return;
    }
    return props;
  }

  /* handle client side */
  /* Having some minor issues here of 
          getInitialProps returning undefined
          when user is not logged in.
          Hope in solving this sooner
      */
  if (typeof window !== "undefined") {
    if (!getCurrentUser()) {
      window.location.href = redirectUrl;
      return;
    }
    return props;
  }
}

export default protectedPage;
