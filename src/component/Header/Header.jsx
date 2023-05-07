import "./Header.css";
import LoginBtn from "../LoginBtn/LoginBtn";
import SignUpBtn from "../SingUpBtn/SignUpBtn";

const Header = () => {
  return (
    <header className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 border-bottom sticky-top">
      <div className="col-md-3 mb-2 mb-md-0">
        <a
          href="/"
          className="d-inline-flex link-body-emphasis text-decoration-none logo"
        >
          Just<span>Fit</span>
        </a>
      </div>

      <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="/workOut" className="nav-link px-2">
            Workout Videos
          </a>
        </li>
        <li>
          <a href="/recipes" className="nav-link px-2">
            Recipes
          </a>
        </li>
        <li>
          <a href="/dashBoard" className="nav-link px-2">
            Dash board
          </a>
        </li>
      </ul>

      <div className="col-md-3 text-end">
        <LoginBtn />
        <SignUpBtn variant="primary" />
      </div>
    </header>
  );
};

export default Header;
