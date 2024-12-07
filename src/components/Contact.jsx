import React from 'react';

function Contact() {
  return (
    <>
      <div name="contacts" className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <span className="text-lg font-bold">Here are my contact details and resume link</span>
        </div>
        <div className="flex flex-col items-center justify-center mt-5">
          <div className="bg-slate-200 w-96 px-8 py-6 rounded-xl text-gray-700">
            <h1 className="text-xl font-semibold mb-4">Contact Details</h1>
            
            <div className="mb-4">
              <label className="block font-bold">Full Name:</label>
              <p className="shadow rounded-lg appearance-none border rounded py-2 px-3">
                Abhinab Kumar Karn
              </p>
            </div>

            <div className="mb-4">
              <label className="block font-bold">Phone Number:</label>
              <p className="shadow rounded-lg appearance-none border rounded py-2 px-3">
                +977-9821293522
              </p>
            </div>

            <div className="mb-4">
              <label className="block font-bold">Email Address:</label>
              <p className="shadow rounded-lg appearance-none border rounded py-2 px-3">
                abhinawkarn2019@gmail.com
              </p>
            </div>

            <div className="mb-4">
              <label className="block font-bold">Resume:</label>
              <a
                href="https://drive.google.com/file/d/11SchSuEJLHpl-obJV2sCTutETlNvRIni/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Download Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
