import { View, Image, StyleSheet } from "react-native";
import theme from "../theme";
import formatInThousands from "../utils/formatInThousands";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    margin: 10,
    borderRadius: 5,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
    margin: 10,
  },
  horizontalContainer: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "flex-start",
  },
  contentContainer: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: 10,
  },
  languageTag: {
    marginTop: 10,
    flexDirection: "row",
  },
  languageText: {
    color: "white",
    backgroundColor: theme.colors.primary,
    borderRadius: theme.roundness,
    flexGrow: 0,
    paddingVertical: 3,
    paddingHorizontal: 6,
  },
  descriptionText: {
    flexGrow: 1,
    paddingBottom: 5,
  },
  countItem: {
    flexGrow: 0,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 15,
  },
  countItemCount: {
    marginBottom: 5,
  },
});

const CountItem = ({ label, count }) => {
  return (
    <View style={styles.countItem}>
      <Text style={styles.countItemCount} fontWeight="bold">
        {formatInThousands(count)}
      </Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

const RepositoryItem = ({ repository }) => {
  const {
    fullName,
    description,
    language,
    forksCount,
    stargazersCount,
    ratingAverage,
    reviewCount,
    ownerAvatarUrl,
  } = repository;

  return (
    <View style={styles.container}>
      <View style={styles.horizontalContainer}>
        <Image source={{ uri: ownerAvatarUrl }} style={styles.avatar} />
        <View style={styles.contentContainer}>
          <Text fontWeight="bold" style={{ paddingBottom: 5 }}>
            {fullName}
          </Text>
          <Text color="textSecondary" style={styles.descriptionText}>
            {description}
          </Text>
          <View style={styles.languageTag}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>
      <View
        style={[
          styles.horizontalContainer,
          { justifyContent: "space-between" },
        ]}
      >
        <CountItem label={"Stars"} count={stargazersCount} />
        <CountItem label={"Forks"} count={forksCount} />
        <CountItem label={"Reviews"} count={reviewCount} />
        <CountItem label={"Rating"} count={ratingAverage} />
      </View>
    </View>
  );
};

export default RepositoryItem;
