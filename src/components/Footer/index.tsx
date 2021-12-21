import { Box, Container, Link, Typography } from "@material-ui/core";
import { experimentalStyled } from "@material-ui/core/styles";

const FooterWrapper = experimentalStyled(Box)(
  ({ theme }) => `
        border-radius: 0;
        margin: ${theme.spacing(3)} 0;
`
);

function Footer() {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <Box
          py={3}
          display={{ xs: "block", md: "flex" }}
          alignItems="center"
          textAlign={{ xs: "center", md: "left" }}
          justifyContent="space-between"
        >
          <Box>
            <Typography variant="subtitle1">
              &copy; 2021 - MinhLee - Hosting service
            </Typography>
          </Box>
        </Box>
      </Container>
    </FooterWrapper>
  );
}

export default Footer;
