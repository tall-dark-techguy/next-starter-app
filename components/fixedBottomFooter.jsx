import Link from "next/link";
import { logout } from "../utils/authService";

function FixedBottomFooter({ isAuthenticated }) {
  return (
    <section className="footer-fixed hide desktop">
      <div className="ui segment">
        {!isAuthenticated() ? (
          <>
            <Link href="/login">
              <a className="ui primary icon labeled button">
                Login <i className="sign in icon"></i>
              </a>
            </Link>

            <Link href="/signup">
              <a className="ui red button icon labeled">
                Sign up <i className="sign in icon"></i>
              </a>
            </Link>
          </>
        ) : (
          <>
            <Link href="/user">
              <a className="ui basic icon labeled button">
                Account <i className="user icon"></i>
              </a>
            </Link>

            <button
              className="ui red button icon labeled"
              onClick={() => logout()}
            >
              Logout <i className="sign out icon"></i>
            </button>
          </>
        )}

        {/* <a
          href="https://wa.me/2347010916647?text=Hi%20Desmond%20Charles%20,%20I'm%20"
          className="ui green icon button"
        >
          <i className="whatsapp icon"></i>
        </a> */}
      </div>
    </section>
  );
}

export default FixedBottomFooter;
