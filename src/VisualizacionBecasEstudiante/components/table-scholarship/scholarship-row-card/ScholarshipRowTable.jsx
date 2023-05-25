function amountFormat(amount) {
    return amount.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, "$&,");
}

export const ScholarshipRowTable = ({ data, isOpen }) => {

    const { scholarship_type, semester, amount, period } = data;

  return (
    <div className="grid-table table-scholarship-descrip" onClick={ isOpen }>
      <span>{scholarship_type}</span>
      <span>{semester}</span>
      <span>${amountFormat(amount)}</span>
      <span>{period}</span>
    </div>
  );
};
