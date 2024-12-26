/* eslint-disable react/prop-types */
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { Modal } from "flowbite-react";

const CreateAndEditCustomer = ({
  initialValues,
  isEdit,
  onCloseModal,
  setCustomList,
  editId,
  setSelectedCustomer,
  type,
  isOpen,
}) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    phone: Yup.string().required("Phone number is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    dateOfBirth: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .nullable()
      .required("Date of birth is required"),
    dateOfAnniversary: Yup.date()
      .transform((value, originalValue) =>
        originalValue === "" ? null : value
      )
      .nullable(),
    discount: Yup.string()
      .matches(/^\d+(\%|)$/, "Enter a valid discount like 10 or 10%")
      .optional(),
    state: Yup.string().required("State selection is required"),
    gstNumber: Yup.string().required("GST Number is required"),
    address: Yup.string().optional(),
  });

  const defaultValues = {
    name: "",
    phone: "",
    email: "",
    dateOfBirth: "",
    dateOfAnniversary: "",
    discount: "",
    state: "Same State",
    gstNumber: "",
    address: "",
  };

  const mergedInitialValues = initialValues
    ? { ...defaultValues, ...initialValues }
    : defaultValues;

  const handleFormSubmit = (values, { setSubmitting }) => {
    console.log("Submitted Form Data:", values);
    setSubmitting(false);

    let newCustomer = {
      id: Math.random() * 100 + 1,
      ...values,
    };

    setSelectedCustomer(newCustomer);

    if (!isEdit) {
      setCustomList((prev) => [...prev, newCustomer]);
    } else {
      setCustomList((prev) =>
        prev.map((customer) =>
          customer.id === editId ? { ...customer, ...values } : customer
        )
      );
    }

    if (onCloseModal) onCloseModal();
  };
  if (!isOpen) return null;

  return (
    <Modal show={isOpen} size="2xl" popup onClose={onCloseModal}>
      <Modal.Header />
      <Modal.Body>
        <Formik
          initialValues={mergedInitialValues}
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit}
        >
          {({ isSubmitting }) => (
            <Form className="  mx-auto p-4 bg-white rounded-lg  space-y-4 relative">
              <h2 className="text-xl font-semibold">{type} Customer</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1">Name *</label>
                  <Field
                    type="text"
                    name="name"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1">Date of Birth *</label>
                  <Field
                    type="date"
                    name="dateOfBirth"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="dateOfBirth"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1">Phone *</label>
                  <Field
                    type="text"
                    name="phone"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="phone"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1">Date of Anniversary</label>
                  <Field
                    type="date"
                    name="dateOfAnniversary"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="dateOfAnniversary"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1">Email *</label>
                  <Field
                    type="email"
                    name="email"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <label className="block mb-1">Default Discount</label>
                  <Field
                    type="text"
                    name="discount"
                    placeholder="Enter discount like 10 or 10%"
                    className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  />
                  <ErrorMessage
                    name="discount"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-1">Delivery Address</label>
                <Field
                  as="textarea"
                  name="address"
                  className="w-full px-2 py-1 border rounded-md focus:outline-green-500"
                  rows="2"
                />
              </div>

              <div className="flex justify-center space-x-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-gray-300 rounded-md"
                  onClick={onCloseModal}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-green-500 text-white rounded-md"
                  disabled={isSubmitting}
                >
                  {isEdit ? "Update" : "Create"}
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </Modal.Body>
    </Modal>
  );
};

export default CreateAndEditCustomer;
