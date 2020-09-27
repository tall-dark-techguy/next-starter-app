import Layout from "../layouts";
import Link from "next/link";
import { Form, Message } from "semantic-ui-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { login } from "../utils/authService";
import http from "../utils/http";

function Login() {
  const router = useRouter();

  const [email, setEmail] = useState({ value: "", error: null });
  const [password, setPassword] = useState({ value: "", error: null });
  const [loading, setLoading] = useState({
    status: false,
    error: false,
    success: false,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email.value) {
      setEmail({ error: "Email is required" });
    }
    if (!password.value) {
      setPassword({ error: "Password is required" });
    }
    if (!email.value || !password.value) return;

    setLoading({ status: true });

    try {
      const response = await http.post("/api/login", {
        email: email.value,
        password: password.value,
      });
      login(response.data);
      window.location.href = "/?loggedIn=true";
    } catch (error) {
      setLoading({
        error:
          "Incorrect email/ password. Please check your login details and try again.",
      });
      router.push("/login");
    }
  };

  return (
    <>
      <Layout>
        <section className="login">
          <h2>Login to account</h2>
          <br />

          {router.query.logged_out && (
            <Message
              success
              header="You logged out!"
              content="We will miss you. Login again."
            />
          )}

          <Form
            onSubmit={handleSubmit}
            success={router.query.new}
            error={loading.error}
          >
            <Message error header="Login failed!" content={loading.error} />

            <Message
              success
              header="Sign up successful!"
              content={`Please login with your email: ${router.query.new}`}
            />

            <Form.Input
              type="email"
              placeholder="Email"
              value={email.value}
              onChange={(e) => setEmail({ value: e.target.value })}
              error={email.error}
            />

            <Form.Input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={(e) => setPassword({ value: e.target.value })}
              error={password.error}
            />

            <button
              className={`ui primary icon right labeled fluid large button ${
                loading.status && "loading disabled"
              }`}
            >
              Login <i className="sign in icon"></i>
            </button>
          </Form>

          <div className="form-extras">
            <Link href="/signup">
              <a className="ui button">Sign up?</a>
            </Link>

            <Link href="">
              <a className="ui button">Forgot password</a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Login;
