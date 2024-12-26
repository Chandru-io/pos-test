import { useState } from "react";
import { RiDeleteBin6Fill } from "react-icons/ri";

const TaxSettings = () => {
  const [collectTax, setCollectTax] = useState(false);

  const [taxFields, setTaxFields] = useState([{ name: "", rate: "" }]);

  const handleAddField = () => {
    setTaxFields([...taxFields, { name: "", rate: "" }]);
  };

  const handleRemoveField = (index) => {
    const updatedFields = taxFields.filter((_, i) => i !== index);
    setTaxFields(updatedFields);
  };

  const handleFieldChange = (index, field, value) => {
    const updatedFields = [...taxFields];
    updatedFields[index][field] = value;
    setTaxFields(updatedFields);
  };

  return (
    <div className="p-8 sm:">
      <div className="    ">
        <p className="text-xl font-bold ">Tax Settings </p>
      </div>
      <div className="mb-6">
        <label className="block mb-2 text-base font-medium">
          Do I collect Tax?
        </label>
        <div className="flex gap-4">
          <label className="flex items-center">
            <input
              type="radio"
              name="collectTax"
              value="yes"
              className="mr-2"
              onChange={() => setCollectTax(true)}
            />
            Yes
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="collectTax"
              value="no"
              className="mr-2"
              onChange={() => setCollectTax(false)}
            />
            No
          </label>
        </div>
      </div>
      {collectTax && (
        <>
          <div className="grid grid-cols-3 gap-6 mb-6">
            <input
              type="text"
              placeholder="Tax Type"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="My Tax Title"
              className="p-2 border border-gray-300 rounded"
            />
            <input
              type="text"
              placeholder="My Tax Registration No"
              className="p-2 border border-gray-300 rounded"
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-base font-medium">
              {"  My Tax is GST "}
            </label>
            <div className="flex gap-4">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="collectTax1"
                  value="yes"
                  className="mr-2"
                />
                Yes
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="collectTax1"
                  value="no"
                  className="mr-2"
                />
                No
              </label>
            </div>
          </div>
          <div className="w-full overflow-x-auto">
            <label className="block mb-2 text-base font-medium">
              My Tax Fields
            </label>
            <div className="grid grid-cols-4 gap-4 border-t border-l border-r border-gray-300  p-2 rounded-t-md ">
              <div className="font-bold p-2">SN</div>
              <div className="font-bold p-2">Name</div>
              <div className="font-bold p-2">Rate</div>
              <div className="font-bold p-2">Action</div>
            </div>
            <hr />

            <div className="grid grid-cols-4 gap-4 mb-4 justify-items-start rounded-b-md border-gray-300 border-l border-r border-b">
              {taxFields.map((field, index) => (
                <>
                  <div className="p-2 text-center pl-3">{index + 1}</div>
                  <div className="p-2">
                    <input
                      type="text"
                      value={field.name}
                      placeholder=" Enter Tax Name "
                      onChange={(e) =>
                        handleFieldChange(index, "name", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="p-2">
                    <input
                      type="number"
                      value={field.rate}
                      placeholder=" Enter Tax Rate "
                      onChange={(e) =>
                        handleFieldChange(index, "rate", e.target.value)
                      }
                      className="w-full p-2 border border-gray-300 rounded"
                    />
                  </div>
                  <div className="p-2 text-center">
                    <button
                      onClick={() => handleRemoveField(index)}
                      className="text-[#EB3D4D] bg-[#FFECE4] rounded-md"
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </div>
                </>
              ))}

              <button
                onClick={handleAddField}
                className="px-4 py-2 mb-4 ml-4 border border-dashed border-gray-300 text-white hover:text-gray-800 rounded md:whitespace-nowrap"
              >
                Add more
              </button>
            </div>
          </div>

          <div className="flex gap-4">
            <button className="px-4 py-2 bg-primary  text-white rounded hover:bg-primary_hover">
              Show Sample Invoice
            </button>
            <button className="px-4 py-2 bg-secondary text-white rounded hover:bg-secondary_hover">
              Confirm
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaxSettings;
