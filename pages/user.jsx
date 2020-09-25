const { default: Layout } = require("../layouts");
import useSWR from "swr";
import http from "../utils/http";
import protectedPage from "../utils/protectedPage";

function User() {
  const fetchUser = async (url) => {
    const response = await http.get(url);
    return response.data;
  };

  const { data: user } = useSWR("/api/user", fetchUser);

  return (
    <>
      <Layout>
        <div className="ui container">
          <div className="ui placeholder segment">
            <div className="ui icon header">
              <i className="user icon"></i>
              <h2>
                {user ? (
                  `Hi. I'm ${user}`
                ) : (
                  <i className="ui active loader"></i>
                )}
              </h2>

              <p>
                I created this Next Starter App. The goal is to have a
                bootstrapped NextJS starter app with needed features such as
                Authentication (JWT), Forgot password and Semantic UI basic
                template.
              </p>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
}

User.getInitialProps = async (ctx) => {
  return protectedPage(ctx, { initialProps: true });
};

export default User;
