import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';
import UserProvider from './context/Provider.js';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <UserProvider>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen
            name="Primary"
            component={Primary}
            options={{
              headerShown: false, //options kullanımı önemli.dökümandan detaylı incele!
            }}
          />
          <Tab.Screen
            name="Secondary"
            component={Secondary}
            options={{
              headerShown: false,
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </UserProvider>
  );
};

export default App;
