import Head from "next/head";
import _ from "lodash";
import Link from "next/link";

import HamburgerMenu from "../components/Hamburger";

const Games = () => {
  return (
    <>
      <Head>
        <title>My Games</title>
      </Head>
      <div className="menu">
        <HamburgerMenu />
      </div>
      <div className="background">
        <div className="container">
          <h1>My Games</h1>
          <div className="games">
            <Link href="/frog/frog.html">Catch The Frog</Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Games;
