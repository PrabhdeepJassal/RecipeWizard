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
  { name: 'Avocado', icon: 'avocado' }, // Fixed icon name
  { name: 'Basil', icon: 'leaf' },
  { name: 'Beans', icon: 'seed-outline' },
  { name: 'Broccoli', icon: 'sprout' },
  { name: 'Cabbage', icon: 'leaf' },
  { name: 'Carrot', icon: 'carrot' },
  { name: 'Cauliflower', icon: 'sprout-outline' },
  { name: 'Celery', icon: 'leaf-variant' },
  { name: 'Corn', icon: 'corn' },
  { name: 'Cucumber', icon: 'cucumber' },
  { name: 'Eggplant', icon: 'eggplant' },
  { name: 'Garlic', icon: 'clover' },
  { name: 'Ginger', icon: 'foot-print' },
  { name: 'Lettuce', icon: 'leaf' },
  { name: 'Mint', icon: 'leaf' },
  { name: 'Mushroom', icon: 'mushroom' },
  { name: 'Olive', icon: 'seed' },
  { name: 'Onion', icon: 'onion' },
  { name: 'Oregano', icon: 'leaf' },
  { name: 'Pickle', icon: 'cucumber' },
  { name: 'Potato', icon: 'potato' },
  { name: 'Pumpkin', icon: 'pumpkin' },
  { name: 'Spinach', icon: 'leaf' },
  { name: 'Tomato', icon: 'tomato' },
  { name: 'Zucchini', icon: 'cucumber' }
];

export default function VegetablesList() {
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
                  icon={{ name: l.icon, type: 'material-community', color: '#10b981' }}
                  overlayContainerStyle={{ backgroundColor: '#f0fdf4' }}
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
