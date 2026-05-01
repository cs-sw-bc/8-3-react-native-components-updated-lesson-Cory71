// screens/03-FlatListDemo.jsx
// Topic: FlatList
// FlatList only renders items currently visible on screen — more performant than ScrollView for lists.


import { FlatList, Text, View, StyleSheet } from 'react-native';

let FRUITS = [
  'Apple', 'Banana', 'Mango', 'Orange', 'Pineapple',
  'Grape', 'Watermelon', 'Strawberry', 'Blueberry', 'Peach',
  'Kiwi', 'Papaya', 'Lychee', 'Guava', 'Coconut',
  'Cherry', 'Apricot', 'Plum', 'Pear', 'Fig',
  'Pomegranate', 'Passion Fruit', 'Dragon Fruit', 'Starfruit', 'Jackfruit',
  'Durian', 'Rambutan', 'Longan', 'Persimmon', 'Quince',
  'Mulberry', 'Blackberry', 'Raspberry', 'Cranberry', 'Gooseberry',
  'Elderberry', 'Boysenberry', 'Currant', 'Date', 'Tamarind',
  'Soursop', 'Breadfruit', 'Ackee', 'Sapodilla', 'Feijoa',
  'Mangosteen', 'Jujube', 'Noni', 'Cloudberry', 'Lingonberry',
  'Damson', 'Cherimoya', 'Pawpaw', 'Langsat', 'Honeydew',
  'Cantaloupe', 'Tangerine', 'Clementine', 'Kumquat', 'Pomelo',
  'Yuzu', 'Blood Orange', 'Nectarine', 'Loquat', 'Tamarillo',
];

export default function FlatListDemo() {
  return (
    <View style={{ flex: 1 }}>
      <FlatList
        data={FRUITS}
        keyExtractor={(item) => item}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.headerText}>🍎 Fruit List</Text>
          </View>
        }
        ListEmptyComponent={<Text style={styles.empty}>No fruits found.</Text>}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
        renderItem={({ item, index }) => (
          <View style={styles.item}>        
            <Text style={styles.index}>{index + 1}.</Text>
            <Text style={styles.label}>{item}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    padding: 16,
    backgroundColor: '#e8f5e9',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2e7d32',
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
  },
  index: {
    width: 32,
    color: '#999',
    fontSize: 14,
  },
  label: {
    fontSize: 16,
  },
  separator: {
    height: 1,
    backgroundColor: '#eee',
  },
  empty: {
    padding: 24,
    color: '#999',
    textAlign: 'center',
  },
});
