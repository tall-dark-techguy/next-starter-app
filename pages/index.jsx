import Layout from "../layouts";

function Index() {
  return (
    <>
      <Layout>
        <section className="ui inverted violet placeholder segment">
          <div className="ui icon header">
            <i className="react icon"></i>
            <h2>Welcome to Next Starter App</h2>
            <p>Created by Desmond Charles</p>
          </div>

          <a
            href="https://github.com/tall-dark-techguy/next-starter-app"
            className="ui inverted icon right labeled button"
            target="_blank"
          >
            View on Github <i className="github icon"></i>
          </a>
        </section>

        <section className="ui container">
          <h2>What's this app about?</h2>
          <p>
            This app is a successful experiment to create a starter NextJS app
            with built-in JWT authentication and Semantic UI template.
          </p>

          <p>
            By cloning this app, you can build upon this app without worrying
            about setting up authentication.
          </p>

          <p>
            Authentication is both client side and server-side. And is created
            to handle NextJS server-side rendering (SSR) using getInitialProps.
          </p>
          <br />
          <br />
          <br />
          <br />
        </section>
      </Layout>
    </>
  );
}

export default Index;
