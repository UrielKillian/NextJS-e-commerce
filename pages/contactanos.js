import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import { ChevronDownIcon, UserIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Person from "../assets/images/Dummy/Person.jpg";
import LandingLayout from "../components/Layout/LandingLayout";

const contactDetails = [
  {
    name: "Miguel Angel",
    email: "support@example.com",
    telephone: "+1 (555) 123-4567",
  },
];
const locations = [
  {
    city: "Perú",
    address: ["Lima, PE", "Lima, PE"],
  },
];
const faqs = [
  {
    id: 1,
    question: "¿Es seguro el servicio de despacho?",
    answer: "Claro, tenemos clientes que nos respaldan.",
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function ContactUs() {
  return (
    <div>
      <LandingLayout>
        <main>
          {/* Side-by-side grid */}
          <div className="bg-white">
            <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
              <div className="border grid grid-cols-2 xs:grid-cols-1 gap-10">
                <div className=" max-h-full items-center text-center bg-palette-2 border border-transparent rounded-md shadow-lg ">
                    <div className="-mt-0.5 bg-palette-4 rounded-b-full mb-3">
                        <h1 className="font-extrabold text-2xl">Contacto</h1>   
                    </div>
                    <div className="max-h-full text-center">
                      <Image
                        className="rounded-full"
                          height={400}
                          width={350}
                          alt="photo"
                          src={Person}
                        />
                    </div>
                    <div className="text-black">
                      <div className="border border-transparent rounded-md items-center shadow-md  px-3 py-2 text-center bg-white">
                          <UserIcon className=" h-4 w-4" />
                            <span className="">Miguel Angel</span>
                          </div>
                          <div className="border border-transparent rounded-md items-center shadow-md inline-flex px-3 py-2 text-center bg-white">
                          <UserIcon className=" h-4 w-4" />
                            <span className="">Miguel Angel</span>
                          </div>
                          <div className="border border-transparent rounded-md items-center shadow-md inline-flex px-3 py-2 text-center bg-white">
                          <UserIcon className=" h-4 w-4" />
                            <span className="">Miguel Angel</span>
                          </div>
                    </div>
                </div>
                <div className="border">Column 2</div>
              </div>
              <div className="divide-y divide-warm-gray-200">
                <section
                  className="lg:grid lg:grid-cols-3 lg:gap-8"
                  aria-labelledby="contact-heading"
                >
                  <h2
                    id="contact-heading"
                    className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                  >
                    Contacto
                  </h2>
                  <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                    {contactDetails.map((item) => (
                      <div key={item.name}>
                        <h3 className="text-lg font-medium text-warm-gray-900">
                          {item.name}
                        </h3>
                        <dl className="mt-2 text-base text-warm-gray-500">
                          <div>
                            <dt className="sr-only">Email</dt>
                            <dd>{item.email}</dd>
                          </div>
                          <div className="mt-1">
                            <dt className="sr-only">Phone number</dt>
                            <dd>{item.telephone}</dd>
                          </div>
                        </dl>
                      </div>
                    ))}
                  </div>
                </section>
                <section
                  className="mt-16 pt-16 lg:grid lg:grid-cols-3 lg:gap-8"
                  aria-labelledby="location-heading"
                >
                  <h2
                    id="location-heading"
                    className="text-2xl font-extrabold text-warm-gray-900 sm:text-3xl"
                  >
                    Localidades
                  </h2>
                  <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-12 lg:mt-0 lg:col-span-2">
                    {locations.map((location) => (
                      <div key={location.city}>
                        <h3 className="text-lg font-medium text-warm-gray-900">
                          {location.city}
                        </h3>
                        <div className="mt-2 text-base text-warm-gray-500 space-y-1">
                          {location.address.map((line) => (
                            <p key={line}>{line}</p>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </section>
              </div>
            </div>
          </div>

          {/* FAQ */}
          <div className="bg-gray-50">
            <div className="max-w-7xl mx-auto py-12 px-4 sm:py-16 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto divide-y-2 divide-gray-200">
                <h2 className="text-center text-3xl font-extrabold text-gray-900 sm:text-4xl">
                  Preguntas Frecuentes
                </h2>
                <dl className="mt-6 space-y-6 divide-y divide-gray-200">
                  {faqs.map((faq) => (
                    <Disclosure as="div" key={faq.question} className="pt-6">
                      {({ open }) => (
                        <>
                          <dt className="text-lg">
                            <Disclosure.Button className="text-left w-full flex justify-between items-start text-gray-400">
                              <span className="font-medium text-gray-900">
                                {faq.question}
                              </span>
                              <span className="ml-6 h-7 flex items-center">
                                <ChevronDownIcon
                                  className={classNames(
                                    open ? "-rotate-180" : "rotate-0",
                                    "h-6 w-6 transform"
                                  )}
                                  aria-hidden="true"
                                />
                              </span>
                            </Disclosure.Button>
                          </dt>
                          <Disclosure.Panel as="dd" className="mt-2 pr-12">
                            <p className="text-base text-gray-500">
                              {faq.answer}
                            </p>
                          </Disclosure.Panel>
                        </>
                      )}
                    </Disclosure>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </main>
      </LandingLayout>
    </div>
  );
}

export default ContactUs;
