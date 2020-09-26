import Link from "next/link";
import Head from "../components/head";
import Nav from "../components/nav";
import {
  Checkbox,
  Grid,
  Header,
  Icon,
  Image,
  Menu,
  Segment,
  Sidebar,
} from "semantic-ui-react";
import { useState } from "react";

function Layout({ children }) {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <Head title="Next Starter App By Desse" />
      <Grid columns={1}>
        <Grid.Column>
          <Sidebar.Pushable as="main">
            <Sidebar
              as={Menu}
              // slide out, slide along, push
              animation="push"
              icon="labeled"
              inverted
              onHide={() => setVisible(false)}
              vertical
              visible={visible}
              width="thin"
            >
              <div className="item">
                <i className="sign in icon"></i>
                <Link href="/login">
                  <a className="">Login</a>
                </Link>
              </div>

              <div className="item">
                <i className="user icon"></i>
                <Link href="/create">
                  <a>Sign up</a>
                </Link>
              </div>
            </Sidebar>

            <Sidebar.Pusher>
              {/* Site and page content goes here :=() */}
              <section style={{ height: "100vh" }}>
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
                      onClick={() => setVisible(true)}
                      className="ui basic red button"
                    >
                      <i className="times icon"></i> CLOSE
                    </button>
                  )}
                </Nav>
                {children}
              </section>
            </Sidebar.Pusher>
          </Sidebar.Pushable>
        </Grid.Column>
      </Grid>
    </>
  );
}

export default Layout;
