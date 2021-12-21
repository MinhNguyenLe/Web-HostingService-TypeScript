import React, { useEffect, useMemo, useState } from "react";
import { useStripe, useElements, CardElement } from "@stripe/react-stripe-js";

import useResponsiveFontSize from "../useResponsiveFontSize";
import { useTranslation } from "react-i18next";
import DialogFail from "src/components/Dialog/DialogFail";

const useOptions = () => {
  const fontSize = useResponsiveFontSize();
  const options = useMemo(
    () => ({
      style: {
        base: {
          fontSize,
          color: "#424770",
          letterSpacing: "0.025em",
          fontFamily: "Source Code Pro, monospace",
          "::placeholder": {
            color: "#aab7c4",
          },
        },
        invalid: {
          color: "#9e2146",
        },
      },
    }),
    [fontSize]
  );

  return options;
};

const CardForm = ({ submitPayment }) => {
  const { t } = useTranslation(["cart"]);
  const [open, setOpen] = useState(false);
  const stripe = useStripe();
  const elements = useElements();
  const options = useOptions();

  const [succeeded, setSucceeded] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [processing, setProcessing] = useState<boolean>();
  const [disabled, setDisabled] = useState<boolean>(true);
  const [clientSecret, setClientSecret] = useState<string>("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    window
      .fetch(" http://localhost:4444/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
      })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();

    setProcessing(true);
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
      },
    });
    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
      console.log(payload.error.message);
    } else {
      console.log(payload.paymentIntent);

      submitPayment(payload.paymentIntent);

      setError(null);
      setProcessing(false);
      setSucceeded(true);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label className={"label-payment"}>
      {t("7")}
        <CardElement
          options={options}
          onChange={(event) => {
            setDisabled(event.empty);
            setError(event.error ? event.error.message : "");
            setOpen(true)
          }}
        />
      </label>
      <button className={"button-payment"} type="submit" disabled={!stripe}>
      {t("8")}
      </button>
      {error && <DialogFail open={open} setOpen={setOpen} mess={error} />}
      {/* <p style={succeeded ? { display: "block" } : { display: "none" }}>
      {t("9")}
      </p> */}
    </form>
  );
};

export default CardForm;
