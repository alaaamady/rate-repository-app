import { View, StyleSheet } from "react-native";
import Text from "./Text";
import Constants from "expo-constants";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import theme from "../theme";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    paddingBottom: 10,
  },
  title: {
    margin: 5,
    color: "white",
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Pressable>
        <Text style={styles.title} fontWeight="bold">
          Reposotories
        </Text>
      </Pressable>
    </View>
  );
};

export default AppBar;
