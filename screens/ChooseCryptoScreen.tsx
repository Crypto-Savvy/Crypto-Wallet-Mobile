import { View } from "../components/Themed";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  TextInput,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import { Feather, Ionicons } from "@expo/vector-icons";
import dummyData from "../constants/dummy";
import { Coin } from "../types";

export default function ChooseCryptoScreen() {
  const Item = ({ data }: { data: Coin }): JSX.Element => (
    <View
      style={{
        borderRadius: 10,
        marginVertical: 5,
        marginHorizontal: 16,
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          flex: 1,
          alignItems: "center",
          marginTop: 10,
        }}
      >
        <Image source={{ uri: `${data.icon}` }} style={styles.icon} />
        <View>
          <Text style={{ fontSize: 15 }}>{data.name}</Text>
          <Text
            style={{ fontSize: 15, alignSelf: "flex-start", color: "#D3D3D3" }}
          >
            {data.code}
          </Text>
        </View>
        <View
          style={{ flex: 1, flexDirection: "column", alignItems: "flex-end" }}
        >
          <Text>{data.price}</Text>
        </View>
      </View>
    </View>
  );

  const renderItem: ListRenderItem<Coin> = ({ item }) => <Item data={item} />;

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
      <Text
        style={{
          paddingLeft: 20,
          paddingTop: 10,
          fontWeight: "400",
          fontSize: 17,
        }}
      >
        Top Searches
      </Text>
      <FlatList
        data={dummyData}
        renderItem={renderItem}
        keyExtractor={(item: Coin) => item.id}
      />
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
    marginLeft: 10,
    width: "90%",
  },
  icon: {
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#eeee",
    marginRight: 10,
  },
});
