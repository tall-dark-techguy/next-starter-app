import Link from "next/link";
import { logout, isAuthenticated } from "../utils/authService";
import { Icon } from "semantic-ui-react";

function Nav({ children }) {
  return (
    <>
      <div className="ui secondary stackable nav menu">
        <div className="ui fluid container">
          <div className="item">
            {children}
            <Link href="/">
              <a className="ui orange icon labeled button ml-10">
                Cart (0) <Icon name="cart" />
              </a>
            </Link>

            <Link href="https://wa.me/2347010916647?text=Hello%20Desse%20,%20I'm%20">
              <a className="ui green icon button ml-10">
                <Icon name="whatsapp" /> Chat
              </a>
            </Link>
          </div>

          <Link href="/">
            <a className="item">
              <h2>NEXT STARTER APP</h2>
            </a>
          </Link>

          <div className="right menu hide mobile">
            <div className="item">
              <div className="ui icon input">
                <input type="text" placeholder="Search..." />
                <Icon name="search" />
              </div>
            </div>

            <Link href="/">
              <a className="item">Home</a>
            </Link>

            {isAuthenticated() ? (
              <>
                <div className="item">
                  <Link href="/user">
                    <a className="ui green button">User</a>
                  </Link>
                </div>

                <div className="item">
                  <button
                    onClick={() => logout()}
                    className={`ui basic red button`}
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
