import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import { Menu, Sidebar } from "semantic-ui-react";
import { useState } from "react";
import { isAuthenticated } from "../utils/authService";

function Layout({ children, title = "Next Starter App By Desse" }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head title={title} />

      <Sidebar.Pushable style={{ transform: "none", height: "100vh" }}>
        <Sidebar
          as={Menu}
          // animation: slide out, slide along, push
          direction="left"
          animation="push"
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
                <i className="sign in icon"></i>
                <Link href="/login">
                  <a className="">Login</a>
                </Link>
              </div>

              <div className="item">
                <i className="user icon"></i>
                <Link href="/signup">
                  <a>Sign up</a>
                </Link>
              </div>
            </>
          ) : (
            <div className="item">
              <i className="user icon"></i>
              <Link href="/user">
                <a className="">User</a>
              </Link>
            </div>
          )}
        </Sidebar>

        {/* Site and page content goes here :=() */}
        <Sidebar.Pusher style={{ height: "auto" }}>
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
    </>
  );
}

export default Layout;
