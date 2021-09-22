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

const SearchAvailable = ({ checkAvailableDomain, availDomainRef }) => {
  return (
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
              onClick={() => checkAvailableDomain(availDomainRef.current.value)}
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
  );
};

export default SearchAvailable;
