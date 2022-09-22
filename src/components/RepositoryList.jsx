import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import theme from "../theme";
import useRepositories from "../hooks/useReposotories";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
  container: {
    flexGrow: 1,
    flexShrink: 1,
    backgroundColor: theme.colors.grey,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;
const RepositoryList = () => {
  const { repositories } = useRepositories();

  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <View style={styles.container}>
      <FlatList
        data={repositoryNodes}
        keyExtractor={({ id }) => id}
        ItemSeparatorComponent={ItemSeparator}
        renderItem={({ item }) => <RepositoryItem repository={item} />}
      />
    </View>
  );
};

export default RepositoryList;
