import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BlogDetails from '../Screens/WelcomeScreen/BlogDetails';
import Blogone from '../Screens/WelcomeScreen/Blogone';
import createaccount from '../Screens/WelcomeScreen/createaccount';
import Userfinancesquestion from '../Screens/UserFinancesQuestion';
import Conservative from '../Screens/Portfolio/Conservative';
import Risky from '../Screens/Portfolio/Risky';
import Home from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcons from '../Components/TabBarIcons';
import Images from '../theme/Images';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = params => {
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
      }}>
      <Stack.Screen
        name={'Home'}
        component={Home}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

const welcomeStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="createaccount"
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
      }}>
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name="Risky"
        component={Risky}
      />
      <Stack.Screen
        options={{title: 'RoundUp', gestureEnabled: false}}
        name={'Conservative'}
        component={Conservative}
      />
      <Stack.Screen
        options={{title: 'RoundUp', gestureEnabled: false}}
        name={'Userfinancesquestion'}
        component={Userfinancesquestion}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name="createaccount"
        component={createaccount}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name="Blogone"
        component={Blogone}
      />
      <Stack.Screen
        options={{headerShown: false, gestureEnabled: false}}
        name="BlogDetails"
        component={BlogDetails}
      />
    </Stack.Navigator>
  );
};

function NavigationStack(props) {
  return (
    <NavigationContainer independent={true} initialRouteName="welcomeStack">
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: '#ab1f1f',
          visible: false,
        }}>
        <Tab.Screen
          name="welcomeStack"
          component={welcomeStack}
          options={{
            tabBarVisible: false,
            tabBarIcon: ({focused}) => (
              <TabBarIcons icon={Images.Onboarding} focused={focused} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={HomeStack}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({focused}) => (
              <TabBarIcons icon={Images.Onboarding} focused={focused} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
