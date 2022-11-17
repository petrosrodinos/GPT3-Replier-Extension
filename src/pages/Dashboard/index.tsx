import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FC } from "react";
import Account from "../../components/DashboardComponents/Account";
import AddReview from "../../components/DashboardComponents/AddReview";
import AISettings from "../../components/DashboardComponents/AISettings";
import SavedReviews from "../../components/DashboardComponents/SavedReviews";
import "./style.css";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Tabs variant="soft-rounded" colorScheme="pink">
        <TabList>
          <Tab>Saved Replies</Tab>
          <Tab>Add Reply</Tab>
          <Tab>AI Settings</Tab>
          <Tab>Account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SavedReviews />
          </TabPanel>
          <TabPanel>
            <AddReview />
          </TabPanel>
          <TabPanel>
            <AISettings />
          </TabPanel>
          <TabPanel>
            <Account />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </div>
  );
};

export default Dashboard;
