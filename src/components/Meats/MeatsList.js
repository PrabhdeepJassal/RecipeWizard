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
  { name: 'Bacon', icon: 'pig' },
  { name: 'Chicken', icon: 'food-drumstick' },
  { name: 'Ham', icon: 'pig-variant' },
  { name: 'Lamb', icon: 'sheep' },
  { name: 'Pork', icon: 'pig' },
  { name: 'Salami', icon: 'sausage' },
  { name: 'Sausage', icon: 'sausage' },
  { name: 'Turkey', icon: 'turkey' }
];

export default function MeatsList() {
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
                  icon={{ name: l.icon, type: 'material-community', color: '#991b1b' }}
                  overlayContainerStyle={{ backgroundColor: '#fef2f2' }}
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
