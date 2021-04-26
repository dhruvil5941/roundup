import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import TabBarIcons from '../Components/TabBarIcons';
import Images from '../theme/Images';
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
        headerBackTitleVisible: false,
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
        headerBackTitleVisible: false,
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
        headerBackTitleVisible: false,
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
        headerBackTitleVisible: false,
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
        headerBackTitleVisible: false,
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

function NavigationTab(props) {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        visible: true,
        activeBackgroundColor: '#76d0e7a1',
        labelStyle: {
          fontSize: 11,
          marginBottom: 5,
        },
        style: {
          height: Platform.OS === 'ios' ? 90 : 60,
          paddingLeft: 8,
          marginBottom: 0,
          backgroundColor: '#FFF',
          borderTopWidth: 0,
          borderTopColor: '#FFF',
          elevation: 0,
        },

        tabStyle: {borderRadius: 12, height: '90%'},
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
}

export default NavigationTab;
