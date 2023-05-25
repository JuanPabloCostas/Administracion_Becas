import { Navigator } from "./components/Navigator";
import { StudentInformation } from "./components/StudentInformation";
import { TableScholarShip } from "./components/TableScholarShip";
import { data } from "./data/scholarshipData";

import "./styles.css";

const { id, name, degree, scholarships } = data[1];

export function VisualizacionBecasEstudiante() {
  return (
    <>
      <Navigator />
      <main>
        <StudentInformation expedient={id} name={name} degree={degree} />

        <TableScholarShip data={scholarships} />
      </main>
    </>
  );
}

export default VisualizacionBecasEstudiante;
