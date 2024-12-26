import { Formik, Field, Form } from "formik";
import * as Yup from "yup";
import ReusableInput from "../../../components/ReuseableInput";

const SETTING_INPUT_FIELDS = [
  {
    name: "restaurant_name",
    lable: "System Settings.Restaurant Name",
    type: "text",
    placeholder: "POS dining",
  },
  {
    name: "restaurant_short_name",
    lable: "System Settings.Restaurant Short Name",
    type: "text",
    placeholder: "PQ",
  },
  {
    name: "invoice_logo",
    lable: "System Settings.Invoice Logo",
    type: "file",
  },
  {
    name: "website",
    lable: "System Settings.Website",
    type: "text",
    placeholder: "website.com",
  },
  {
    name: "date_format",
    lable: "System Settings.Date Format",
    type: "select",
    options: [
      { value: "day_month_year", label: "D/M/Y" },
      { value: "month_year_day", label: "M/Y/D" },
      { value: "year_month_day", label: "Y/M/D" },
    ],
  },
  {
    name: "time_zone",
    lable: "System Settings.Time Zone",
    type: "select",
    options: [{ value: "asia_qatar", label: "Asia/Qatar" }],
  },
  {
    name: "currency_symbol",
    lable: "System Settings.Currency Symbol",
    type: "text",
    placeholder: "$",
  },
  {
    name: "currency_position",
    lable: "System Settings.Currency Position",
    type: "select",
    options: [
      { value: "after_amount", label: "After amount" },
      { value: "before_amount", label: "Before amount" },
    ],
  },
  {
    name: "precision",
    lable: "System Settings.Precision.Precision",
    type: "select",
    options: [
      { value: "3_digit", label: "System Settings.Precision.3 digit" },
      { value: "2_digit", label: "System Settings.Precision.2 digit" },
    ],
  },
  {
    name: "decimal_separator",
    lable: "System Settings.Decimal Separator.Decimal Separator",
    type: "select",
    options: [
      { value: "dot", label: "System Settings.Decimal Separator.Point" },
      { value: "comma", label: "System Settings.Decimal Separator.comma" },
      {
        value: "space",
        label: "System Settings.Decimal Separator.Point.space",
      },
    ],
  },
  {
    name: "thousand_separator",
    lable: "System Settings.Thousand Separator.Thousand Separator",
    type: "select",
    options: [
      { value: "dot", label: "Dot" },
      { value: "comma", label: "Comma" },
      { value: "space", label: "Space" },
    ],
  },
  {
    name: "when_clicking_items_on_pos",
    lable: "When clicking items on POS",
    type: "select",
    options: [
      { value: "show_option", label: "Show option" },
      { value: "dont_show_option", label: "Dont show option" },
    ],
  },
  {
    name: "default_order_type",
    lable: "Default order Type",
    type: "select",
    options: [
      { value: "dine_in", label: "Dine In" },
      { value: "take_away", label: "Take away" },
      { value: "delivery", label: "Delivery" },
      { value: "none", label: "None" },
    ],
  },
  {
    name: "default_delivery_partner",
    lable: "Default delivery partner",
    type: "select",
    options: [
      { value: "zomato", label: "Zomato" },
      { value: "none", label: "None" },
    ],
  },
  {
    name: "default_waiter",
    lable: "Default waiter",
    type: "select",
    options: [
      { value: "zomato", label: "Zomato" },
      { value: "none", label: "None" },
    ],
  },
  {
    name: "default_customer",
    lable: "Default customer",
    type: "select",
    options: [
      { value: "hari", label: "hari" },
      { value: "tamil", label: "Tamil" },
    ],
  },
  {
    name: "default_payment_method",
    lable: "Default payment method",
    type: "select",
    options: [
      { value: "cash", label: "Cash" },
      { value: "bank_transfer", label: "Bank Transfer" },
      { value: "online", label: "Online" },
    ],
  },
  {
    name: "place_order",
    lable: "Place order tool tip ( in POS)",
    type: "select",
    options: [
      { value: "show", label: "Show" },
      { value: "hide", label: "Hide" },
    ],
  },
  {
    name: "food_menu",
    lable: "Food menu tooltip( in POS)",
    type: "select",
    options: [
      { value: "show", label: "Show" },
      { value: "hide", label: "Hide" },
    ],
  },
  {
    name: "sms_sent_auto",
    lable: "SMS sent Auto( in final invoice)",
    type: "select",
    options: [
      { value: "yes", label: "Yes" },
      { value: "no", label: "No" },
    ],
  },
  {
    name: "payment_methord",
    lable: "Pre or post payment",
    type: "select",
    options: [
      { value: "post_payment", label: "Post payment" },
      { value: "pre_payment", label: "Pre payment" },
    ],
  },
  {
    name: "service_charge",
    lable: "Service Charge",
    type: "text",
    placeholder: "10 or 10%",
  },
  {
    name: "delivery_charge",
    lable: "Delivery Charge",
    type: "text",
    placeholder: "10 or 10%",
  },
  {
    name: "active_login_button",
    lable: "Active login button",
    type: "select",
    options: [
      { value: "pin", label: "Pin" },
      { value: "userName_password", label: "Username & Password" },
      { value: "both", label: "Both" },
    ],
  },
  {
    name: "login_option",
    lable: "Login option",
    type: "select",
    options: [
      { value: "pin", label: "Pin" },
      { value: "userName_password", label: "Username & Password" },
      { value: "both", label: "Both" },
    ],
  },
  {
    name: "loyalty_point",
    lable: "Loyalty point",
    type: "select",
    options: [
      { value: "enable", label: "Enable" },
      { value: "disable", label: "Disable" },
    ],
  },
  {
    name: "loyalty",
    lable: "Minimum loyalty point to redeem",
    type: "text",
    placeholder: "10",
  },
  {
    name: "loyalty_point_rate",
    lable: "Loyalty point rate",
    type: "text",
    placeholder: "10%",
  },
  {
    name: "export_sales",
    lable: "Export daily sales or reset all sales",
    type: "select",
    options: [
      { value: "enable", label: "Enable" },
      { value: "disable", label: "Disable" },
    ],
  },
];

