import React, { Component } from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'; 
import { createNativeStackNavigator ,getFocusedRouteNameFromRoute} from "@react-navigation/native-stack";
import Details from './screens/Details'
import TopRated from './screens/TopRated';
import Navigation from './config/Navigation';
import NowPlaying from './screens/NowPlaying';

const Tab = createBottomTabNavigator();
const MainStack = createNativeStackNavigator();

const NPStack = createNativeStackNavigator();

function NowPlayingStack() {
  return (
    <NPStack.Navigator >
      <NPStack.Screen options={{headerShown:false}} name="NowPlayingMain" component={NowPlaying} />
      <NPStack.Screen options={{title:"",headerStyle:{backgroundColor:"#bf9f3f"}}} name="Details" component={Details} />
    </NPStack.Navigator>
  );
}

const TRStack = createNativeStackNavigator();

function TopRatedStack() {
  return (
    <TRStack.Navigator>
      <TRStack.Screen options={{headerShown:false}} name="TopRatedMain" component={TopRated} />
      <TRStack.Screen options={{title:"",headerStyle:{backgroundColor:"#bf9f3f"}}} name="Details" component={Details} />
    </TRStack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator 
      screenOptions={({ route }) => ({
        tabBarHideOnKeyboard: true,
        tabBarStyle:{backgroundColor:"#bf9f3f"},
        title:route.name==="NowPlaying"? "Now Playing":"Top Rated",
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === 'NowPlaying') {
            iconName = focused
              ? 'film'
              : 'film-outline';
          } else if (route.name === 'TopRated') {
            iconName = focused ? 'star' : 'star-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'black',
        tabBarInactiveTintColor: 'gray',
      })}
    >
    <Tab.Screen  options={{headerShown:false}} name="NowPlaying" component={NowPlayingStack} />
    <Tab.Screen options={{headerShown:false}} name="TopRated" component={TopRatedStack} />
    </Tab.Navigator>
    </NavigationContainer>
  );
}
