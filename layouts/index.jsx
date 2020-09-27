import Head from "../components/head";
import Nav from "../components/nav";
import { Sidebar } from "semantic-ui-react";
import { useState } from "react";
import { isAuthenticated } from "../utils/authService";
import SideBar from "../components/sidebar";
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
        <SideBar
          visible={visible}
          setVisible={setVisible}
          isAuthenticated={isAuthenticated}
        />

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
