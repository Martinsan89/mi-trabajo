import { FlatList, SafeAreaView } from "react-native";
import React from "react";
import { styles } from "./styles";
import { CaterogyItem } from "../../../components";
import { useSelector, useDispatch } from "react-redux";
import { selectCategory} from '../../../store/actions';


const Jobs = ({ navigation }) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.category.categories);

  const onSelected = (item) => {
    dispatch(selectCategory(item.id))
    navigation.navigate("JobsFiltered", {
      title: item.title,
      categoryId: item.id
    });
  };

  const renderItem = ({ item }) => (
    <CaterogyItem item={item} onSelected={onSelected} />
  );
  const keyExtractor = (item) => item.id.toString();

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={categories}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        style={styles.containerList}
        contentContainerStyle={styles.contentContainerList}
      />
    </SafeAreaView>
  );
};

export default Jobs;

