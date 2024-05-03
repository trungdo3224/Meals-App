import { StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealsList from '../components/MealsList/MealsList';

const MealsOverviewScreen = ({ route, navigation }) => {
  const catId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(catId) >= 0;
  });

  useLayoutEffect(() => {
    const cateogryTitle = CATEGORIES.find(
      (category) => category.id === catId
    ).title;
    navigation.setOptions({
      title: cateogryTitle,
    });
  }, [catId, navigation]);
  return <MealsList items={displayedMeals}/>

};

const styles = StyleSheet.create({

});

export default MealsOverviewScreen;
