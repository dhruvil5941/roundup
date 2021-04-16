import React from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import BlogDetails from './App/Screens/WelcomeScreen/BlogDetails';
import Blogone from './App/Screens/WelcomeScreen/Blogone';
import createaccount from './App/Screens/WelcomeScreen/createaccount';
import Userfinancesquestion from './App/Screens/UserFinancesQuestion';
import Conservative from './App/Screens/Portfolio/Conservative';
import Risky from './App/Screens/Portfolio/Risky';
import Home from './App/Screens/Home';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import StackNavigation from './App/Navigation/StackNavigation';

// const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();
//
// const TabStack = () => {
//   return (
//     <Stack.Navigator>
//       <Stack.Screen
//         name="Home"
//         component={Home}
//         options={{headerShown: false}}
//       />
//     </Stack.Navigator>
//   );
// };
//
// const TabBar = () => {
//   return (
//     <Tab.Navigator
//       initialRouteName="Home"
//       tabBarOptions={{
//         activeTintColor: '#42f44b',
//       }}>
//       <Tab.Screen
//         name="TabStack"
//         component={TabStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({color, size}) => (
//             <MaterialCommunityIcons name="home" color={'#000'} size={24} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };
//
// const NavStack = () => {
//   return (
//     <Stack.Navigator
//       screenOptions={{
//         headerTitleAlign: 'center',
//         headerStyle: {
//           backgroundColor: '#1FAD9E',
//         },
//         headerTintColor: '#fff',
//         headerTitleStyle: {
//           fontWeight: 'bold',
//           fontSize: 23,
//         },
//       }}>
//       <Stack.Screen
//         name="createaccount"
//         component={createaccount}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Blogone"
//         component={Blogone}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="BlogDetails"
//         component={BlogDetails}
//         options={{headerShown: false}}
//       />
//       <Stack.Screen
//         name="Userfinancesquestion"
//         component={Userfinancesquestion}
//         options={{title: 'RoundUp'}}
//       />
//       <Stack.Screen
//         name="Conservative"
//         component={Conservative}
//         options={{title: 'RoundUp'}}
//       />
//       <Stack.Screen
//         name="Risky"
//         component={Risky}
//         options={{title: 'RoundUp'}}
//       />
//       <Stack.Screen name="TabBar" component={TabBar} />
//     </Stack.Navigator>
//   );
// };

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigation />
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