const validationSchema = Yup.object(
  SETTING_INPUT_FIELDS.reduce((schema, field) => {
    switch (field.type) {
      case "text":
        schema[field.name] = Yup.string().required(
          `${field.lable} is required`
        );
        break;
      case "select":
        schema[field.name] = Yup.string().required(
          `Please select a ${field.lable}`
        );
        break;
      case "file":
        schema[field.name] = Yup.mixed()
          .required(`${field.lable} is required`)
          .test(
            "fileFormat",
            "Unsupported file format",
            (value) =>
              value &&
              ["image/jpeg", "image/png", "image/jpg"].includes(value.type)
          );
        break;
      default:
        break;
    }
    return schema;
  }, {})
);

const SystemSettings = () => {
  const initialValues = SETTING_INPUT_FIELDS.reduce((acc, field) => {
    acc[field.name] = field.type === "file" ? null : "";
    return acc;
  }, {});

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const formData = new FormData();
        Object.keys(values).forEach((key) => {
          formData.append(key, values[key]);
        });

        console.log("Submitted Data:", values);
      }}
    >
      {({ handleSubmit }) => (
        <Form onSubmit={handleSubmit} className="p-5">
          <div className="py-4">
            <p className="text-xl font-bold ">System Settings </p>
          </div>
          <div className="grid  lg:grid-cols-4 md:grid-cols-2   grid-cols-1 justify-center  gap-5 w-full">
            {SETTING_INPUT_FIELDS.map((field) => (
              <Field
                key={field.name}
                name={field.name}
                type={field.type}
                options={field.options}
                placeholder={field.placeholder}
                label={field.lable}
                component={ReusableInput}
              />
            ))}
          </div>

          <button className="px-4 py-1.5 mt-2 text-center text-white bg-primary font-semibold cursor-pointer rounded-md">
            Reset transaction data
          </button>
          <div className="flex flex-col gap-y-1 mt-2">
            <label className="text-[#344054] text-sm">Invoice footer</label>
            <textarea
              className="w-full p-2 rounded bg-white focus:outline-blue-500"
              placeholder="Thank you for visiting here"
            />
          </div>
          <div className="flex justify-self-end">
            <button
              type="submit"
              className="btn btn-primary w-60 bg-green-500 text-white text-center mt-4 p-2 rounded-md hover:bg-green-600 duration-200"
            >
              Submit
            </button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default SystemSettings;
