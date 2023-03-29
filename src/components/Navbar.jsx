import CartWidget from "./CartWidget";
import mandingaLogo from "./Img/mandingaLogo.png";
import { Link } from "react-router-dom";

const styleNavList = {
  textDecoration: "none",
  fontSize: "2.8vmin",
  color: "white",
  "&:hover": {
    color: "blue",
  },
};

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", alignItems: "center" }}>
        <div>
          <img
            src={mandingaLogo}
            style={{
              height: "150px",
              width: "150px",
              paddingInline: "3vh",
              marginInline: "2vh",
            }}
            alt="Mandinga Drinks"
          />
        </div>

        <ul
          style={{
            display: "flex",
            listStyle: "none",
            margin: "1vh",
            paddingInline: "3vh",
          }}
        >
          <li style={{ margin: "2vh", paddingInline: "10%" }}>
            <Link style={styleNavList} to="/">
              Inicio
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="#">
              Cervezas
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="#">
              Vinos
            </Link>
          </li>

          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="#">
              Whisky
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="#">
              Destilados
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="#">
              Aperitivos
            </Link>
          </li>
        </ul>
      </div>

      <div style={{ marginRight: "3vh" }}>
        <CartWidget />
      </div>
    </nav>
  );
}

export default Navbar;
