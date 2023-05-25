export const StudentInformation = ({ expedient, name, degree }) => {
  return (
    <div className="student-container">
      <div className="expedient-image">
        <img
          className="student-image"
          src="https://pic.onlinewebfonts.com/svg/img_218087.png"
          alt="student img"
        />
        <div>
          <p>{expedient}</p>
          <p>Expediente</p>
        </div>
      </div>
      <div className="student-name">
        <p>{name}</p>
        <p>Nombre</p>
      </div>
      <div className="student-degree">
        <p>{degree}</p>
        <p>Licenciatura</p>
      </div>
    </div>
  );
};
