import React from 'react';
import {
    Text,
    View,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = [
  { name: 'Dairy', icon: 'cheese', color: '#fbbf24', key: 'Dairy' },
  { name: 'Vegetables', icon: 'carrot', color: '#10b981', key: 'Vegetables' },
  { name: 'Fruits', icon: 'fruit-cherries', color: '#ef4444', key: 'Fruits' },
  { name: 'Baking', icon: 'bread-slice', color: '#b45309', key: 'Baking' },
  { name: 'Condiments', icon: 'shaker', color: '#6366f1', key: 'Sweeteners' },
  { name: 'Meats', icon: 'food-steak', color: '#991b1b', key: 'Meats' },
  { name: 'Seafoods', icon: 'fish', color: '#0ea5e9', key: 'Seafoods' },
  { name: 'Liquids', icon: 'bottle-wine', color: '#8b5cf6', key: 'Liquids' },
  { name: 'Nuts', icon: 'nut', color: '#78350f', key: 'Nuts' }
];

export default function IngredientList({ navigation }) {

  const handleCategoryPress = (key) => {
    navigation.navigate(key);
  };

  return (
    <View style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.grid}>
          {categories.map((item, i) => (
            <TouchableOpacity 
              key={i} 
              style={styles.card}
              onPress={() => handleCategoryPress(item.key)}
            >
              <View style={[styles.iconCircle, { backgroundColor: item.color + '20' }]}>
                <MaterialCommunityIcons name={item.icon} size={32} color={item.color} />
              </View>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <MaterialCommunityIcons name="chevron-right" size={20} color="#cbd5e1" />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  grid: {
    padding: 15,
  },
  card: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginBottom: 12,
    borderRadius: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  iconCircle: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
  },
  cardTitle: {
    flex: 1,
    marginLeft: 15,
    fontSize: 17,
    fontWeight: '600',
    color: '#1e293b',
  },
});
