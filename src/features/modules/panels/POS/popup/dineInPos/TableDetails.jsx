const TableDetails = () => {
  const data = [
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$500",
      persons: "7",
    },
    {
      time: "12:30 - 1:30 PM",
      name: "RPS Baalaji",
      mobile: "+91 61234567890",
      advance: "$202",
      persons: "7",
    },
  ];

  return (
    <div className="p-4">
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 rounded-md">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="px-4 py-2 border border-gray-300">Time</th>
              <th className="px-4 py-2 border border-gray-300">Name</th>
              <th className="px-4 py-2 border border-gray-300">
                Mobile Number
              </th>
              <th className="px-4 py-2 border border-gray-300">Advance</th>
              <th className="px-4 py-2 border border-gray-300">Persons</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="odd:bg-white even:bg-gray-50">
                <td className="px-4 py-2 border border-gray-300">{row.time}</td>
                <td className="px-4 py-2 border border-gray-300">{row.name}</td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.mobile}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.advance}
                </td>
                <td className="px-4 py-2 border border-gray-300">
                  {row.persons}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDetails;
