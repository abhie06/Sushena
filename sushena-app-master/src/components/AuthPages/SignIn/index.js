import React, { useState } from "react";
import { useHistory } from "react-router-dom";

// Utils
import logError from "helpers/utils/logErrors";
import { validateEmail } from "helpers/utils/checkRegex";

// Redux
import { useDispatch } from "react-redux";
import { showToast } from "redux/toaster";

function SignInForm() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [userID, setUserID] = useState("");
  const [password, setPassword] = useState("");
  const [signingIn, setSigningIn] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [error, setError] = useState({ userID: "", password: "" });

  const onSignIn = async () => {
    if (userID !== "" && password !== "") {
      if (validateEmail(userID)) {
        setSigningIn(true);
        localStorage.setItem("sushenaUser", JSON.stringify({ name: "Admin" }));
        localStorage.setItem("sushenaToken", "tokenString");
        history.push({
          pathname: "/dashboard",
        });
        try {
          // let body = { email: userID, password: password };
          // const res = await signIn(body);
          // if (res.data?.data || res.data?.token) {
          //  localStorage.setItem("sushenaUser", JSON.stringify(res.data?.data));
          //    localStorage.setItem("sushenaToken", res.data?.token);
          //   history.push({
          //     pathname: "/dashboard",
          //   });
          //   dispatch(showToast({ message: "Sign In successfull!" }));
          // } else {
          //   setSigningIn(false);
          //   dispatch(showToast({ message: res.data?.message, type: "error" }));
          //   setPassword("");
          // }
        } catch (e) {
          logError("Sign In", e);
          dispatch(
            showToast({
              message: e?.response?.data?.message,
              type: "error",
            })
          );
        }
      } else {
        setError({ ...error, userID: "Enter valid User ID!" });
      }
    } else {
      setError({
        userID: "Enter your User ID!",
        password: "Enter your password!",
      });
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center  py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8">
          <div className="flex flex-col justify-center">
            <img
              src="/assets/logo/logoFull.svg"
              alt="logo"
              className="sm:mt-10 md:mt-15 "
            />
            <div className="mt-8  sm:w-full sm:max-w-md">
              <form className="">
                <div className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="text-sm font-raleway text-neutral-gray-800 font-semibold"
                    >
                      Email Address
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="text"
                        value={userID}
                        placeholder="Email Address"
                        required
                        className="input-style mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm rounded-md"
                        onChange={(e) => {
                          setUserID(e.target.value);
                        }}
                      />
                    </div>
                    {error?.userID !== "" && (
                      <p className="text-alert text-xs font-openSans flex flex-row items-center mt-1">
                        {error?.userID}
                      </p>
                    )}
                  </div>

                  <div className="mt-4">
                    <label
                      htmlFor="password"
                      className="text-sm font-raleway text-neutral-gray-800 font-semibold"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        value={password}
                        placeholder="Password"
                        required
                        className="input-style mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-gray-300 focus:border-gray-300 sm:text-sm rounded-md"
                        onChange={(e) => {
                          setPassword(e.target.value);
                        }}
                      />
                    </div>
                    {error?.password !== "" && (
                      <p className="text-alert text-xs font-openSans flex flex-row items-center mt-1">
                        {error?.password}
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  onClick={(e) => {
                    e.preventDefault();
                    onSignIn();
                  }}
                  className="bg-primary-pink-medium transition transform ease-in-out duration-150 hover:scale-105 mt-10 w-full flex justify-center py-1 px-4 border border-transparent rounded-md shadow-sm text-lg font-bold text-white  hover:green-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-transparent"
                >
                  Sign In
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignInForm;
