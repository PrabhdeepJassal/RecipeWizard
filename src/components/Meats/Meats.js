import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MeatsList from './MeatsList';

export default function Meats({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}>Meats</Text>
      ),
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MeatsList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
