import React from "react";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";

import CardForm from "./CardForm";
import IbanForm from "./IbanForm";
import IdealBankForm from "./IdealBankForm";
import "./styles.css";

const stripePromise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentForm = () => {
  return (
    <div>
      <Elements stripe={stripePromise}>
        <CardForm />
        <IdealBankForm />
        <IbanForm />
      </Elements>
    </div>
  );
};
export default PaymentForm;
