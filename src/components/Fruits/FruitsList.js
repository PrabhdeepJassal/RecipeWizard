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
  { name: 'Apple', icon: 'food-apple' },
  { name: 'Banana', icon: 'fruit-citrus' },
  { name: 'Blackberries', icon: 'fruit-cherries' },
  { name: 'Blueberries', icon: 'fruit-cherries' },
  { name: 'Cherries', icon: 'fruit-cherries' },
  { name: 'Coconut', icon: 'coconut' },
  { name: 'Cranberries', icon: 'fruit-cherries' },
  { name: 'Grapes', icon: 'fruit-grapes' },
  { name: 'Kiwi', icon: 'fruit-kiwi' },
  { name: 'Lemon', icon: 'fruit-citrus' },
  { name: 'Lime', icon: 'fruit-citrus' },
  { name: 'Mango', icon: 'fruit-pineapple' },
  { name: 'Orange', icon: 'fruit-citrus' },
  { name: 'Peach', icon: 'fruit-peach' },
  { name: 'Pear', icon: 'fruit-pear' },
  { name: 'Pineapple', icon: 'fruit-pineapple' },
  { name: 'Raspberries', icon: 'fruit-cherries' },
  { name: 'Strawberries', icon: 'fruit-cherries' },
  { name: 'Watermelon', icon: 'fruit-watermelon' }
];

export default function FruitsList() {
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
                  icon={{ name: l.icon, type: 'material-community', color: '#ef4444' }}
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
