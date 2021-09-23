import { useState, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Container, Tabs, Tab, Grid } from "@material-ui/core";
import Footer from "src/components/Footer";
import { experimentalStyled } from "@material-ui/core/styles";

import Domain from "./Domain";
import Hosting from "./Hosting";
import VPS from "./VPS";
import Server from "./Server";

import { useTranslation } from "react-i18next";

const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function UserProduct() {
  const { t } = useTranslation(["addproduct"]);

  const [currentTab, setCurrentTab] = useState<string>("domain");

  const tabs = [
    { value: "domain", label: "Domain" },
    { value: "hosting", label: "Hosting" },
    { value: "vps", label: "Cloud VPS" },
    { value: "server", label: "Server" },
  ];

  const handleTabsChange = (event: ChangeEvent<{}>, value: string): void => {
    setCurrentTab(value);
  };

  return (
    <>
      <Helmet>
        <title>User Settings - Applications</title>
      </Helmet>
      <PageTitleWrapper>
        <Header />
      </PageTitleWrapper>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
          spacing={3}
        >
          <Grid item xs={12}>
            <TabsWrapper
              onChange={handleTabsChange}
              value={currentTab}
              variant="scrollable"
              scrollButtons="auto"
              textColor="primary"
              indicatorColor="primary"
            >
              {tabs.map((tab) => (
                <Tab key={tab.value} label={tab.label} value={tab.value} />
              ))}
            </TabsWrapper>
          </Grid>
          <Grid item xs={12}>
            {currentTab === "domain" && <Domain />}
            {currentTab === "hosting" && <Hosting />}
            {currentTab === "vps" && <VPS />}
            {currentTab === "server" && <Server />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default UserProduct;
