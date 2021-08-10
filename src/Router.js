import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import {Text} from 'react-native';

import Primary from './pages/Primary';
import Secondary from './pages/Secondary';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Primary" component={Primary} />
        {/* options={{
           headerShown:false,  //options kullanımı önemli.dökümandan detaylı incele!
         }} */}
        <Stack.Screen name="Secondary" component={Secondary} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
