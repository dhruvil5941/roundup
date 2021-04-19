import React from 'react';
import { Platform } from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Userfinancesquestion from '../Screens/UserFinancesQuestion';
import Conservative from '../Screens/Portfolio/Conservative';
import Home from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcons from '../Components/TabBarIcons';
import Images from '../theme/Images';
import Landing from '../Screens/LandingScreen';
import OnboardingScreenOne from '../Screens/OnboardingScreen/OnboardingScreenOne';
import OnboardingScreenTwo from '../Screens/OnboardingScreen/OnboardingScreenTwo';
import SettingScreen from '../Screens/SettingScreen';
import ResourcesScreen from '../Screens/ResourcesScreen';
import ContributionsScreen from '../Screens/ContributionScreen';
import TransactionsScreen from '../Screens/TransactionsScreen';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const SettingsStack = () => {
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
        name={'SettingScreen'}
        component={SettingScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

const ContributionsStack = () => {
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
        name={'ContributionsScreen'}
        component={ContributionsScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

const TransactionsStack = () => {
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
        name={'TransactionsScreen'}
        component={TransactionsScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

const ResourcesStack = () => {
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
        name={'ResourcesScreen'}
        component={ResourcesScreen}
        options={{title: 'RoundUp'}}
      />
    </Stack.Navigator>
  );
};

const HomeStack = () => {
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

const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        visible: true,
        activeBackgroundColor: '#76d0e7a1',
        style: {
          height: Platform.OS === 'ios' ? 85 : 60,
          paddingLeft: 8,
          paddingTop: 1,
          marginBottom:0,
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          borderTopColor: '#FFF',
          elevation: 0,
        },
        tabStyle: {borderRadius: 12},
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.Tab_Home} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Transactions"
        component={TransactionsStack}
        options={{
          tabBarLabel: 'Transactions',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.Transactions} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Contributions"
        component={ContributionsStack}
        options={{
          tabBarLabel: 'Contributions',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.Contributions} focused={focused} />
          ),
        }}
      />
      <Tab.Screen
        name="Settings"
        component={SettingsStack}
        options={{
          tabBarLabel: 'Settings',
          tabBarIcon: ({focused}) => <TabBarIcons icon={Images.Setting} />,
        }}
      />
      <Tab.Screen
        name="Resources"
        component={ResourcesStack}
        options={{
          tabBarLabel: 'Resources',
          tabBarIcon: ({focused}) => (
            <TabBarIcons icon={Images.Resources} focused={focused} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

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
          component={TabNavigation}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NavigationStack;
