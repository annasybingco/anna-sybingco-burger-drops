// import logo from "../../assets/icons/burger-drop-logo.svg";
import CartIcon from "../SVG/CartIcon";
import "./Header.scss";
import { useCart } from "../../Context/CartContext";
import { Link } from "react-router-dom";
import BurgerLogo from "../SVG/BurgerLogo";

function Header() {
  const items = useCart();
  return (
    <div className="header">
      <BurgerLogo />
      <section className="cart">
        <Link to="/cart">
          <CartIcon />({items.length})
        </Link>
      </section>
    </div>
  );
}

export default Header;
