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

          <button className="ui inverted icon right labeled button">
            View on Github <i className="github icon"></i>
          </button>
        </section>
      </Layout>
    </>
  );
}

export default Index;
