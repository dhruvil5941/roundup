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

const Stack = createStackNavigator();

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
