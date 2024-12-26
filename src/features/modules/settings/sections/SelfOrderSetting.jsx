import { useState } from "react";
import QRCodeGrid from "../components/QrGrid";

const SelfOrderSetting = () => {
  const [showQrCode, setShowQrCode] = useState(false);
  const [enable, setEnable] = useState("enable");
  return (
    <div>
      {" "}
      {!showQrCode ? (
        <>
          <div className="space-y-6 mt-6">
            <div className="px-4">
              <p className="text-xl font-bold ">Self Order Settings </p>
            </div>
            <div className="flex flex-col gap-y-2 px-4">
              <label className="text-left text-[#344054] font-medium text-sm">
                Enable Self Order
              </label>
              <div className="flex items-center">
                <span className="text-sm text-gray-600 mr-4">Off</span>
                <div
                  className={`relative inline-flex items-center h-6 rounded-full w-11 transition-all  ${
                    enable ? "bg-primary" : "bg-gray-300"
                  }`}
                  onClick={() => setEnable(!enable)}
                >
                  <span
                    className={`transform transition-all inline-block w-5 h-5 bg-white rounded-full  ${
                      enable ? "translate-x-5" : "translate-x-0"
                    }`}
                  />
                </div>
                <span className="text-sm text-gray-600 ml-4">On</span>
              </div>
            </div>

            <div className="flex gap-4 justify-start px-4">
              <button className="bg-secondary py-3 px-6 text-white text-center text-sm font-semibold rounded-lg shadow-md hover:bg-secondary_hover transition-all">
                Confirm
              </button>
              <button
                className="bg-primary  py-3 px-6 text-white text-center text-sm font-semibold rounded-lg shadow-md hover:bg-primary_hover transition-all"
                onClick={() => setShowQrCode(!showQrCode)}
              >
                Generate QR Code
              </button>
            </div>
          </div>
        </>
      ) : (
        <QRCodeGrid setShowQrCode={setShowQrCode} />
      )}
    </div>
  );
};

export default SelfOrderSetting;
