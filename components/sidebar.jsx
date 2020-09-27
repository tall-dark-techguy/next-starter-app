import { Sidebar, Menu } from "semantic-ui-react";
import Link from "next/link";

function SideBar({ visible, setVisible, isAuthenticated }) {
  return (
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
      <Link href="/">
        <a className="item" onClick={() => setVisible(false)}>
          <h1 style={{ color: "orange" }}>
            <i className="react icon"></i>
          </h1>
        </a>
      </Link>

      {!isAuthenticated() ? (
        <>
          <Link href="/">
            <a className="item" onClick={() => setVisible(false)}>
              <i className="home icon"></i>
              <p>Home</p>
            </a>
          </Link>

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
  );
}

export default SideBar;
