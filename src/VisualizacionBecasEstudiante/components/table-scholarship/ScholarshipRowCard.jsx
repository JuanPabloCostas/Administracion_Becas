import { useState } from "react";
import { ScholarshipRowContent } from "./scholarship-row-card/ScholarshipRowContent";
import { ScholarshipRowTable } from "./scholarship-row-card/ScholarshipRowTable";

export const ScholarshipRowCard = ({ data }) => {
  const [isOpen, setIsOpen] = useState(false)

  const rowState = () => {
    if (isOpen) { setIsOpen(false) }
    else {setIsOpen(true)}
  }

  return (
    <div className="table-scholarship">
      <ScholarshipRowTable 
        data={data} 
        isOpen={rowState} 
      />
      {isOpen && (
      <ScholarshipRowContent 
        style={{animationDuration: "0.5s", animationName: "slide-down"}}
      />)}
    </div>
  );
};
