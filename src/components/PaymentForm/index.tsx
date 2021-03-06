import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CardForm from "./CardForm";
import IbanForm from "./IbanForm";
import IdealBankForm from "./IdealBankForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentForm = ({ submitPayment }) => {
  return (
    <div style={{marginLeft:"108px",marginTop:"20px"}}>
      <Elements stripe={stripePromise}>
        <CardForm submitPayment={submitPayment} />
        {/* <IdealBankForm />
        <IbanForm /> */}
      </Elements>
    </div>
  );
};
export default PaymentForm;
