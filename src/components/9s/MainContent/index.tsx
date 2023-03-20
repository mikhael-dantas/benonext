import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/reducers';
import { Tab9sEnum } from '../tabs9s';
import Dashboard9s from '../Dashboard';
import Dashboard11 from '../projects/dashboard1/1';
import Dashboard12 from '../projects/dashboard1/2';
import Dashboard13 from '../projects/dashboard1/3';


const MainContent9s: React.FC = () => {
  const currentTab = useSelector((state: RootState) => state.currentTab.currentTab);

  switch (currentTab.label) {
    case Tab9sEnum.home:
      return (<Dashboard9s/>);
    case Tab9sEnum.dashboard11:
      return (<Dashboard11/>);
    case Tab9sEnum.dashboard12:
      return (<Dashboard12/>);
    case Tab9sEnum.dashboard13:
      return (<Dashboard13/>);

    default:
      return (<Dashboard9s/>);
  }
};

export default MainContent9s;

