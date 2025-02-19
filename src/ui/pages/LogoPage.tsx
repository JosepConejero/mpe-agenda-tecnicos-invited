import { Link } from "react-router-dom";

export const LogoPage = (): JSX.Element => {
  return (
    <>
      <div className="logo-container animate__animated animate__fadeIn animate__faster">
        <Link to="/login">
          <img src="/assets/logo.png" alt="logo de MPE"></img>
        </Link>
        <p>Pulsa en el logo para empezar</p>
      </div>
    </>
  );
};
