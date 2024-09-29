import React from "react";
import address from "../../assets/address.svg";
import phone from "../../assets/phone.svg";
import time from "../../assets/time.svg";

const ContactForm = () => {
  return (
    <div className="mt-[133px] flex justify-center items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white p-8 rounded-lg  w-full max-w-4xl">
        <div className="space-y-8">
          <div className="flex items-start space-x-4">
            <div className="text-black bg-gray-200 p-2 rounded-full ">
              <img src={address} alt="" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Address</h4>
              <p>236 5th SE Avenue, New York NY10000, United States</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-black bg-gray-200 p-2 rounded-full">
              <img src={phone} alt="" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>Mobile: (+84) 546-6789</p>
              <p>Hotline: (+84) 456-6789</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="text-black bg-gray-200 p-2 rounded-full">
              <img src={time} alt="" />
            </div>
            <div>
              <h4 className="text-lg font-semibold">Working Time</h4>
              <p>Monday-Friday: 9:00 - 22:00</p>
              <p>Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Your Name
            </label>
            <input
              type="text"
              placeholder="Abc"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="Abc@def.com"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Subject
            </label>
            <input
              type="text"
              placeholder="This is an optional"
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
              placeholder="Hi! I'd like to ask about..."
              className="mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-yellow-500 focus:border-yellow-500"
              rows="3"
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-opacity-50"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
