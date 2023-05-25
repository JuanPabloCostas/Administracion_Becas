import { Document } from "./scholarship-row-content/Document";

export const ScholarshipRowContent = () => {
  return (
    <div className="table-scholarship-details">
      <div className="documents">
        <p>Documentos</p>
        <Document file_name={"Identificación.pdf"} />
        <Document file_name={"Comprobante.pdf"} />
        <Document file_name={"Solicitud.pdf"} />
      </div>

      <div className="observations">
        <p>Observaciones</p>
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Provident
          molestiae labore, libero atque voluptatibus, impedit eum alias,
          repellat mollitia nihil exercitationem voluptate eos doloremque nemo
          vero laboriosam? Ratione, sequi est omnis a iusto necessitatibus.
          Delectus maiores cum facilis earum veniam consequatur non ad quia,
          odio eligendi iure voluptas amet tempora excepturi illo dolore porro
          cumque, molestias corporis expedita quasi, odit suscipit sed ut?
          Ducimus consequatur officiis quaerat sit corporis similique?
        </span>
      </div>
    </div>
  );
};
