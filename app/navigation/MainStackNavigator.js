import { createStackNavigator } from '@react-navigation/stack'
import TaskScreen from '../screens/TaskScreen';
import ContentScreen from "../screens/ContentScreen";
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { navigationRef } from './NavigationService';

const Stack = createStackNavigator();


function RootStack() {
  return (
    <NavigationContainer ref={navigationRef}>
    <Stack.Navigator
    headerMode="none"
      initialRouteName="Task"
      screenOptions={{ gestureEnabled: false }}
    >
      <Stack.Screen
        name="Task"
        component={TaskScreen}
        options={{ title: 'My app' }}
      />
      <Stack.Screen
        name="Content"
        component={ContentScreen}
        initialParams={{ user: 'me' }}
      />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootStack;