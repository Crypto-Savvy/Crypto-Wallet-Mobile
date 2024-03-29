import { View } from "../components/Themed";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  TextInput,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";

export default function ChooseCryptoScreen() {
  interface Coin {
    name: string;
    code: string;
    balance: string;
    icon: string;
  }
  const dummyData: Coin[] = [
    {
      name: "Polygon",
      code: "MATIC",
      balance: "$0.783300",
      icon: "",
    },
  ];
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="black"
          style={styles.backArrow}
        />
        <Text style={styles.header}>Choose Crypto</Text>
        <View style={styles.rightView}></View>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchBar}>
          <Feather
            name="search"
            size={20}
            color="gray"
            style={{ marginLeft: 1 }}
          />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  backArrow: {
    paddingLeft: 10,
  },
  header: {
    paddingRight: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
  rightView: {
    paddingRight: 10,
  },
  searchContainer: {
    margin: 15,
    justifyContent: "flex-start",
    alignItems: "center",
    flexDirection: "row",
    width: "90%",
  },
  searchBar: {
    padding: 10,
    flexDirection: "row",
    width: "95%",
    height: "80%",
    backgroundColor: "#F5F5F5",
    borderRadius: 20,
    alignItems: "center",
  },
  input: {
    // fontSize: 20,
    marginLeft: 10,
    width: "90%",
  },
});
