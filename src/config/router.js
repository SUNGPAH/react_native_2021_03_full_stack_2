import React from 'react';
import {
  Scene,
  Router,
  ActionConst,
  Stack,
} from 'react-native-router-flux';

import Splash from '../screens/Splash';
import Intro from '../screens/Intro';
import Login from '../screens/Login';
import Signup from '../screens/Signup';
import Daily from '../screens/Daily';
import PastDaily from '../screens/PastDaily';
import CalendarScreen from '../screens/CalendarScreen';
import UserSetting from '../screens/UserSetting';

import CustomNavBar from '../components/lib/CustomNavBar';
import CustomTabBar from '../components/lib/CustomTabBar';

const RouterComponent = () => {
  return (
    <Router>
      <Stack key="root">
        <Scene key="splash" hideNavBar component={Splash} 
				gesturesEnabled={false} panHandlers={null}/>
        <Scene key="intro" hideNavBar component={Intro} 
				gesturesEnabled={false} panHandlers={null}/>
        <Scene key="login" hideNavBar component={Login} 
				gesturesEnabled={false} panHandlers={null}/>				
        <Scene key="signup" hideNavBar component={Signup} />
        <Scene key="list" hideNavBar
          gesturesEnabled={false}>
          <Scene
            gesturesEnabled={false}
            type={ActionConst.RESET}
            key="newsList"
            tabs={true}
            hideNavBar={false}
            headerMode='none'
            navBar={CustomNavBar}
            activeBackgroundColor={"white"}
            tabBarComponent={CustomTabBar}
            wrap={false}
          >
            <Scene key="daily" hideNavBar component={Daily}/>            
            <Scene key="calendar" hideNavBar component={CalendarScreen}/>
            <Scene key="userSetting" hideNavBar component={UserSetting}/>            
          </Scene>
        </Scene>
        
        <Scene key="pastDaily" hideNavBar component={PastDaily}/>
        <Scene key="userSetting" hideNavBar component={UserSetting}/>
      </Stack>
    </Router>
  );
};

export default RouterComponent;