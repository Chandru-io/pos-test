/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import TimePicker from "./TimePicker";

const ReservationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  phone: Yup.string()
    .matches(/^[0-9]+$/, "Must be a number")
    .required("Phone is required"),
  totalMember: Yup.number()
    .min(1, "Minimum 1 member")
    .required("Total Member is required"),
  date: Yup.date().required("Date is required"),
  time: Yup.string().required("Time is required"),
  advance: Yup.number().min(0, "Advance cannot be negative"),
  advanceType: Yup.string().required("Select advance type"),
});

const ReservationForm = ({ onClose }) => {
  const handleSubmit = (values) => {
    console.log("Form Data:", values);
  };

  return (
    <Formik
      initialValues={{
        name: "",
        phone: "+91",
        totalMember: "",
        date: "",

        note: "",
        advance: "",
        advanceType: "",
      }}
      validationSchema={ReservationSchema}
      onSubmit={handleSubmit}
    >
      {() => (
        <Form className="p-6 space-y-4 bg-white rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-center">
            Table Reservation
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {/* Name Field */}
            <div>
              <Field
                name="name"
                type="text"
                placeholder="Name"
                className="w-full px-3 py-2 border rounded focus:outline-none"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Phone Field */}
            <div>
              <Field
                name="phone"
                type="text"
                placeholder="Phone"
                className="w-full px-3 py-2 border rounded focus:outline-none"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>

          {/* Total Member and Date Time */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <Field
                name="totalMember"
                type="number"
                placeholder="Total Member"
                className="w-full px-3 py-2 border rounded focus:outline-none"
              />
              <ErrorMessage
                name="totalMember"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div className="flex gap-2">
              <Field
                name="date"
                type="date"
                className="w-1/2 px-3 py-2 border rounded focus:outline-none"
              />
              <TimePicker />
            </div>
          </div>

          <div>
            <Field
              as="textarea"
              name="note"
              placeholder="Note"
              className="w-full h-24 px-3 py-2 border rounded focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <Field
                name="advance"
                type="number"
                placeholder="Advance"
                className="w-full px-3 py-2 border rounded focus:outline-none"
              />
              <ErrorMessage
                name="advance"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            <div>
              <Field
                as="select"
                name="advanceType"
                className="w-full px-3 py-2 border rounded focus:outline-none"
              >
                <option value="" label="Select advance type" />
                <option value="Cash" label="Cash" />
                <option value="Card" label="Card" />
                <option value="UPI" label="UPI" />
              </Field>
              <ErrorMessage
                name="advanceType"
                component="div"
                className="text-sm text-red-500"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-start items-center gap-x-3">
            <button
              type="submit"
              className="px-4 py-2 font-semibold text-white bg-green-500 rounded hover:bg-green-600"
            >
              Book
            </button>
            <button
              type="button"
              className="px-4 py-2 font-semibold text-red-500 border border-red-500 rounded hover:bg-red-100"
              onClick={onClose}
            >
              Cancel
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ReservationForm;
