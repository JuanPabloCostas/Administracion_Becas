import { ScholarshipRowCard } from "./table-scholarship/ScholarshipRowCard";
import { TableHeader } from "./table-scholarship/TableHeader";

export const TableScholarShip = ({ data }) => {
  return (
    <div className="table-container">
      <TableHeader />

      {data.map((data, index) => (
        <ScholarshipRowCard key={index} data={data} />
      ))}
    </div>
  );
};
