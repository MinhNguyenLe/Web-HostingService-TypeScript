import { useRef } from "react";
import {
  TextField,
  InputAdornment,
  Button,
  OutlinedInput,
  Container,
} from "@material-ui/core";
import SearchTwoToneIcon from "@material-ui/icons/SearchTwoTone";
import { experimentalStyled } from "@material-ui/core/styles";

import axios, { AxiosResponse } from "axios";

import CardDomain from "../../../components/CardDomain";
import HostingItem from "../../../components/HostingItem";

const ButtonSearch = experimentalStyled(Button)(
  ({ theme }) => `
    margin-right: -${theme.spacing(1)};
`
);

const OutlinedInputWrapper = experimentalStyled(OutlinedInput)(
  ({ theme }) => `
  background-color: ${theme.colors.alpha.white[100]};
`
);

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
      <HostingItem />
      <Container maxWidth="sm" sx={{ textAlign: "center", mt: 3, p: 4 }}>
        <OutlinedInputWrapper
          fullWidth
          inputRef={availDomainRef}
          onKeyPress={(e) => {
            if (e.key === "Enter")
              checkAvailableDomain(availDomainRef.current.value);
          }}
          type="text"
          placeholder="Search terms here..."
          endAdornment={
            <InputAdornment position="end">
              <ButtonSearch
                variant="contained"
                size="small"
                onClick={() =>
                  checkAvailableDomain(availDomainRef.current.value)
                }
              >
                Search
              </ButtonSearch>
            </InputAdornment>
          }
          startAdornment={
            <InputAdornment position="start">
              <SearchTwoToneIcon />
            </InputAdornment>
          }
        />
      </Container>
    </div>
  );
};

export default Domain;
