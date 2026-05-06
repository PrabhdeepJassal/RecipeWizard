import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeBaseProvider } from 'native-base';

// Import Screens
import MainMenu from './src/components/MainMenu/MainMenu';
import Search from './src/components/Search/Search';
import LoadScreen from './src/components/LoadScreen/LoadScreen';
import Dairy from './src/components/Dairy/Dairy';
import Fruits from './src/components/Fruits/Fruits';
import Baking from './src/components/Baking/Baking';
import Meats from './src/components/Meats/Meats';
import Sweeteners from './src/components/Sweeteners/Sweeteners';
import Vegetables from './src/components/Vegetables/Vegetables';
import CheckOut from './src/components/CheckOut/CheckOut';
import Results from './src/components/Results/Results';
import Seafoods from './src/components/Seafoods/Seafoods';
import Liquids from './src/components/Liquids/Liquids';
import Nuts from './src/components/Nuts/Nuts';

const Stack = createStackNavigator();

import { PantryProvider } from './src/context/PantryContext';

export default function App() {
  return (
    <SafeAreaProvider>
      <PantryProvider>
        <NativeBaseProvider>
          <NavigationContainer>
            <Stack.Navigator 
              initialRouteName="MainMenu"
              screenOptions={{
                headerShown: true,
                cardStyle: { backgroundColor: '#FFFFFF' }
              }}
            >
              <Stack.Screen name="MainMenu" component={MainMenu} options={{ headerShown: false }} />
              <Stack.Screen name="Search" component={Search} />
              <Stack.Screen name="Meats" component={Meats} />
              <Stack.Screen name="Liquids" component={Liquids} />
              <Stack.Screen name="Seafoods" component={Seafoods} />
              <Stack.Screen name="LoadScreen" component={LoadScreen} />
              <Stack.Screen name="Sweeteners" component={Sweeteners} />
              <Stack.Screen name="Dairy" component={Dairy} />
              <Stack.Screen name="Baking" component={Baking} />
              <Stack.Screen name="Fruits" component={Fruits} />
              <Stack.Screen name="Vegetables" component={Vegetables} />
              <Stack.Screen name="CheckOut" component={CheckOut} />
              <Stack.Screen name="Nuts" component={Nuts} />
              <Stack.Screen name="Results" component={Results} />
            </Stack.Navigator>
          </NavigationContainer>
        </NativeBaseProvider>
      </PantryProvider>
    </SafeAreaProvider>
  );
}
