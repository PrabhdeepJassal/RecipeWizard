import React from 'react';
import { View, TouchableOpacity, ScrollView, Text, StyleSheet } from 'react-native';
import { ListItem, Avatar } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePantry } from '../../context/PantryContext';

export default function CheckOut({ navigation }) {
  const { items, removeItem } = usePantry();
  
  const handleResultsPress = () => {
    navigation.navigate('Results', { lists: items });
  };

  return (
    <View style={styles.container}>
      <ScrollView style={{ flex: 1 }}>
        <View style={{ paddingVertical: 10 }}>
          {items.map((l, i) => (
            <ListItem 
              key={i} 
              containerStyle={styles.listItem}
            >
              <Avatar
                rounded
                icon={{ name: 'food-apple', type: 'material-community', color: '#10b981' }}
                overlayContainerStyle={{ backgroundColor: '#f0fdf4' }}
              />
              <ListItem.Content>
                <ListItem.Title style={styles.itemTitle}>{l}</ListItem.Title>
                <ListItem.Subtitle style={styles.itemSubtitle}>In your pantry</ListItem.Subtitle>
              </ListItem.Content>
              <TouchableOpacity onPress={() => removeItem(l)} style={styles.removeBtn}>
                <MaterialCommunityIcons name="close-circle" size={24} color="#ef4444" />
              </TouchableOpacity>
            </ListItem>
          ))}
          
          {items.length === 0 && (
            <View style={styles.emptyContainer}>
              <MaterialCommunityIcons name="basket-outline" size={80} color="#cbd5e1" />
              <Text style={styles.emptyText}>Your pantry is empty</Text>
              <Text style={styles.emptySubtext}>Add ingredients to start cooking!</Text>
            </View>
          )}
        </View>
      </ScrollView>

      {items.length > 0 && (
        <TouchableOpacity
          style={styles.fab}
          onPress={handleResultsPress}
        >
          <Text style={styles.fabText}>Find Recipes</Text>
          <MaterialCommunityIcons name="arrow-right" size={24} color="#FFF" />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  listItem: {
    backgroundColor: '#FFF',
    marginHorizontal: 15,
    marginVertical: 6,
    borderRadius: 12,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },
  itemTitle: {
    color: '#1e293b',
    fontWeight: '600',
    fontSize: 16,
  },
  itemSubtitle: {
    color: '#64748b',
    fontSize: 12,
  },
  removeBtn: {
    padding: 5,
  },
  emptyContainer: {
    marginTop: 100,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  emptyText: {
    color: '#1e293b',
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
  },
  emptySubtext: {
    color: '#64748b',
    fontSize: 14,
    marginTop: 8,
  },
  fab: {
    position: 'absolute',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    bottom: 30,
    paddingHorizontal: 25,
    height: 60,
    backgroundColor: "#10b981",
    borderRadius: 30,
    elevation: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
  },
  fabText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
    marginRight: 10,
  }
});
