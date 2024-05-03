import { View, Text, StyleSheet } from 'react-native';

const MealDetails = ({ duration, complexity, affordability, textStyle }) => {
  return (
    <View style={styles.details}>
      <Text style={ textStyle ? [styles.detailItem, textStyle] : styles.detailItem}>{duration}</Text>
      <Text style={ textStyle ? [styles.detailItem, textStyle] : styles.detailItem}>{complexity.toUpperCase()}</Text>
      <Text style={ textStyle ? [styles.detailItem, textStyle] : styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
  );
};

styles = StyleSheet.create({
  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 8,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
  },
});

export default MealDetails;
