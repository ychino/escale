import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import VisitsList from './components/VisitsList';
import ScalesList from './components/ScalesList';
import ScaleQuestion from './components/ScaleQuestion';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="main">
        <Scene key="visitList" component={VisitsList} title="Visits" initial />
        <Scene key="scalesList" component={ScalesList} title="Scales" />
        <Scene key="scaleQuestion" component={ScaleQuestion} title="Questions" />
      </Scene>
    </Router>
  );
};

export default RouterComponent;