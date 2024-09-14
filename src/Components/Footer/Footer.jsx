import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Formik, Form, Field, ErrorMessage } from "formik";

const Footer = () => {
  // Form validation schema using Yup
  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  // Function to handle form submission
  const handleSubmit = (values, { resetForm }) => {
    // Mock submission or actual API call can go here
    console.log(values);

    // Show toast message on success
    toast.success("Successfully subscribed to the newsletter!", {
      position: "top-right",
      autoClose: 3000,
    });

    // Reset the form after submission
    resetForm();
  };

  return (
    <footer>
      <div className="container mx-auto px-[163px] mt-[50px] font-poppins mb-5">
        <div className="flex flex-col lg:flex-row justify-between">
          <div className="mb-8 lg:mb-0">
            <h2 className="text-xl font-semibold">Funiro.</h2>
            <p className="text-sm text-gray-600 mt-[50px]">
              400 University Drive Suite 200 Coral Gables,
              <br />
              FL 33134 USA
            </p>
          </div>

          <div className="flex flex-col lg:flex-row lg:space-x-12">
            <div className="mb-8 lg:mb-0">
              <h3 className="font-semibold text-sm uppercase tracking-wide">
                Links
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Shop
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div className="mb-8 lg:mb-0">
              <h3 className="font-semibold text-sm uppercase tracking-wide">
                Help
              </h3>
              <ul className="mt-4 space-y-2 text-gray-600 text-sm">
                <li>
                  <a href="#" className="hover:text-black">
                    Payment Options
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Returns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-black">
                    Privacy Policies
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wide">
              Newsletter
            </h3>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}
            >
              {({ isSubmitting }) => (
                <Form className="flex items-center justify-center mt-5">
                  <div className=" flex">
                    <Field
                      type="email"
                      name="email"
                      placeholder="Enter Your Email Address"
                      className=" underline"
                    />
                    <ErrorMessage
                      name="email"
                      component="div"
                      className=" text-red-500 border-2 border-blue-600"
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className=" text-black underline px-4 py-2 rounded-r-md hover:bg-gray-200 text-sm"
                  >
                    SUBSCRIBE
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Toastify container to display toast messages */}
          <ToastContainer />
        </div>

        <div className="mt-10 border-t border-gray-300 pt-6 text-sm text-gray-500 text-left">
          <p>2023 Funiro. All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
