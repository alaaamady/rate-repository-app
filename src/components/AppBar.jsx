import { View, ScrollView, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Text from "./Text";
import theme from "../theme";
import { Link } from "react-router-native";

const styles = StyleSheet.create({
  container: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.dark,
    paddingBottom: 10,
    flexDirection: "row",
  },
  scrollView: {
    flexDirection: "row",
  },
  tabTouchable: {
    flexGrow: 0,
  },
  tabContainer: {
    paddingHorizontal: 15,
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  tabText: {
    color: "white",
    margin: 5,
  },
});

const AppBarTab = ({ children, ...props }) => {
  return (
    <Link style={styles.tabTouchable} {...props}>
      <View style={styles.tabTouchable}>
        <Text fontWeight="bold" style={styles.tabText}>
          {children}
        </Text>
      </View>
    </Link>
  );
};

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} horizontal>
        <AppBarTab to="/">Repostories</AppBarTab>
        <AppBarTab to="/sign-in">Sign in</AppBarTab>
      </ScrollView>
    </View>
  );
};

export default AppBar;
