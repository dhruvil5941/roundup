import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import OnboardingScreenTwo from '../screens/OnboardingScreen/OnboardingScreenTwo';
import OnboardingScreenOne from '../screens/OnboardingScreen/OnboardingScreenOne';
import Landing from '../screens/LandingScreen';
import Userfinancesquestion from '../screens/UserFinancesQuestion';

const Stack = createStackNavigator();

function NavigatorStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTitleAlign: 'center',
        headerStyle: {
          backgroundColor: '#1FAD9E',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
          fontSize: 23,
        },
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name="Landing"
        component={Landing}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingScreenOne"
        component={OnboardingScreenOne}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="OnboardingScreenTwo"
        component={OnboardingScreenTwo}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Userfinancesquestion"
        component={Userfinancesquestion}
        options={{
          title: 'RoundUp',
        }}
      />
    </Stack.Navigator>
  );
}
export default NavigatorStack;