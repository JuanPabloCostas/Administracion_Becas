export const Navigator = () => {
  return (
    <nav>
      <a href="">
        <img src="src/assets/Logo_de_la_UAQ.svg" alt="LogoUAQ" />
      </a>
      <div className="user-profile">
        <div className="user-info">
          <p className="user-name">Nombre Apellido</p>
          <p className="email">email@example.com</p>
        </div>
        <img
          className="user-image"
          src="https://pic.onlinewebfonts.com/svg/img_218087.png"
          alt="User"
        />
      </div>
    </nav>
  );
};
