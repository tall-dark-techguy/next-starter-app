import Link from "next/link";
import { logout, isAuthenticated } from "../utils/authService";
import { useState } from "react";

function Nav({ children }) {
  const [loading, setLoading] = useState(false);

  const handleLogout = () => {
    setLoading(true);
    logout();
    window.location.href = "/login?logged_out=true";
  };

  return (
    <>
      <div className="ui secondary stackable menu">
        <div className="ui fluid container">
          <div className="item">{children}</div>

          <Link href="/">
            <a className="item">
              <h2>NEXT STARTER APP</h2>
            </a>
          </Link>

          <div className="right menu">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <i className="search link icon"></i>
              </div>
            </div>

            <div className="item">
              <Link href="/">
                <a className="ui basic button">Home</a>
              </Link>
            </div>

            {isAuthenticated() ? (
              <>
                <div className="item">
                  <Link href="/user">
                    <a className="ui green button">User</a>
                  </Link>
                </div>

                <div className="item">
                  <button
                    onClick={handleLogout}
                    className={`ui basic red button ${
                      loading ? "loading disabled" : ""
                    }`}
                  >
                    Logout
                  </button>
                </div>
              </>
            ) : (
              <>
                <div className="item">
                  <Link href="/login">
                    <a className="ui basic primary button">Login</a>
                  </Link>
                </div>

                <div className="item">
                  <Link href="/signup">
                    <a className="ui green button">Sign-up</a>
                  </Link>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Nav;
