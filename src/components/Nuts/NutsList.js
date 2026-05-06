import React from 'react';
import { View, ScrollView, TouchableOpacity } from 'react-native';
import { ListItem, CheckBox, Avatar } from 'react-native-elements';
import { usePantry } from '../../context/PantryContext';

const list = [
  { name: 'Almond', icon: 'nut' },
  { name: 'Cashew', icon: 'nut' },
  { name: 'Macadamia', icon: 'nut' },
  { name: 'Peanut', icon: 'nut' },
  { name: 'Peanut Butter', icon: 'shaker-outline' },
  { name: 'Pecan', icon: 'nut' },
  { name: 'Walnut', icon: 'nut' }
];

export default function NutsList() {
  const { items, addItem, removeItem } = usePantry();
  const toggleItem = (name) => items.includes(name) ? removeItem(name) : addItem(name);

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView>
        <View style={{ paddingVertical: 10 }}>
          {list.map((l, i) => (
            <TouchableOpacity key={i} activeOpacity={0.7} onPress={() => toggleItem(l.name)}>
              <ListItem containerStyle={styles.listItem}>
                <Avatar rounded icon={{ name: l.icon, type: 'material-community', color: '#78350f' }} overlayContainerStyle={{ backgroundColor: '#fff7ed' }} />
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
