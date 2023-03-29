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
          <Link to="/">
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
          </Link>
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
            <Link style={styleNavList} to="/category/cerveza">
              Cervezas
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="/category/vino">
              Vinos
            </Link>
          </li>

          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="/category/whisky">
              Whisky
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="/category/destilado">
              Destilados
            </Link>
          </li>
          <li style={{ margin: "2vh" }}>
            <Link style={styleNavList} to="/category/aperitivo">
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
