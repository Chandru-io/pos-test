/* eslint-disable react/prop-types */
import { FaRegCopy } from "react-icons/fa";
import { FaRegFilePdf } from "react-icons/fa";
import { BsFiletypeCsv } from "react-icons/bs";
import { FaRegFileExcel } from "react-icons/fa6";
import { IoPrintOutline } from "react-icons/io5";

const DownloadComponent = ({
  handleCopy,
  handlePdf,
  handleCsv,
  handleExcel,
  handlePrint,
}) => {
  return (
    <div className="flex gap-x-5 items-center ">
      <FaRegCopy
        className="text-lg cursor-pointer text-secondary_button  hover:text-secondary_button_hover"
        onClick={handleCopy}
      />
      <FaRegFilePdf
        className="text-lg cursor-pointer text-secondary_button  hover:text-secondary_button_hover"
        onClick={handlePdf}
      />
      <BsFiletypeCsv
        className="text-lg cursor-pointer text-secondary_button  hover:text-secondary_button_hover"
        onClick={handleCsv}
      />
      <FaRegFileExcel
        className="text-lg cursor-pointer text-secondary_button  hover:text-secondary_button_hover"
        onClick={handleExcel}
      />
      <IoPrintOutline
        className="text-lg cursor-pointer text-secondary_button  hover:text-secondary_button_hover"
        onClick={handlePrint}
      />
    </div>
  );
};

export default DownloadComponent;
