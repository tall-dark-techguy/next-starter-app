import { useRouter } from "next/router";
import Layout from "../layouts";
import Link from "next/link";
import { useState } from "react";
import http from "../utils/http";
import { Message, Form, Button } from "semantic-ui-react";

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
      setEmail({ error: "Please enter an email" });
    }

    if (!password.value) {
      setPassword({ error: "Please create a password" });
    }

    if (!email.value || !password.value) return;

    setLoading({ status: true });

    try {
      const response = await http.post("/api/signup", {
        email: email.value,
        password: password.value,
      });
      setLoading({ success: true });
      router.push(`/login?new=${email.value}`);
    } catch (error) {
      setLoading({ error: error.message });
    }
  };

  return (
    <>
      <Layout>
        <section className="login">
          <h2>Create new account</h2>
          <br />

          <Form
            success={loading.success}
            error={loading.error}
            onSubmit={handleSubmit}
          >
            <Message
              error
              header="We couldn't submit your form!"
              content={loading.error}
            />

            <Message
              success
              header="Form submitted successfully!"
              content="Redirecting..."
            />

            <Form.Input
              placeholder="Email"
              value={email.value}
              onChange={(e) => setEmail({ value: e.target.value })}
              fluid
              type="email"
              error={email.error}
            />

            <Form.Input
              placeholder="Create strong password"
              fluid
              type="password"
              value={password.value}
              onChange={(e) => setPassword({ value: e.target.value })}
              error={password.error}
            />

            <Form.Checkbox
              label="By registering, you agree to our terms and conditions"
              checked
            />
            <br />

            <button
              className={`ui green icon right labeled large fluid button ${
                loading.status && "loading disabled"
              }`}
            >
              Sign up <i className="sign in icon"></i>
            </button>
          </Form>

          <div className="form-extras">
            <Link href="/login">
              <a className="ui button">I already have account</a>
            </Link>
          </div>
        </section>
      </Layout>
    </>
  );
}

export default Login;
