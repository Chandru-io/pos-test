/* eslint-disable react/prop-types */
const Table = ({ headers, data, summary }) => {
  return (
    <table className="w-full border-collapse border border-gray-200 rounded-md">
      <thead>
        <tr className="bg-blue-100 text-left">
          {headers.map((header, index) => (
            <th key={index} className="p-3 border border-gray-200">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} row={row} />
        ))}
        <TableSummary summary={summary} colSpan={headers.length - 5} />
      </tbody>
    </table>
  );
};

// Reusable Table Row Component
const TableRow = ({ row }) => {
  return (
    <tr className="text-gray-700">
      {Object.values(row).map((value, index) => (
        <td key={index} className="p-3 border border-gray-200">
          {typeof value === "number" ? `$${value.toFixed(2)}` : value}
        </td>
      ))}
    </tr>
  );
};

// Reusable Summary Row Component
const TableSummary = ({ summary, colSpan }) => {
  return (
    <tr className="font-semibold bg-primary text-gray-800">
      <td colSpan={colSpan} className="p-3 border border-gray-200 text-right">
        Sum
      </td>
      {Object.values(summary).map((value, index) => (
        <td key={index} className="p-3 border border-gray-200">
          {`$${value.toFixed(2)}`}
        </td>
      ))}
    </tr>
  );
};

export default Table;
