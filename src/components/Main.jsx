import Constants from "expo-constants";
import { StyleSheet, View } from "react-native";
import BigBlueText from "./BigBlueText";
import RepositoryList from "./RepositoryList";
import Text from "./Text";

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <>
      <View style={styles.container}>
        <Text>Rate Respository Application</Text>
        <Text>Simple Text</Text>
        <Text style={{ paddingBottom: 10 }}>Text with custom style</Text>
        <Text fontWeight="bold" fontSize="subheading">
          Bold Subheading
        </Text>
        <Text color="textSecondary">Text with secondary color</Text>
      </View>
      <RepositoryList />
      <BigBlueText />
    </>
  );
};

export default Main;
