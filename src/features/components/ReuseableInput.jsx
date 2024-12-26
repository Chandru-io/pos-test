/* eslint-disable react/prop-types */

const ReusableInput = ({
  field,
  form,
  type,
  options,
  placeholder,
  ...props
}) => {
  const error = form.errors[field.name];
  const touched = form.touched[field.name];

  const handleFileChange = (event) => {
    const file = event.currentTarget.files[0];
    form.setFieldValue(field.name, file);
  };

  if (type === "file") {
    return (
      <div className="flex flex-col gap-y-1">
        <label
          htmlFor={field.name}
          className="text-[#344054] text-sm font-bold "
        >
          {props.label}
        </label>
        <div className="relative ">
          <input
            id={field.name}
            name={field.name}
            type="file"
            onChange={handleFileChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <div
            className={`border border-black rounder flex items-center justify-start overflow-hidden rounded
          ${error && touched ? "border-red-500" : ""}`}
          >
            <button
              type="button"
              className="block w-full text-xs max-w-20 py-[8.5px] px-2  font-semibold text-white bg-primary rounded-l hover:bg-primary transition-colors whitespace-nowrap"
            >
              Choose File
            </button>

            <span className=" text-gray-500 text-sm px-3 whitespace-nowrap">
              {field.value ? field.value.name : "No file chosen"}
            </span>
          </div>
        </div>

        {error && touched && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
      </div>
    );
  }

  if (type === "select") {
    return (
      <div className="flex flex-col gap-y-1">
        <label
          htmlFor={field.name}
          className="text-[#344054] text-sm font-bold"
        >
          {props.label}
        </label>
        <select
          id={field.name}
          {...field}
          {...props}
          className={`input p-1.5 placeholder:text-sm  text-sm  rounded border bg-white focus:outline-none ${
            error && touched ? "border-red-500" : ""
          }`}
        >
          <option value="" disabled>
            Select {props.label}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {error && touched && (
          <span className="text-red-500 text-xs">{error}</span>
        )}
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-y-1">
      <label htmlFor={field.name} className="text-[#344054] text-sm font-bold">
        {props.label}
      </label>
      <input
        id={field.name}
        {...field}
        {...props}
        type={type}
        placeholder={placeholder}
        className={`input p-1 placeholder:text-sm  bg-white border rounded focus:outline-none ${
          error && touched ? "border-red-500" : ""
        }`}
      />
      {error && touched && (
        <span className="text-red-500 text-xs">{error}</span>
      )}
    </div>
  );
};

export default ReusableInput;
