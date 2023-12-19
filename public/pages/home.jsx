/** @format */

import { Link } from "react-router-dom";
import "../css/home.css";
import FlagsComponent from "../../flagsId";

const Home = () => {
  const Flags = FlagsComponent();

  return (
    <>
      {Flags.map((item, index) => (
        <div className="  div1" key={index} style={{ display: "inline-block" }}>
          <Link style={{ color: "#232323" }} to={`/country/${index}`}>
            <img src={item.flag} alt={item.name.common} />
            <h3>{item.name}</h3>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Home;
