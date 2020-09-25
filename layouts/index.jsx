import Head from "../components/head";
import Nav from "../components/nav";

function Layout({ children }) {
  return (
    <>
      <Head title="Next Starter App By Desse" />
      <Nav />
      {children}
    </>
  );
}

export default Layout;
