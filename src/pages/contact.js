import HamburgerMenu from "../components/Hamburger";
import Head from "next/head";

const Contact = () => {
  return (
    <>
      <Head>
        <title>Ivan I Contact</title>
      </Head>
      <div className="menu">
        <HamburgerMenu />
      </div>
      <div className="container">
        <h1>Contact</h1>
        <p>
          If you have any questions or comments, please feel free to contact me
          at:
        </p>
        <ul>
          <li>
            <a
              href="mailto:supervanyaaa@gmail.com"
              target="_blank"
              title="Send me an email"
              rel="noreferrer"
            >
              Email
            </a>
          </li>
          <li>
            <a
              href="https://wa.me/+79620671255"
              target="_blank"
              title="Send me message on WhatsApp"
              rel="noreferrer"
            >
              WhatsApp
            </a>
          </li>
          <li>
            <a
              href="https://telegram.me/supervanyaaa"
              target="_blank"
              title="Send me a message on Telegram"
              rel="noreferrer"
            >
              Telegram
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Contact;
