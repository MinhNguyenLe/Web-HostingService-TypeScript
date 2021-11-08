import { useRef } from "react";
import { Card, Grid, Container } from "@material-ui/core";

import axios, { AxiosResponse } from "axios";

import CardDomain from "../../../components/Domain/CardDomain";
import SearchAvailable from "../../../components/Domain/SearchAvailable";

import { useMutation, useQuery } from "@apollo/client";
import { DOMAINS } from "src/graphql/product";

import { useTranslation } from "react-i18next";

import { Link, useNavigate } from "react-router-dom";

import { RootState } from "src/redux/reducers";
import { actionCreators } from "src/redux";
import { bindActionCreators } from "redux";
import { useDispatch, useSelector } from "react-redux";

interface availDomain {
  data: {
    DomainInfo: Object;
  };
}

declare module "axios" {
  export interface AxiosRequestConfig {
    apiKey: string;
    domainName: string;
  }
}

const Domain = () => {
  const cartRedux = useSelector((state: RootState) => state.cart);
  const dispatch = useDispatch();
  const { cartDomain } = bindActionCreators(actionCreators, dispatch);

  const navigate = useNavigate();
  const {
    loading: loadDomain,
    error: errDomain,
    data: allDomain,
  } = useQuery(DOMAINS);

  if (loadDomain) console.log("loading domain");
  if (errDomain) {
    console.log(JSON.stringify(errDomain, null, 2));
  }

  const availDomainRef = useRef<HTMLInputElement>(null);

  const nameUrl = useRef<string>("");
  const dotRef = useRef<string>("");
  const available = useRef<boolean>(false);

  const chooseDot = (dot) => {
    dotRef.current = dot;
  };

  const checkAvailableDomain = (domain: string) => {
    axios
      .get<availDomain>(
        `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_euKgMtfT4h6beO1APHUGNrP1r7URW&domainName=${
          domain + dotRef.current
        }&credits=DA`
      )
      .then((res: AxiosResponse) => {
        console.log(res?.data?.DomainInfo);

        if (res?.data?.DomainInfo.domainAvailability === "AVAILABLE")
          available.current = true;
        else available.current = false;

        nameUrl.current = domain;
      })
      .catch();
  };
  return (
    <div>
      <SearchAvailable
        checkAvailableDomain={checkAvailableDomain}
        availDomainRef={availDomainRef}
      />
      <Grid
        container
        spacing={3}
        sx={{ paddingLeft: "24px", display: "flex", flexWrap: "wrap" }}
      >
        {allDomain?.domains ? (
          allDomain?.domains.map((item) => {
            return (
              <Card sx={{ margin: " 8px 16px 8px 0" }} key={item._id}>
                <CardDomain
                  chooseDot={chooseDot}
                  item={item}
                  image={item["images"][0]}
                  price={item?.product?.price}
                  information={item?.information}
                />
              </Card>
            );
          })
        ) : (
          <div></div>
        )}
      </Grid>
    </div>
  );
};

export default Domain;
