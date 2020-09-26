import Layout from "../layouts";

function Index() {
  return (
    <>
      <Layout>
        <section className="ui inverted violet placeholder segment">
          <div className="ui icon header">
            <i className="react loading icon"></i>
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
      </Layout>
    </>
  );
}

export default Index;
