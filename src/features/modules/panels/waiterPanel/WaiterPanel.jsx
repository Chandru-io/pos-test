import { useState } from "react";
import WaiterDetails from "./popup/WaiterDetails";

const initialNotifications = [
  {
    id: 1,
    message:
      "Token Number: 121324234,Order:aLL230521-001 has been modified. Modified item: Massaman Beef Curry, Modified item qty:2",
  },
  {
    id: 2,
    message:
      "Token Number: 121324235,Order:aLL230521-002 has been modified. Modified item: Pad Thai, Modified item qty:1",
  },
  {
    id: 3,
    message:
      "Token Number: 121324234,Order:aLL230521-001 has been modified. Modified item: Massaman Beef Curry, Modified item qty:2",
  },
  {
    id: 4,
    message:
      "Token Number: 121324235,Order:aLL230521-002 has been modified. Modified item: Pad Thai, Modified item qty:1",
  },
  {
    id: 5,
    message:
      "Token Number: 121324234,Order:aLL230521-001 has been modified. Modified item: Massaman Beef Curry, Modified item qty:2",
  },
  {
    id: 6,
    message:
      "Token Number: 121324235,Order:aLL230521-002 has been modified. Modified item: Pad Thai, Modified item qty:1",
  },
  {
    id: 7,
    message:
      "Token Number: 121324234,Order:aLL230521-001 has been modified. Modified item: Massaman Beef Curry, Modified item qty:2",
  },
  {
    id: 8,
    message:
      "Token Number: 121324235,Order:aLL230521-002 has been modified. Modified item: Pad Thai, Modified item qty:1",
  },
];

const WaiterPanel = () => {
  const [isWaiterModelOpen, setIsWaiterModalOpen] = useState(false);

  const tableData = [
    { name: "Table 1", id: 1 },
    { name: "Table 2", id: 2 },
    { name: "Table 3", id: 3 },
    { name: "Table 4", id: 4 },
    { name: "Table 5", id: 5 },
    { name: "Table 6", id: 6 },
    { name: "Table 7", id: 7 },
    { name: "Table 8", id: 8 },
    { name: "Table 9", id: 9 },
    { name: "Table 10", id: 10 },
  ];

  return (
    <>
      <p className="text-center font-semibold text-lg p-5 bg-[#EFEFFF]">
        {"Waiter's Panel"}
      </p>
      <div className="grid grid-cols-4 gap-10 px-40 py-10">
        {tableData.map((data) => (
          <div
            key={data.id}
            className="shadow-sm h-52 w-52 bg-white rounded-lg hover:shadow-lg border py-10 cursor-pointer"
            onClick={() => setIsWaiterModalOpen(true)}
          >
            <div className="flex justify-center">{data.name}</div>
          </div>
        ))}
      </div>

      <WaiterDetails
        isOpen={isWaiterModelOpen}
        onClose={() => setIsWaiterModalOpen(false)}
        data={initialNotifications}
      />
    </>
  );
};

export default WaiterPanel;
