import { IoIosSearch } from "react-icons/io";

const OrderListTable = () => {
  const orders = [
    {
      number: "1001",
      customer: "John Smith",
      phone: "1234567890",
      dueNumber: "$123",
      table: "10",
      date: "2024-11-16",
    },
    {
      number: "1002",
      customer: "Jane Doe",
      phone: "9876543210",
      dueNumber: "$150",
      table: "5",
      date: "2024-11-16",
    },
    {
      number: "1003",
      customer: "Mark Johnson",
      phone: "5551234567",
      dueNumber: "$200",
      table: "3",
      date: "2024-11-16",
    },
    {
      number: "1004",
      customer: "Sarah Lee",
      phone: "6662345678",
      dueNumber: "$175",
      table: "8",
      date: "2024-11-16",
    },
    {
      number: "1005",
      customer: "Emily Davis",
      phone: "7773456789",
      dueNumber: "$50",
      table: "12",
      date: "2024-11-16",
    },
  ];

  return (
    <div className="flex-1 border p-4  rounded-md col-span-6">
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="relative">
            <input
              type="text"
              className="w-full mb-2 p-2 border rounded-md"
              placeholder={`Search Draft Sales`}
            />
            <IoIosSearch className="absolute top-3 right-3 h-5 w-5 text-[#777980] cursor-pointer" />
          </div>
          <div className="flex  flex-col">
            <div className="grid grid-cols-6 gap-4 bg-[#EFEFFF] p-2 font-bold">
              <div>Number</div>
              <div>Customer</div>
              <div>Phone</div>
              <div>Due Amount</div>
              <div>Table</div>
              <div>Date</div>
            </div>
            <div className="divide-y">
              {orders.map((order, index) => (
                <div
                  key={index}
                  className="grid grid-cols-6 gap-4 p-2 hover:bg-gray-100 cursor-pointer"
                >
                  <div>{order.number}</div>
                  <div>{order.customer}</div>
                  <div>{order.phone}</div>
                  <div>{order.dueNumber}</div>
                  <div>{order.table}</div>
                  <div>{order.date}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="p-2 rounded-md bg-[#FBC7AD] cursor-pointer">
          <p className="text-[#410909] text-center">Delete all Draft Sales</p>
        </div>
      </div>
    </div>
  );
};

export default OrderListTable;
