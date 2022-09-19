import { TouchableHighlight, View, Text } from "react-native";

const RepositoryItem = ({ item, index, separators }) => {
  <TouchableHighlight
    key={item.id}
    onShowUnderlay={separators.highlight}
    onHideUnderlay={separators.unhighlight}
  >
    <View style={{ backgroundColor: "red" }}>
      <Text>{index}</Text>
      <Text>Full name: {item.fullName}</Text>
      <Text>Description: {item.description}</Text>
      <Text>Language: {item.language}</Text>
      <Text>Stars: {item.stargazersCount}</Text>
      <Text>Forks: {item.forksCount}</Text>
      <Text>Reviews: {item.reviewCount}</Text>
      <Text>Rating: {item.ratingAverage}</Text>
    </View>
  </TouchableHighlight>;
};

export default RepositoryItem;
