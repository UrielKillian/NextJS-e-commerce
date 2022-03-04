import { React, useState, useRef } from "react";
import Image from "next/image";

function Login() {
  const emailInputRef = useRef();
  const passwordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [open, setOpen] = useState(false);

  const [show, setShow] = useState(false);

  function switchAuthModeHandler() {
    setIsLogin((prevState) => !prevState);
  }

  async function submitHandler(event) {
    event.preventDefault();

    const enteredEmail = emailInputRef.current.value;
    const enteredPassword = passwordInputRef.current.value;

    if (isLogin) {
      signIn("credentials", {
        redirect: false,
        email: enteredEmail,
        password: enteredPassword,
      });
      setShow(true);
    }
  }

  return (
    <>
      {/* <ChangePassword open={open} setOpen={setOpen} /> */}
      <div className="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
        <div className="sm:mx-auto sm:w-full flex items-center text-center sm:max-w-md">
          <Image
            className="h-8 w-auto"
            src="/assets/logo.png"
            width={200}
            height={200}
            alt="Red Forense"
          />
          <div className="ml-3 font-Lora text-left text-xl text-indigo-900">
            Red Iberoamericana De Instituciones de
            <p className="font-bold font-Lora text-xl text-indigo-900">
              Medicina Legal y Ciencias Forenses
            </p>
          </div>
        </div>

        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-4 shadow-xl border border-gray-300 sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={submitHandler}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Correo Electrónico
                </label>
                <div className="mt-1">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    ref={emailInputRef}
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Contraseña
                </label>
                <div className="mt-1">
                  <input
                    id="password"
                    name="password"
                    ref={passwordInputRef}
                    type="password"
                    autoComplete="current-password"
                    required
                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                  />
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    id="remember-me"
                    name="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  />
                  <label
                    htmlFor="remember-me"
                    className="ml-2 block text-sm text-gray-900"
                  >
                    Recuérdame
                  </label>
                </div>

                <div className="text-sm">
                  <a
                    onClick={() => setOpen(true)}
                    className="font-medium text-red-2000 cursor-pointer hover:text-orange-500"
                  >
                    ¿Olvidaste tu contraseña?
                  </a>
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-2000 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-2000"
                >
                  Acceder
                </button>
              </div>
            </form>
            {/* <FailedNotification show={show} setShow={setShow} /> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default Login;
