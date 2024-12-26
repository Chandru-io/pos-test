import { useState } from "react";
import useOutSideClick from "../../../../../hooks/UseOutsideClick.jsx";
const TimePicker = () => {
  const [hour, setHour] = useState("02");
  const [minute, setMinute] = useState("00");
  const [period, setPeriod] = useState("PM");
  const [isVisible, setIsVisible, ref] = useOutSideClick();

  const hours = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  const minutes = ["00", "30"];
  const periods = ["AM", "PM"];

  return (
    <div className="relative inline-block">
      <div className="flex items-center space-x-2 border border-gray-300 px-3 py-2 rounded cursor-pointer">
        <span>{`${hour}:${minute} ${period}`}</span>
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="text-gray-500"
        >
          🕒
        </button>
      </div>
      {isVisible && (
        <div
          ref={ref}
          className="absolute z-10 bg-white border border-gray-300 mt-2 rounded shadow-lg"
        >
          <div className="flex">
            <div className="flex flex-col p-2 border-r h-52 overflow-y-scroll">
              {hours.map((h) => (
                <button
                  key={h}
                  onClick={() => setHour(h)}
                  className={`px-4 py-2 text-center ${
                    hour === h ? "bg-blue-500 text-white" : "hover:bg-gray-100"
                  }`}
                >
                  {h}
                </button>
              ))}
            </div>

            {/* Minutes */}
            <div className="flex flex-col p-2 border-r">
              {minutes.map((m) => (
                <button
                  key={m}
                  onClick={() => setMinute(m)}
                  className={`px-4 py-2 text-center ${
                    minute === m
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {m}
                </button>
              ))}
            </div>

            {/* Period (AM/PM) */}
            <div className="flex flex-col p-2">
              {periods.map((p) => (
                <button
                  key={p}
                  onClick={() => setPeriod(p)}
                  className={`px-4 py-2 text-center ${
                    period === p
                      ? "bg-blue-500 text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TimePicker;
