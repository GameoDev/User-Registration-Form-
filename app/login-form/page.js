"use client";

import POST from "@/pages/api/login";
export default function Login() {
  const OnHandleSubmit = (e) => {
    event.preventDefault(); // Prevent the default form submission behavior
    const formData = {}; // Initialize an empty object to store form data

    // Iterate over form elements and update formData with their values
    for (const element of e.target.elements) {
      if (element.name) {
        formData[element.name] = element.value;
      }
    }
    console.log("Form Data:", formData);
    SubmitData(formData);
  };

  const SubmitData = async (_data) => {
    const response = await fetch("/api/login", {
      method: "POST",
      body: JSON.stringify(_data),
      headers: {
        "content-type": "application/json",
      },
    });

    console.log(response, " Api reponse");
    const data = await response.json();
    if (response.ok) {
      document.querySelector("info").innerHTML = "Logged In";
    }
  };

  return (
    <>
      <div className="min-h-screen  bg-gray-100 flex flex-col justify-center py-12 content-center px-6 lg:px-8">
        <img
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Italian Trulli"
          className="mx-auto h-[100px] w-auto py-[8px] my-9"
        />
        <h1
          id="info"
          className="text-black self-center font-semibold text-4xl font-sans"
        >
          {/* {props?.user}, Create Your Account */}Please Login
        </h1>
        <div className="py-6 mt-8 sm:mx-auto sm:w-full sm:max-w-md sm:px-8 rounded-lg self-center min-w-1 bg-white">
          <form onSubmit={OnHandleSubmit} method="POST">
            <label htmlFor="email">
              <b className="text-black font-semibold text-sm">Email Address</b>
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter Email"
              name="email"
              required
              className="my-2 px-2 w-96 h-12 border-solid border-[0.15px] border-black text-black"
            />
            <br />
            <label htmlFor="psw">
              <b className="text-black font-semibold text-sm">Password</b>
            </label>
            <br />
            <input
              type="password"
              placeholder="Enter Password"
              name="Password"
              required
              className="my-2 px-2 content-center w-96 h-12 border-solid border-[0.15px] border-black text-black"
            />
            <br />
            <div className="clearfix">
              <button
                type="submit"
                className="mt-4 rounded-md my-2 px-2 w-96 h-12 text-white font-semibold bg-blue-700"
              >
                Log In
              </button>
              {/* <button
                type="button"
                className="mt-4 rounded-md my-2 px-2 w-96 h-12 text-white font-semibold bg-red-500"
              >
                Cancel
              </button> */}
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
