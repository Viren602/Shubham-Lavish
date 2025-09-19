import React, { Component, useState } from "react";
import { Messages } from "../../utils/Messages";
import { isValidForm, validate } from "../../utils/validations/CommonValidator";
import ValidationText from "../../utils/validations/ValidationText";

function Contact() {
  const [Formdata, setFormdata] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const handleChange = (e, name) => {
    const value = e.target.value;
    setFormdata((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const [validateState, setValidateState] = useState({
    isValid: true,
    error: {},
  });

  const validationRules = {
    name: [
      {
        type: "require",
        message: Messages.CommonValidationMessages.FieldRequired.replace(
          "{0}",
          "name"
        ),
      },
    ],
    mobile: [
      {
        type: "require",
        message: Messages.CommonValidationMessages.FieldRequired.replace(
          "{0}",
          "mobile"
        ),
      }, 
    ],
    message: [
      {
        type: "require",
        message: Messages.CommonValidationMessages.FieldRequired.replace(
          "{0}",
          "message"
        ),
      },
    ],
    email: [
      {
        type: "require",
        message: Messages.CommonValidationMessages.FieldRequired.replace(
          "{0}",
          "Email"
        ),
      },
      {
        type: "email",
        message: Messages.CommonValidationMessages.FieldRequired.replace(
          "{0}",
          "Email"
        ),
      },
    ],
  };

  const isAllFieldsValid = () => {
    const newValidState = isValidForm(Formdata, validationRules, validateState);
    setValidateState(newValidState);
    return newValidState.isValid;
  };

  const validateField = (key) => {
    const newValidState = validate(
      key,
      Formdata, 
      validationRules,
      validateState
    );
    setValidateState(newValidState);
    return newValidState.isValid;
  };

  return (
    <>
      <div className="contact-page">
        <div>
          <div className="inner justify-items-center text-center py-[50px] text-white bg-[url('/contact-banner.png')] bg-cover bg-center bg-no-repeat w-full">
            <h1 className="py-[20px] text-3xl md:text-4xl font-bold">
              Contact Us
            </h1>
            <p className="text-white max-w-[700px] mx-auto px-4 text-sm md:text-base">
              We believe construction is more than concrete and steel—it’s about
              shaping dreams into reality. With integrity and innovation at the
              core, Shubham Lavis stands as your trusted construction partner.
            </p>
          </div>
        </div>

        <div className="contact-us py-[80px] px-4">
          <div className="container mx-auto">
            <div className="contact-inner flex flex-col lg:flex-row gap-8">
              <div className="w-full lg:w-1/2 space-y-6 lg:text-xl">
                <h2 className="text-xl lg:text-4xl font-bold">
                  Ask Us Anything!
                </h2>
                <p>
                  Our team is always available to guide you through your project
                  needs, We’re here to make your journey simple and stress-free.
                </p>

                <div className="flex gap-5 items-start text-[16px]">
                  <div className="call-icon w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <i className="fi fi-rr-phone-call text-white text-[15px] h-[15px] leading-tight"></i>
                  </div>
                  <div className="my-[-5px]">
                    <span className="font-semibold">Call Us</span>
                    <br />
                    <span>+91-99136 13494</span>
                  </div>
                </div>

                <div className="flex gap-5 items-start text-[16px]">
                  <div className="mail-icon w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <i className="fi fi-rr-envelope text-white text-[15px] h-[15px] leading-tight"></i>
                  </div>
                  <div className="my-[-5px]">
                    <span className="font-semibold">Mail Us</span>
                    <br />
                    <span>sales@amhygiene.co.in</span>
                  </div>
                </div>

                <div className="flex gap-5 items-start">
                  <div className="location-icon w-[30px] h-[30px] bg-black flex items-center justify-center">
                    <i className="fi fi-rr-marker text-white text-[15px] h-[15px] leading-tight"></i>
                  </div>
                  <div className="my-[-9px]">
                    <span className="font-semibold text-[16px]">Visit Us</span>
                    <br />
                    <p className="md:w-[300px] text-[15px]">
                      Plot No. 75, Vibrant Platinum Park, Kadadara Road, Near
                      Zak Gidc, Dehgam, Gandhinagar-382305, Gujarat, India.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex justify-center">
                <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-8">
                  <h2 className="text-2xl font-bold mb-6">Fill The Form</h2>
                  <form className="space-y-5">
                    <div className="lg:text-[20px]">
                      <label className="block mb-2 font-medium">
                        Your name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={Formdata.name}
                        onChange={(e) => handleChange(e, "name")}
                        onBlur={() => validateField("name")}
                        className={`w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2  focus:outline-none ${
                          validateState.error.name ? "border-2 border-black" : ""
                        }`}
                      />
                      <ValidationText error={validateState.error.name} />
                    </div>
                    <div className="lg:text-[20px]">
                      <label className="block mb-2 font-medium">
                        Your email <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={Formdata.email}
                        onChange={(e) => handleChange(e, "email")}
                        onBlur={() => validateField("email")}
                        className={`w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:outline-none ${
                          validateState.error.email ? "border-black" : ""
                        }`}
                      />
                      <ValidationText error={validateState.error.email}/>
                    </div>
                    <div className="lg:text-[20px]">
                      <label className="block mb-2 font-medium">
                        Mobile no. <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="number"
                        name="number"
                        value={Formdata.mobile}
                        onChange={(e) => handleChange(e, "mobile")}
                        onBlur={() => validateField("mobile")}
                        className={`w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:outline-none ${
                          validateState.error.mobile ? "border-black" : ""
                        }`}
                      />
                      <ValidationText error={validateState.error.mobile}/>
                    </div>

                    <div className="lg:text-[20px]">
                      <label className="block mb-2 font-medium">
                        Message <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        name="message"
                        rows="4"
                        value={Formdata.message}
                        onChange={(e) => handleChange(e, "message")}
                        onBlur={() => validateField("message")}
                        className={`w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:outline-none ${
                          validateState.error.message ? "border-black" : ""
                        }`}
                      ></textarea>
                      <ValidationText error={validateState.error.message}/>
                    </div>

                    <div>
                      <button
                        type="submit"
                        className="w-full bg-gray-800 text-white py-3 rounded-lg hover:bg-gray-950 transition"
                      >
                        Send Message
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
