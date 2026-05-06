import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import FruitsList from './FruitsList';

export default function Fruits({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}>Fruits</Text>
      ),
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <FruitsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
