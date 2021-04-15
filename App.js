import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BlogDetails from './Screens/WelcomeScreen/BlogDetails';
import Blogone from './Screens/WelcomeScreen/Blogone';
import createaccount from './Screens/WelcomeScreen/createaccount';
import Userfinancesquestion from './Screens/UserFinancesQuestion';
import Conservative from './Screens/Portfolio/Conservative';
import Risky from './Screens/Portfolio/Risky';
import Home from './Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function TabStack() {
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
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

function TabBar() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      tabBarOptions={{
        activeTintColor: '#42f44b',
      }}>
      <Tab.Screen
        name="TabStack"
        component={TabStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function NavStack() {
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
        name="createaccount"
        component={createaccount}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Blogone"
        component={Blogone}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="BlogDetails"
        component={BlogDetails}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Userfinancesquestion"
        component={Userfinancesquestion}
        options={{title: 'RoundUp'}}
      />
      <Stack.Screen
        name="Conservative"
        component={Conservative}
        options={{title: 'RoundUp'}}
      />
      <Stack.Screen
        name="Risky"
        component={Risky}
        options={{title: 'RoundUp'}}
      />
      <Stack.Screen name="Home" component={Home} options={{title: 'RoundUp'}} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <NavStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

// export default App;
