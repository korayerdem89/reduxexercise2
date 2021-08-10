import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Primary" component={Primary} />
        {/* options={{
           headerShown:false,  //options kullanımı önemli.dökümandan detaylı incele!
         }} */}
        <Tab.Screen name="Secondary" component={Secondary} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
