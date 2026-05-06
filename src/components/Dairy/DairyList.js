import React from 'react';
import {
    Text,
    View,
    ScrollView,
    TouchableOpacity,
} from 'react-native';
import {
  ListItem,
  CheckBox,
  Avatar
} from 'react-native-elements';
import { usePantry } from '../../context/PantryContext';

const list = [
  { name: 'Butter', icon: 'shaker-outline', key: 1 },
  { name: 'Butter Milk', icon: 'bottle-wine-outline', key: 2 },
  { name: 'Cheese', icon: 'cheese', key: 3 },
  { name: 'Custard', icon: 'cup-water', key: 4 },
  { name: 'Egg', icon: 'egg-outline', key: 5 },
  { name: 'Ice Cream', icon: 'ice-cream', key: 6 },
  { name: 'Milk', icon: 'bottle-tonic-outline', key: 7 },
  { name: 'Sour Cream', icon: 'bowl-outline', key: 8 },
  { name: 'Yoghurt', icon: 'cup-outline', key: 9 }
];

export default function DairyList() {
  const { items, addItem, removeItem } = usePantry();

  const toggleItem = (itemName) => {
    if (!items.includes(itemName)) {
      addItem(itemName);
    } else {
      removeItem(itemName);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#f8fafc' }}>
      <ScrollView>
        <View style={{ paddingVertical: 10 }}>
          {list.map((l, i) => (
            <TouchableOpacity 
              key={i} 
              activeOpacity={0.7} 
              onPress={() => toggleItem(l.name)}
            >
              <ListItem 
                containerStyle={{
                  backgroundColor: '#FFF',
                  marginHorizontal: 15,
                  marginVertical: 4,
                  borderRadius: 12,
                  borderBottomWidth: 0
                }}
              >
                <Avatar
                  rounded
                  icon={{ name: l.icon, type: 'material-community', color: '#fbbf24' }}
                  overlayContainerStyle={{ backgroundColor: '#fffbeb' }}
                />
                <ListItem.Content>
                  <ListItem.Title style={{ fontWeight: '600', color: '#1e293b' }}>
                    {l.name}
                  </ListItem.Title>
                </ListItem.Content>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderWidth: 0, padding: 0 }}
                  right
                  checkedIcon='minus-circle'
                  uncheckedIcon='plus-circle'
                  onPress={() => toggleItem(l.name)}
                  checked={items.includes(l.name)}
                  checkedColor="#ef4444"
                  uncheckedColor="#10b981"
                />
              </ListItem>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}
