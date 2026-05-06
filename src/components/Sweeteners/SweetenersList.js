import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox, Avatar } from 'react-native-elements';
import { usePantry } from '../../context/PantryContext';

const list = [
  { name: 'Barbeque Sauce', icon: 'shaker-outline' },
  { name: 'Fish Sauce', icon: 'shaker-outline' },
  { name: 'Honey', icon: 'beehive-outline' },
  { name: 'Mayonnaise', icon: 'cup-water' },
  { name: 'Mustard', icon: 'shaker-outline' },
  { name: 'Soy Sauce', icon: 'bottle-tonic-outline' },
  { name: 'Syrup', icon: 'bottle-wine-outline' },
  { name: 'Vinegar', icon: 'bottle-wine-outline' }
];

export default function SweetenersList() {
  const { items, addItem, removeItem } = usePantry();
  const toggleItem = (name) => items.includes(name) ? removeItem(name) : addItem(name);

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView>
        <View style={{ paddingVertical: 10 }}>
          {list.map((l, i) => (
            <TouchableOpacity key={i} activeOpacity={0.7} onPress={() => toggleItem(l.name)}>
              <ListItem containerStyle={styles.listItem}>
                <Avatar rounded icon={{ name: l.icon, type: 'material-community', color: '#6366f1' }} overlayContainerStyle={{ backgroundColor: '#eef2ff' }} />
                <ListItem.Content>
                  <ListItem.Title style={styles.title}>{l.name}</ListItem.Title>
                </ListItem.Content>
                <CheckBox containerStyle={styles.checkBox} right checkedIcon='minus-circle' uncheckedIcon='plus-circle' onPress={() => toggleItem(l.name)} checked={items.includes(l.name)} checkedColor="#ef4444" uncheckedColor="#10b981" />
              </ListItem>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = {
  listItem: { backgroundColor: '#FFF', marginHorizontal: 15, marginVertical: 4, borderRadius: 12, borderBottomWidth: 0 },
  title: { fontWeight: '600', color: '#1e293b' },
  checkBox: { backgroundColor: 'transparent', borderWidth: 0, padding: 0 }
};
