import { View, ActivityIndicator, StyleSheet, Text } from "react-native";
import Colors from "../../constants/Colors";

function LoadingOverlay({ text }) {
  return (
    <View style={styles.container}>
      <Text>{text}</Text>
      <ActivityIndicator size="large" color="white" />
    </View>
  );
}

export default LoadingOverlay;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
    backgroundColor: Colors.primary400,
  },
});
