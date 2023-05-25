export const Document = ({ file_name }) => {
  return (
    <div className="document">
      <span>{ file_name }</span>
      <div className="image-document">
        <a href="#" target="_blank">
          <img src="src/assets/ojo_abierto.svg" alt="see" />
        </a>
        <a href="#" download>
          <img src="src/assets/descarga.svg" alt="donwload" />
        </a>
      </div>
    </div>
  );
};
