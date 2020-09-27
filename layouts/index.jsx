import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Menu, Sidebar } from "semantic-ui-react";
import { useState } from "react";
import { isAuthenticated } from "../utils/authService";
import FixedBottomFooter from "../components/fixedBottomFooter";

function Layout({ children, title = "Next Starter App By Desse" }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head title={title} />

      <Sidebar.Pushable
        style={{
          transform: "none",
          height: "100vh",
        }}
      >
        <Sidebar
          as={Menu}
          // animation: slide out, slide along, push
          direction="left"
          animation="push"
          className="black"
          icon="labeled"
          inverted
          onHide={() => setVisible(false)}
          vertical
          visible={visible}
          width="thin"
        >
          {!isAuthenticated() ? (
            <>
              <div className="item">
                <h1 style={{ color: "orange" }}>
                  <i className="react icon"></i>
                </h1>
              </div>

              <Link href="/login">
                <a className="item">
                  <i className="sign in icon"></i>
                  <p>Login</p>
                </a>
              </Link>

              <Link href="/signup">
                <a className="item">
                  <i className="user icon"></i> <p>Sign up</p>
                </a>
              </Link>
            </>
          ) : (
            <Link href="/user">
              <a className="item">
                <i className="user icon"></i> <p>User</p>
              </a>
            </Link>
          )}
        </Sidebar>

        {/* Site and page content goes here :=() */}
        <Sidebar.Pusher>
          <>
            <Nav>
              {!visible ? (
                <button
                  onClick={() => setVisible(true)}
                  className="ui basic button"
                >
                  <i className="bars icon"></i> MENU
                </button>
              ) : (
                <button
                  onClick={() => setVisible(false)}
                  className="ui basic red button"
                >
                  <i className="times icon"></i> CLOSE
                </button>
              )}
            </Nav>
            {children}
          </>
        </Sidebar.Pusher>
      </Sidebar.Pushable>

      <FixedBottomFooter isAuthenticated={isAuthenticated} />
    </>
  );
}

export default Layout;
