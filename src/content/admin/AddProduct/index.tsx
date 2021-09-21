import { useState, ChangeEvent } from "react";
import { Helmet } from "react-helmet-async";
import Header from "./Header";
import PageTitleWrapper from "src/components/PageTitleWrapper";
import { Container, Tabs, Tab, Grid } from "@material-ui/core";
import Footer from "src/components/Footer";
import { experimentalStyled } from "@material-ui/core/styles";

import AddDomain from "./AddDomain";
import AddHosting from "./AddHosting";
import AddVPS from "./AddVPS";
import AddServer from "./AddServer";

const TabsWrapper = experimentalStyled(Tabs)(
  () => `
    .MuiTabs-scrollableX {
      overflow-x: auto !important;
    }
`
);

function AddProduct() {
  const [currentTab, setCurrentTab] = useState<string>("activity");

  const tabs = [
    { value: "activity", label: "Activity" },
    { value: "edit_profile", label: "Edit Profile" },
    { value: "notifications", label: "Notifications" },
    { value: "security", label: "Passwords/Security" },
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
            {currentTab === "activity" && <AddDomain />}
            {currentTab === "edit_profile" && <AddHosting />}
            {currentTab === "notifications" && <AddVPS />}
            {currentTab === "security" && <AddServer />}
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </>
  );
}

export default AddProduct;
