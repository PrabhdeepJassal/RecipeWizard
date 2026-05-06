import React, { useState, useEffect, useLayoutEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking, Switch, Dimensions } from 'react-native';
import { ListItem, Avatar, Badge } from 'react-native-elements';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { usePantry } from '../../context/PantryContext';
import data from './Recipes';

const { height } = Dimensions.get('window');

export default function Results({ navigation }) {
  const { items } = usePantry();
  const [recipes, setRecipes] = useState([]);
  const [bonusRecipes, setBonusRecipes] = useState([]);
  const [toggle, setToggle] = useState(false);

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: 'Recipe Results',
      headerStyle: { backgroundColor: '#0f172a' },
      headerTintColor: '#FFF',
      headerRight: () => (
        <View style={{ flexDirection: 'row', alignItems: 'center', paddingRight: 15 }}>
          <Text style={{ color: '#94a3b8', fontSize: 12, marginRight: 8 }}>Bonus</Text>
          <Switch 
            value={toggle} 
            onValueChange={setToggle}
            trackColor={{ false: '#334155', true: '#10b981' }}
            thumbColor={'#FFF'}
          />
        </View>
      ),
    });
  }, [toggle, navigation]);

  useEffect(() => {
    const obj = Object.values(data.recipes);
    const perfectMatches = [];
    const partialMatches = [];

    const normalizedPantry = items.map(i => i.toLowerCase().replace(/[^a-z0-9]/g, ''));

    obj.forEach(recipe => {
      let matches = 0;
      normalizedPantry.forEach(ing => {
        if (recipe[ing]) matches++;
      });
      
      console.log(`Checking ${recipe.b}: Matches ${matches}/${recipe.s}`);

      if (matches >= recipe.s) {
        perfectMatches.push(recipe);
      } else if (matches === recipe.s - 1 && recipe.s > 1) {
        partialMatches.push(recipe);
      }
    });

    perfectMatches.sort((a, b) => b.s - a.s);
    partialMatches.sort((a, b) => b.s - a.s);

    setRecipes(perfectMatches);
    setBonusRecipes(partialMatches);
  }, [items]);

  const displayedRecipes = toggle ? bonusRecipes : recipes;

  return (
    <View style={styles.container}>
      <View style={styles.infoBanner}>
        <MaterialCommunityIcons name="information-outline" size={18} color="#10b981" />
        <Text style={styles.infoText}>
          {toggle 
            ? "Showing recipes missing just 1 ingredient" 
            : `Found ${recipes.length} recipes you can make now`}
        </Text>
      </View>

      {displayedRecipes.length === 0 ? (
        <View style={styles.emptyContainer}>
          <MaterialCommunityIcons name="cookie-outline" size={80} color="#cbd5e1" />
          <Text style={styles.emptyText}>No matches found</Text>
          <Text style={styles.emptySubtext}>Try adding more basic ingredients!</Text>
        </View>
      ) : (
        <ScrollView style={{ flex: 1 }}>
          {displayedRecipes.map((k, i) => (
            <TouchableOpacity 
              key={i} 
              activeOpacity={0.7}
              onPress={() => Linking.openURL("https://www.allrecipes.com/recipe/" + k.l)}
            >
              <ListItem containerStyle={styles.recipeCard}>
                <Avatar
                  size={60}
                  rounded
                  icon={{ name: 'silverware-variant', type: 'material-community', color: '#FFF' }}
                  overlayContainerStyle={{ backgroundColor: '#10b981' }}
                />
                <ListItem.Content>
                  <ListItem.Title style={styles.recipeTitle}>{k.b}</ListItem.Title>
                  <View style={styles.sourceRow}>
                    <MaterialCommunityIcons name="link-variant" size={14} color="#94a3b8" />
                    <Text style={styles.sourceText}>allrecipes.com</Text>
                  </View>
                  <View style={styles.tagRow}>
                    <Badge 
                      value={`${k.s} ingredients`} 
                      badgeStyle={styles.badge} 
                      textStyle={styles.badgeText} 
                    />
                  </View>
                </ListItem.Content>
                <MaterialCommunityIcons name="chevron-right" size={24} color="#cbd5e1" />
              </ListItem>
            </TouchableOpacity>
          ))}
          <View style={{ height: 40 }} />
        </ScrollView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  infoBanner: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0fdf4',
    padding: 12,
    marginHorizontal: 15,
    marginTop: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#dcfce7',
  },
  infoText: {
    marginLeft: 10,
    color: '#166534',
    fontSize: 13,
    fontWeight: '500',
  },
  recipeCard: {
    marginHorizontal: 15,
    marginTop: 12,
    borderRadius: 16,
    padding: 15,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  recipeTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  sourceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 4,
  },
  sourceText: {
    color: '#94a3b8',
    fontSize: 12,
    marginLeft: 4,
  },
  tagRow: {
    flexDirection: 'row',
    marginTop: 8,
  },
  badge: {
    backgroundColor: '#e2e8f0',
    borderWidth: 0,
    paddingHorizontal: 8,
    height: 22,
  },
  badgeText: {
    color: '#475569',
    fontSize: 11,
    fontWeight: 'bold',
  },
  emptyContainer: {
    flex: 1,
    paddingTop: height * 0.2,
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1e293b',
    marginTop: 20,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 8,
  }
});
