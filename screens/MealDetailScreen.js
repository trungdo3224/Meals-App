import { Text, View, Image, StyleSheet, ScrollView } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/MealDetail/Subtitle';
import List from '../components/MealDetail/List';
import { useLayoutEffect } from 'react';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import { addFavorite, removeFavorite } from '../store/redux/favoritesSlice';

const MealDetailScreen = ({ route, navigation }) => {
  // const favoriteMealContext = useContext(FavoritesContext);
  const favoriteMealIds = useSelector((state) => state.ids);
  const dispatch = useDispatch();
  const mealId = route.params.mealId;

  const isMealFavorite = favoriteMealIds.includes(mealId)

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);
  const { 
    duration, 
    complexity, 
    affordability, 
    ingredients, 
    steps 
  } = selectedMeal;

  const headerButtonPressHandler = () => {
    if(isMealFavorite) {
      dispatch(removeFavorite({ id: mealId }))
    } else {
      dispatch(addFavorite({ id: mealId }));
    }
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return <IconButton icon={isMealFavorite ? 'star' : 'star-outline'} color="white" onPress={headerButtonPressHandler}/>
      }
    })
  }, [navigation, headerButtonPressHandler])

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        duration={duration}
        complexity={complexity}
        affordability={affordability}
        textStyle={styles.detailText}
      />
      <View  style={styles.listOuterContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={steps} />
        </View>
      </View>
    </ScrollView>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 32,
  },
  image: {
    width: '100%',
    height: 350,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 24,
    margin: 12,
    textAlign: 'center',
    color: 'white',
  },
  detailText: {
    color: 'white',
  },
  listOuterContainer: {
    alignItems: 'center',
  },
  listContainer: {
    width: '80%',
  },
});
