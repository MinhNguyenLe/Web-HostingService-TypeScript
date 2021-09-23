import PaymentForm from "src/components/PaymentForm";
import { BUY_ALL } from "src/graphql/userProduct";
import { useMutation, useQuery } from "@apollo/client";

import { RootState } from "src/redux/reducers";
import { useSelector } from "react-redux";

const Payment = () => {
  const cartRedux = useSelector((state: RootState) => state.cart);
  const buyerRedux = useSelector((state: RootState) => state.user);

  const [buy, { data, loading, error }] = useMutation(BUY_ALL, {
    update(proxy, result) {
      let data = result?.data?.buyAllProduct;
      console.log(data);
    },
    variables: {
      user: buyerRedux.user.idUser,
      domain: [
        {
          domain: "614c452688d1eb314c7f8311",
          nameUrl: "test",
        },
      ],
      hosting: [{ hosting: "614c450b88d1eb314c7f8306" }],
    },
  });
  if (loading) console.log("loading");
  if (error) {
    console.log(JSON.stringify(error, null, 2));
  }

  const submitPayment = (resPayment) => {
    if (resPayment.status === "succeeded") {
      buy();
    }
  };
  return (
    <div>
      <PaymentForm submitPayment={submitPayment} />
    </div>
  );
};

export default Payment;
