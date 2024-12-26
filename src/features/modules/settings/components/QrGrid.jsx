/* eslint-disable react/prop-types */

import { QRCodeCanvas } from "qrcode.react";

const QRCodeGrid = ({ setShowQrCode }) => {
  const qrData = [
    {
      table: "VIP Table 1",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 2",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 3",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 4",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 5",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 6",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 7",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 8",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 9",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 10",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 11",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
    {
      table: "VIP Table 12",
      qr: "https://t92mwc5w-5173.inc1.devtunnels.ms/mobile/food",
    },
  ];

  const handleDownload = (text, index) => {
    const canvas = document.getElementById(`qr-code-${index}`);
    const pngUrl = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    const link = document.createElement("a");
    link.href = pngUrl;
    link.download = `${text.replace(" ", "_")}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="p-8 bg-white min-h-screen">
      <div className="mb-4">
        <button
          onClick={() => setShowQrCode(false)}
          className="px-3 py-1 rounded-md text-sm bg-white border cursor-pointer"
        >
          Back
        </button>
      </div>

      <h1 className="text-center text-2xl font-bold mb-8 text-primary">
        Generate QR Code
      </h1>

      <div className="grid grid-cols-4 gap-6">
        {qrData.map((text, index) => (
          <div
            key={index}
            className="text-center flex justify-center items-center flex-col"
          >
            <QRCodeCanvas
              id={`qr-code-${index}`}
              value={text.qr}
              size={128}
              level={"H"}
            />

            <p className="mt-2 text-gray-800 font-medium">{text.table}</p>
            <p
              onClick={() => handleDownload(text, index)}
              className="mt-1 bg-primary p-1 rounded  text-white cursor-pointer  hover:underline text-sm"
            >
              Download
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QRCodeGrid;
