import HamburgerMenu from "../components/Hamburger";
import Head from "next/head";
import Link from "next/link";

const Home = () => {
  return (
    <>
      <Head>
        <title>Ivan I Homepage</title>
      </Head>
      <div className="menu">
        <HamburgerMenu />
      </div>
      <div className="container">
        <h1>
          Hi everyone! <br />
          My name is Ivan and I am 9 years old.
        </h1>
        <p>Welcome to my Homepage!</p>
        <p>
          I love to draw digital pictures and have already created over 130
          images. I've decided to build a website to share my artwork with my
          classmates.
        </p>
        <p>
          I hope you enjoy browsing through my drawings and finding inspiration
          in them.
        </p>
        <p>Thank you for visiting my page!</p>
        <Link href="/drawings">
          <button>See my drawings →</button>
        </Link>
      </div>
    </>
  );
};

export default Home;
