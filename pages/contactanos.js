import React from "react";
import { Fragment } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Disclosure } from "@headlessui/react";
import {
  ChevronDownIcon,
  UserIcon,
  MailIcon,
  PhoneIcon,
  OfficeBuildingIcon,
} from "@heroicons/react/outline";
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
    <LandingLayout>
      <main className="bg-palette-4">
        {/* Side-by-side grid */}
        <div className="">
          <div className="max-w-md mx-auto py-24 px-4 sm:max-w-3xl sm:py-32 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className=" grid md:grid-cols-2 lg:grid-cols-2 xs:grid-cols-1 gap-10">
              <div className=" max-h-full items-center text-center bg-palette-2  rounded-md shadow-lg ">
                <div className=" bg-palette-1 rounded-b-full mb-3">
                  <h1 className="font-extrabold text-white text-2xl">
                    Contacto
                  </h1>
                </div>
                <div className="max-h-full m-5 text-center">
                  <Image
                    className="rounded-full"
                    height={400}
                    width={400}
                    alt="photo"
                    src={Person}
                  />
                </div>
                <div className="text-black space-y-2 my-3">
                  <div>
                    <div className=" inline-flex space-x-2 border border-transparent rounded-md items-center shadow-md  px-3 py-2 text-center bg-white">
                      <UserIcon className="flex h-4 w-4" />
                      <span className="">Miguel Angel</span>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex space-x-2 border border-transparent rounded-md items-center shadow-md  px-3 py-2 text-center bg-white">
                      <MailIcon className=" h-4 w-4" />
                      <span className="">support@example.com</span>
                    </div>
                  </div>
                  <div>
                    <div className="inline-flex space-x-2 border border-transparent rounded-md items-center shadow-md  px-3 py-2 text-center bg-white">
                      <PhoneIcon className=" h-4 w-4" />
                      <span className="">+51 999 999 999</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className=" bg-palette-2 rounded-md">
                <div className="bg-palette-1 text-center rounded-b-full">
                  <span className="font-extrabold text-white text-2xl">
                    Ubicación
                  </span>
                </div>
                <div className="m-4">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55196.92503224134!2d-76.93638033676868!3d-12.157331375927303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b8d2b46948ad%3A0x6f9d47b87df6dcff!2sCementerio%20Nueva%20Esperanza!5e0!3m2!1ses-419!2spe!4v1646525698724!5m2!1ses-419!2spe"
                    width="100%"
                    height="350"
                    loading="lazy"
                  ></iframe>
                </div>
                <div className="py-1.5 text-center items-center bg-palette-4 rounded-md m-4">
                  <div className="bg-white m-4 rounded-md border border-transparent shadow-sm">
                    <p className="font-extrabold text-xl">Localidad</p>
                  </div>
                  <div className="bg-white m-4 shadow-sm rounded-md border border-transparent">
                    <div className="inline-flex items-center">
                      <OfficeBuildingIcon className="h-4 mr-1" />
                      <p>Lima, PE</p>
                    </div>
                  </div>
                </div>
              </div>
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
  );
}

export default ContactUs;
