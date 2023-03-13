import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { ScrollView, StyleSheet } from "react-native";
import useCachedResources from "./hooks/useCachedResources";
import useColorScheme from "./hooks/useColorScheme";
import Navigation from "./navigation";
import Test from "./screens/TestScreen";
import ChooseCryptoScreen from "./screens/ChooseCryptoScreen";
import BuySellScreen from "./screens/BuySellScreen";
import HomeScreen from "./screens/HomeScreen";
import { Provider } from "react-redux";
import store from "./store";

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaView style={styles.container}>
          {/* <BuySellScreen /> */}
          {/* <ChooseCryptoScreen /> */}
          {/* <Test /> */}
          {/* <Navigation colorScheme={colorScheme} /> */}
          <HomeScreen />
          <StatusBar />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
