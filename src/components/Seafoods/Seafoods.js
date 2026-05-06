import React, { useLayoutEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SeafoodsList from './SeafoodsList';

export default function Seafoods({ route, navigation }) {
  const { adds, dels } = route.params || {};

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <Text style={{ color: 'white', fontSize: 21, fontWeight: 'bold' }}>Seafoods</Text>
      ),
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: 'white',
    });
  }, [navigation]);

  const handleChange = (value) => {
    if (adds) adds(value);
  };

  const handleRemove = (value) => {
    if (dels) dels(value);
  };

  return (
    <View style={styles.container}>
      <SeafoodsList changed={handleChange} deleted={handleRemove} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
});
