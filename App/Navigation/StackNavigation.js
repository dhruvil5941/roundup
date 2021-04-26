import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Userfinancesquestion from '../Screens/UserFinancesQuestion';
import Conservative from '../Screens/Portfolio/Conservative';
import Landing from '../Screens/LandingScreen';
import OnboardingScreenOne from '../Screens/OnboardingScreen/OnboardingScreenOne';
import OnboardingScreenTwo from '../Screens/OnboardingScreen/OnboardingScreenTwo';
import NavigationTab from './TabNavigation';

const Stack = createStackNavigator();

function NavigationStack(props) {
  return (
    <NavigationContainer independent={true} initialRouteName="Landing">
      <Stack.Navigator
        initialRouteName="Landing"
        screenOptions={{
          headerTitleAlign: 'center',
          headerStyle: {
            backgroundColor: '#1FAD9E',
          },
          headerBackTitleVisible: false,
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 23,
          },
        }}>
        <Stack.Screen
          options={{title: 'RoundUp', gestureEnabled: false}}
          name="Conservative"
          component={Conservative}
        />
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
        <Stack.Screen
          options={{headerShown: false, gestureEnabled: false}}
          name="Home"
          component={NavigationTab}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
