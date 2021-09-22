import { useRef } from "react";
import { Card, Grid, Container } from "@material-ui/core";

import axios, { AxiosResponse } from "axios";

import CardDomain from "../../../components/Domain/CardDomain";
import SearchAvailable from "../../../components/Domain/SearchAvailable";

import { gql, useMutation, useQuery } from "@apollo/client";

import { useTranslation } from "react-i18next";
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

  const checkAvailableDomain = (domain: string) => {
    axios
      .get<availDomain>(
        `https://domain-availability.whoisxmlapi.com/api/v1?apiKey=at_euKgMtfT4h6beO1APHUGNrP1r7URW&domainName=${domain}&credits=DA`
      )
      .then((res: AxiosResponse) => {
        console.log(res?.data?.DomainInfo);
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

const DOMAINS = gql`
  query domains {
    domains {
      _id
      dot
      information
      images
      product {
        _id
        months
        price
      }
    }
  }
`;

export default Domain;
