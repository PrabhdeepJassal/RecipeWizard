import React, { useState, useLayoutEffect } from 'react';
import { Searchbar } from 'react-native-paper';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    Image,
    Dimensions
} from 'react-native';
import {
  ListItem,
  CheckBox
} from 'react-native-elements';
import { usePantry } from '../../context/PantryContext';

const DEVICE_WIDTH = Dimensions.get('window').width;
const DEVICE_HEIGHT = Dimensions.get('window').height;

const completelist = [
  'Baking Soda', 'Baking Powder', 'Batter', 'Blueberries', 'Bread', 'Chocolate', 'Cocoa', 'Dough', 'Flour', 'Noodles', 'Pasta', 'Rice', 'Vanilla', 'Yeast', 'Avocado', 'Basil', 'Beans', 'Broccoli', 'Cabbage', 'Carrot', 'Cauliflower', 'Celery', 'Corn', 'Cucumber', 'Eggplant', 'Garlic', 'Ginger', 'Lettuce', 'Mint', 'Mushroom', 'Olive', 'Onion', 'Oregano', 'Pickle', 'Potato', 'Pumpkin', 'Seed', 'Shallot', 'Spinach', 'Sweet Potato', 'Thyme', 'Tomato', 'Zucchini','Butter', 'Butter Milk', 'Cheese', 'Custard', 'Egg', 'Ice Cream', 'Milk', 'Sour Cream', 'Yoghurt', 'Apple', 'Banana', 'Blackberries', 'Cherries', 'Coconut', 'Cranberries', 'Grapes', 'Kiwi', 'Lemon', 'Lime', 'Mango', 'Orange', 'Peach', 'Pear', 'Pineapple', 'Raspberries', 'Strawberries', 'Beef Soup', 'Beer', 'Chicken Soup', 'Lamb Soup', 'Olive Oil', 'Red Wine', 'Vegetable Oil', 'White Wine', 'Barbeque Sauce', 'Syrup', 'Fish Sauce', 'Honey', 'Mayonnaise', 'Mustard', 'Soy Sauce', 'Vinegar', 'Carp', 'Catfish', 'Crab', 'Eel', 'Lobster', 'Mackerel', 'Mussel', 'Oyster', 'Prawn', 'Salmon', 'Sardine', 'Scallop', 'Shrimp', 'Squid', 'Trout', 'Tuna', 'Almond', 'Cashew', 'Macadamia', 'Peanut', 'Peanut Butter', 'Walnut', 'Bacon', 'Beef', 'Chicken', 'Ham', 'Lamb', 'Pork', 'Salami', 'Sausage', 'Turkey', 'Watermelon', 'Paprika', 'Apple Juice', 'Orange Juice', 'Coriander', 'Pecan', 'Allspice', 'Nutmeg', 'Tomato Sauce'
];

export default function Search({ navigation }) {
  const { items, addItem, removeItem } = usePantry();
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredList, setFilteredList] = useState([]);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: () => (
        <View style={{ width: DEVICE_WIDTH - 80 }}>
          <Searchbar
            placeholder="Search"
            value={searchQuery}
            onChangeText={handleSearch}
            style={{ height: 45 }}
          />
        </View>
      ),
      headerStyle: { backgroundColor: '#075e54' },
      headerTintColor: 'white',
    });
  }, [navigation, searchQuery]);

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query.trim() === '') {
      setFilteredList([]);
      return;
    }
    const sample = completelist.filter(item => 
      item.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredList(sample);
  };

  const toggleItem = (item) => {
    if (!items.includes(item)) {
      addItem(item);
    } else {
      removeItem(item);
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: '#FFF' }}>
      {searchQuery !== '' && filteredList.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={{ color: '#4c4c4c' }}>No Results Found</Text>
        </View>
      ) : (
        <ScrollView style={{ backgroundColor: '#FFF' }}>
          <View style={{ flex: 1 }}>
            {filteredList.map((l, i) => (
              <ListItem key={i} bottomDivider containerStyle={{ borderTopWidth: 0 }}>
                <View style={{ flexDirection: 'row', alignItems: 'center', flex: 1 }}>
                  <Image
                    style={{ width: 45, height: 45 }}
                    source={{ uri: 'https://i.imgur.com/0zfrvlw.png' }}
                  />
                  <ListItem.Content style={{ marginLeft: 10 }}>
                    <ListItem.Title style={{ color: 'steelblue' }}>{l}</ListItem.Title>
                  </ListItem.Content>
                </View>
                <CheckBox
                  containerStyle={{ backgroundColor: 'transparent', borderWidth: 0 }}
                  right
                  checkedIcon='minus-circle'
                  uncheckedIcon='plus-circle'
                  onPress={() => toggleItem(l)}
                  checked={items.includes(l)}
                />
              </ListItem>
            ))}
          </View>
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  emptyContainer: {
    flex: 1,
    paddingTop: DEVICE_HEIGHT * 0.4,
    alignItems: 'center',
  }
});
