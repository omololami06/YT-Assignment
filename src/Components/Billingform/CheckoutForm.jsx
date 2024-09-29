import React, { useState } from "react";

const CheckoutForm = () => {
  const [paymentMethod, setPaymentMethod] = useState("bank");

  return (
    <div className="mt-[70px]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {/* Billing Details Section */}
        <div className="bg-white p-6  rounded-md">
          <h2 className="text-xl font-semibold mb-6">Billing details</h2>
          <form>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-black">
                  First Name
                </label>
                <input
                  type="text"
                  name="firstName"
                  // value={formData.firstName}
                  // onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-black">
                  Last Name
                </label>
                <input
                  type="text"
                  name="lastName"
                  // value={formData.lastName}
                  // onChange={handleChange}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  required
                />
              </div>
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Company Name (Optional)
              </label>
              <input
                type="text"
                name="companyName"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Country / Region
              </label>
              <input
                type="text"
                name="lastName"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                value="Sri Lanka"
                option
              />
              {/* <select className="border border-gray-300 p-2 rounded w-full">
                <option value="Sri Lanka">Sri Lanka</option>
              </select> */}
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Street address
              </label>
              <input
                type="text"
                name="streetAddress"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Town / City
              </label>
              <input
                type="text"
                name="townCity"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Province
              </label>
              <input
                type="text"
                name="province"
                value="Western Province"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
              {/* <select className="border border-gray-300 p-2 rounded">
                <option value="Western Province">Western Province</option>
              </select> */}
            </div>

            <div>
              <label className="block text-sm font-medium text-black">
                ZIP Code
              </label>
              <input
                type="text"
                name="zipCode"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium text-black">
                Email address
              </label>
              <input
                type="text"
                name="emailAddress"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
              />
            </div>

            <div className="mb-4">
              <input
                type="text"
                name="info"
                // value={formData.lastName}
                // onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                required
                value="Additional Information"
              />
            </div>
          </form>
        </div>

        {/* Order Summary Section */}
        <div className="bg-white p-6  rounded-md">
          <h2 className="text-xl font-semibold mb-6">Product</h2>
          <div className="flex justify-between mb-4">
            <span>Asgard sofa x 1</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between mb-4">
            <span>Subtotal</span>
            <span>Rs. 250,000.00</span>
          </div>
          <div className="flex justify-between font-bold text-lg mb-4">
            <span>Total</span>
            <span className="text-[#B88E2F]">Rs. 250,000.00</span>
          </div>
          <h3 className="text-lg font-semibold mb-4">Payment Method</h3>
          <div className="mb-4">
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="bank"
                // checked={paymentMethod === "bank"}
                // onChange={() => setPaymentMethod("bank")}
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            <label className="flex items-center mb-2">
              <input
                type="radio"
                name="payment"
                value="cash"
                // checked={paymentMethod === "cash"}
                // onChange={() => setPaymentMethod("cash")}
                className="mr-2"
              />
              Cash on Delivery
            </label>
          </div>

          <p className="w-[529px]">
            Your personal data will be used to support your experience
            throughout this website, to manage access to your account, and for
            other purposes described in our privacy policy.
          </p>

          <div className="text-center mt-4">
            <button className="w-[318px]  bg-white text-black py-2 rounded-full border border-black ">
              Place order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutForm;
