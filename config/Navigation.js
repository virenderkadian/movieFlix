import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NowPlaying from '../screens/NowPlaying';
import TopRated from '../screens/TopRated';
import { Ionicons } from '@expo/vector-icons'; 
const Tab = createBottomTabNavigator();


export default () => {
return(
    <MainStack.Navigator>
      <MainStack.Screen
      name="Navigation"
      component={Navigation}
      options={{ headerShown: false }}
    />
    <MainStack.Screen
      name="Details"
      component={Details}
      gestureDirection="Horizontal"
      options={{gestureDirection:"horizontal"}}
    />
    </MainStack.Navigator>
    
    
)
}