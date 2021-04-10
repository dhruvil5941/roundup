import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import BlogDetails from '../Screens/WelcomeScreen/BlogDetails';
import Welcome from '../Screens/WelcomeScreen/Welcome';
import Landing from '../Screens/LandingScreen';
import Userfinancesquestion from '../Screens/UserFinancesQuestion';

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
        name="Welcome"
        component={Welcome}
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
        options={{
          title: 'RoundUp',
        }}
      />
    </Stack.Navigator>
  );
}
export default NavigatorStack;
// export default function App() {
//     return (
//         <NavigationContainer>
//             <NavStack />
//         </NavigationContainer>
//     );
// }
//
// const styles = StyleSheet.create({
//     sectionContainer: {
//         marginTop: 32,
//         paddingHorizontal: 24,
//     },
//     sectionTitle: {
//         fontSize: 24,
//         fontWeight: '600',
//     },
//     sectionDescription: {
//         marginTop: 8,
//         fontSize: 18,
//         fontWeight: '400',
//     },
//     highlight: {
//         fontWeight: '700',
//     },
// });

// export default App;
