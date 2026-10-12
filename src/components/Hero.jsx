import { Link } from "react-router-dom";
import "./Hero.css";

function Hero({ title, subtitle, buttonText }) {
  return (
    <section className="hero">
      <h1>{title}</h1>
      <p>{subtitle}</p>

      <Link to="/products">
        <button>{buttonText}</button>
      </Link>
    </section>
  );
}

export default Hero;