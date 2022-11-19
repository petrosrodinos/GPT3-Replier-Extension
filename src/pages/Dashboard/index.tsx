import { Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import { FC } from "react";
import Account from "../../components/DashboardComponents/Account";
import AddReply from "../../components/DashboardComponents/AddReply";
import AISettings from "../../components/DashboardComponents/AISettings";
import SavedReplies from "../../components/DashboardComponents/SavedReplies";
import "./style.css";

const Dashboard: FC = () => {
  return (
    <div className="dashboard-container">
      <Tabs className="tab-container" variant="soft-rounded" colorScheme="pink">
        <TabList className="tab-list_container">
          <Tab>Saved Replies</Tab>
          <Tab>Add Reply</Tab>
          <Tab>AI Settings</Tab>
          <Tab>Account</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SavedReplies />
          </TabPanel>
          <TabPanel>
            <AddReply />
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
