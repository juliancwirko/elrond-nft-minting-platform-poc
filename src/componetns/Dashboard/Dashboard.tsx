import { useState } from 'react';
import { Pane, Tablist, Tab } from 'evergreen-ui';
import MainLayout from '../MainLayout';
import FeedbackBox from './FeedbackBox';
import AccountTab from './AccountTab';
import CreateNftTab from './CreateNftTab';
import NftListTab from './NftListTab';

const tabs = ['Account', 'Create NFT', "Your NFT's"];

const Dashboard: React.FC = () => {
  const [selectedIndex, setTabSelectedIndex] = useState(0);

  return (
    <MainLayout>
      <FeedbackBox setTabSelectedIndex={setTabSelectedIndex} />
      <Pane>
        <Tablist marginBottom={20} marginTop={50}>
          {tabs.map((tab, index) => (
            <Tab
              key={tab}
              id={tab}
              appearance="primary"
              onSelect={() => setTabSelectedIndex(index)}
              isSelected={index === selectedIndex}
              className="no-focus"
            >
              {tab}
            </Tab>
          ))}
        </Tablist>
        <Pane flex="1">
          {selectedIndex === 0 && <AccountTab />}
          {selectedIndex === 1 && <CreateNftTab />}
          {selectedIndex === 2 && <NftListTab />}
        </Pane>
      </Pane>
    </MainLayout>
  );
};

export default Dashboard;
