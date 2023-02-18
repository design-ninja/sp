import Head from "next/head";
import _ from "lodash";

import Drawing from "../components/Drawing";
import HamburgerMenu from "../components/Hamburger";

const images = require.context("/public/img/drawings/", true, /\.(jpg)$/);
const drawingsCount = 27;
const drawings = _.range(1, drawingsCount + 1).map((number) => ({
  src: images(`./${number}.jpg`),
  title: `Drawing ${number}`,
}));

const Drawings = () => {
  return (
    <>
      <Head>
        <title>My Drawings</title>
      </Head>
      <div className="menu">
        <HamburgerMenu />
      </div>
      <div className="background background_drawings">
        <div className="container container_drawings">
          <h1>My Drawings</h1>
          <div className="drawings">
            {drawings.map((drawing, index) => (
              <Drawing
                key={index}
                src={drawing.src}
                title={drawing.title}
                className="drawing"
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Drawings;
