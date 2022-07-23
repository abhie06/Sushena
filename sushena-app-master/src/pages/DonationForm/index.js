import PersonalForm from "components/DonationForm/PersonalForm";
import RangeForm from "components/DonationForm/RangeForm";
import React, { useState, useEffect } from "react";

function DonationForm() {
  const [step, setStep] = useState(1);
  // Describe all the form fields as states here and pass the variables and their setstates to the component and there change the variable's values according to what the user enters

  const onDonate = async () => {
    // This is the function where the post API integration will be
  };

  return (
    <div>
      <h1 className="font-raleway font-bold text-neutral-gray-700 text-5xl">
        Donation Form
      </h1>
      <div className="py-5 md:py-10 px-4 md:pl-20">
        <div className="">
          <h1 className="font-roboto font-normal text-neutral-gray-800 text-xl">
            Preterm Baby
          </h1>
          <p className="font-roboto mt-2 font-normal text-neutral-gray-500 text-base">
            A human milk bank, breast milk bank or lactarium is a service that
            collects, screens, processes, and dispenses by prescription human
            milk donated by nursing mothers who are not biologically related to
            the recipient infant (Usually preterm babies).A human milk bank,
            breast milk bank or lactarium is a service that collects, screens,
            processes, and dispenses by prescription human milk donated by
            nursing mothers who are not biologically related to the recipient
            infant (Usually preterm babies).
          </p>
        </div>

        <>{step === 1 ? <PersonalForm /> : <RangeForm />}</>

        <div className="flex flex-row items-center justify-end">
          <button
            onClick={() => {
              if (step == 1) {
                setStep(2);
              } else {
                onDonate();
              }
            }}
            className="transition transform ease-in-out duration-150 hover:scale-105 inline-flex font-roboto bg-primary-pink-medium items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            {step === 1 ? "Next Page" : "Donate Now"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default DonationForm;
