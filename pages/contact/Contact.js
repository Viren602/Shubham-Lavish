import React, { Component } from "react";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      validationRules: {},
      validState: {
        isValid: true,
        error: {},
      },
    };
  }

  render() {
    return (
      <>
        <div className="contact-page">
          <div>
            <div className="inner justify-items-center text-center py-[50px] text-white bg-[url('/contact-banner.png')] bg-cover bg-center bg-no-repeat w-full">
              <h1 className="py-[20px] text-3xl md:text-4xl font-bold">
                Contact Us
              </h1>
              <p className="text-white max-w-[800px] mx-auto px-4 text-sm md:text-base">
                We believe construction is more than concrete and steel—it’s
                about shaping dreams into reality. With integrity and innovation
                at the core, Shubham Lavis stands as your trusted construction
                partner.
              </p>
            </div>
          </div>

          <div className="contact-us py-10 px-4">
            <div className="container mx-auto">
              <div className="contact-inner flex flex-col lg:flex-row gap-8">
                <div className="w-full lg:w-1/2 space-y-6 text-xs">
                  <h2 className="text-2xl font-bold">Ask Us Anything!</h2>
                  <p className="text-xs">
                    Our team is always available to guide you through your
                    project needs, We’re here to make your journey simple and
                    stress-free.
                  </p>

                  <div className="flex gap-5 items-center">
                    <img src="/call-icon.png"  className="w-8 h-8 bg-gray-950" />
                    <div>
                      <span className="font-semibold">Call Us</span>
                      <br />
                      <span>+91-99136 13494</span>
                    </div>
                  </div>

                  <div className="flex gap-5 items-center">
                    <img src="/mail-icon.png"  className="w-8 h-8 bg-gray-950"/>
                    <div>
                      <span className="font-semibold">Mail Us</span>
                      <br />
                      <span>sales@amhygiene.co.in</span>
                    </div>
                  </div>

                  <div className="flex gap-5">
                    <img
                      src="/location-icon.png"
                      className="w-8 h-8 bg-gray-950"
                    />
                    <div>
                      <span className="font-semibold">Visit Us</span>
                      <br />
                      <p className="md:w-[300px] text-xs">
                        Plot No. 75, Vibrant Platinum Park,
                        Kadadara Road, Near Zak Gidc,
                        Dehgam, Gandhinagar-382305,
                        Gujarat, India.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="w-full max-w-2xl bg-white shadow-md rounded-2xl p-8">
                    <h2 className="text-2xl font-bold mb-6">Fill The Form</h2>
                    <form className="space-y-5 text-xs">
                      <div>
                        <label className="block mb-1 font-medium">
                          Your name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          placeholder="Enter your name"
                          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Your email <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          placeholder="Enter your email"
                          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Mobile no. <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="number"
                          name="number"
                          placeholder="Enter your number"
                          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
                        />
                      </div>

                      <div>
                        <label className="block mb-1 font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <textarea
                          name="message"
                          rows="4"
                          placeholder="Write your message"
                          className="w-full px-4 py-2 border rounded-lg bg-gray-50 focus:ring-2 focus:ring-black focus:outline-none"
                        ></textarea>
                      </div>

                      <div>
                        <button
                          type="submit"
                          className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
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
}

export default Contact;
