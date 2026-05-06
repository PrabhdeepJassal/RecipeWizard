import React from 'react';
import { View, StyleSheet, StatusBar } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import HeaderBar from '../HeaderBar/HeaderBar';
import IngredientList from '../IngredientList/IngredientList';
import CheckOut from '../CheckOut/CheckOut';
import { usePantry } from '../../context/PantryContext';

const Tab = createMaterialTopTabNavigator();

export default function MainMenu({ navigation }) {
  const { items } = usePantry();

  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor="#0f172a" />
      <HeaderBar navigation={navigation} />
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#10b981',
          tabBarInactiveTintColor: '#94a3b8',
          tabBarIndicatorStyle: { backgroundColor: '#10b981', height: 3 },
          tabBarStyle: { backgroundColor: '#0f172a' },
          tabBarLabelStyle: { fontSize: 13, fontWeight: 'bold', textTransform: 'none' },
        }}
      >
        <Tab.Screen 
          name="Add Ingredients" 
          component={IngredientList} 
        />
        <Tab.Screen 
          name="MyPantry"
          component={CheckOut}
          options={{
            tabBarLabel: `My Pantry (${items.length})`
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
  },
});
