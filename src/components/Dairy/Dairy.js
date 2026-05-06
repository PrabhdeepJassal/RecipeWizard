import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import DairyList from './DairyList';

export default function Dairy({ navigation }) {
  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}>Dairy</Text>
      ),
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <DairyList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
