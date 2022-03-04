import DashboardLayout from "../../../components/Layout/DashboardLayout";
import { useRef, useState } from "react";
import { MailIcon } from "@heroicons/react/solid";
export default function Create() {
  const nameInputRef = useRef();
  const quantityInputRef = useRef();
  const priceInputRef = useRef();

  function submitFormHandler(event) {
    event.preventDefault();

    const enteredName = nameInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;

    const reqBody = {
      name: enteredName,
      quantity: enteredQuantity,
      price: enteredPrice,
    };

    fetch("/api/feedback", {
      method: "POST",
      body: JSON.stringify({
        reqBody,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => console.log(data));
  }

  return (
    <DashboardLayout>
      <div>
        {/* Title Product Form */}
        <div className="flex flex-col items-center justify-center p-4">
          <h1 className="text-2xl font-bold">Agregar Producto</h1>
          <p className="text-gray-600">
            Complete siguientes campos para agregar el producto.
          </p>
        </div>
        {/* Title Product Form */}
        {/* Add Product Form */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <form className="space-y-6 sm:space-y-5" onSubmit={submitFormHandler}>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Nombre del producto
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  ref={nameInputRef}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="region"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Precio
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="region"
                  id="region"
                  ref={priceInputRef}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <div className="sm:grid sm:grid-cols-3 sm:gap-4 sm:items-start sm:border-t sm:border-gray-200 sm:pt-5">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium text-gray-700 sm:mt-px sm:pt-2"
              >
                Cantidad
              </label>
              <div className="mt-1 sm:mt-0 sm:col-span-2">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  ref={quantityInputRef}
                  className="max-w-lg block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:max-w-xs sm:text-sm border-gray-300 rounded-md"
                />
              </div>
            </div>

            <button
              type="submit"
              className="border rounded-md p-2 px-3 py-2 border-transparent items-center bg-orange-400 text-white shadow-sm hover:bg-orange-600 inline-flex"
            >
              Agregar Producto
              <MailIcon className="ml-2 -mr-0.5 h-4 w-4" aria-hidden="true" />
            </button>
          </form>
        </div>
        {/* Add Product Form */}
      </div>
    </DashboardLayout>
  );
}
