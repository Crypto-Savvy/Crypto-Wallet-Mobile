import { View, Text } from "../components/Themed";
import {
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ListRenderItem,
  Image,
} from "react-native";
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Feather,
} from "@expo/vector-icons";
import { useAppSelector, useAppDispatch } from "../store/hooks";
import {
  concatenate,
  backSpace,
  changeExchange,
  swap,
} from "../store/buySlice";
import { BottomSheet } from "react-native-btr";
import { useState } from "react";
import { Coin } from "../types";
import dummyData from "../constants/dummy";
import { Swap } from "../store/buySlice";

export default function BuySellScreen() {
  const value = useAppSelector((state) => state.buy.value);
  const color = useAppSelector((state) => state.buy.color);
  const exchangeCurrency = useAppSelector(
    (state) => state.buy.exchangeCurrency
  );
  const min = useAppSelector((state) => state.buy.min);
  const max = useAppSelector((state) => state.buy.max);
  const isSwap = useAppSelector((state) => state.buy.isSwap);
  const cryptoCode = useAppSelector((state) => state.buy.cryptoCode);
  const dispatch = useAppDispatch();
  const [visible, setVisible] = useState<boolean>(false);
  const toggle = () => setVisible(!visible);

  // const swapData: Ini = useAppSelector((state) => (state.buy));

  const Item = ({ data }: { data: Coin }): JSX.Element => (
    <TouchableOpacity
      onPress={() => {
        dispatch(changeExchange(data));
        toggle();
      }}
      style={{
        borderRadius: 10,
        paddingLeft: 20,
        paddingBottom: 15,
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image style={styles.icon} source={{ uri: data.icon }} />
      <Text style={{ marginRight: 7, fontSize: 15, fontWeight: "500" }}>
        {data.code}
      </Text>
      <Text style={{ color: "#D3D3D3" }}>{data.name}</Text>
    </TouchableOpacity>
  );

  const renderItem: ListRenderItem<Coin> = ({ item }) => <Item data={item} />;

  return (
    <View style={styles.container}>
      <BottomSheet
        visible={visible}
        onBackButtonPress={toggle}
        onBackdropPress={toggle}
      >
        <View
          style={{ flexDirection: "column", height: "90%", borderRadius: 10 }}
        >
          <Text style={{ padding: 20, fontSize: 17, fontWeight: "400" }}>
            Select Currency
          </Text>
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

          <FlatList
            data={dummyData}
            renderItem={renderItem}
            keyExtractor={(item: Coin) => item.id}
          />
        </View>
      </BottomSheet>
      <View style={styles.headerContainer}>
        <Ionicons
          name="arrow-back-sharp"
          size={24}
          color="black"
          style={styles.backArrow}
        />
        <Text style={styles.header}>Buy Crypto</Text>
        <TouchableOpacity style={styles.rightView}>
          <Text style={styles.sellButton}>Sell</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.conversionContainer}>
        <View style={styles.amountContainer}>
          <View style={styles.amountContainer}>
            <Text style={styles.amount}>{value}</Text>
            <Text style={styles.currency}>{exchangeCurrency}</Text>
            {!isSwap && (
              <TouchableOpacity onPress={toggle}>
                <AntDesign
                  name="caretdown"
                  size={12}
                  color="gray"
                  style={styles.down}
                />
              </TouchableOpacity>
            )}
          </View>
          <TouchableOpacity
            onPress={() => dispatch(swap(exchangeCurrency))}
            style={styles.swap}
          >
            <MaterialIcons name="swap-calls" size={24} color="gray" />
            <Text style={styles.coinCode}>{cryptoCode}</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.amountRange}>
          {min} - {max} {exchangeCurrency}
        </Text>
      </View>

      <View style={styles.conversionContainer}>
        <View style={styles.rowData}>
          <TouchableOpacity onPress={() => dispatch(concatenate("1"))}>
            <Text style={styles.numbers}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("2"))}>
            <Text style={styles.numbers}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("3"))}>
            <Text style={styles.numbers}>3</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowData}>
          <TouchableOpacity onPress={() => dispatch(concatenate("4"))}>
            <Text style={styles.numbers}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("5"))}>
            <Text style={styles.numbers}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("6"))}>
            <Text style={styles.numbers}>6</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowData}>
          <TouchableOpacity onPress={() => dispatch(concatenate("7"))}>
            <Text style={styles.numbers}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("8"))}>
            <Text style={styles.numbers}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("9"))}>
            <Text style={styles.numbers}>9</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.rowData}>
          <TouchableOpacity onPress={() => dispatch(concatenate("."))}>
            <Text style={styles.numbers}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(concatenate("0"))}>
            <Text style={[styles.numbers, { left: 8 }]}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => dispatch(backSpace())}>
            <Ionicons
              name="backspace-sharp"
              size={20}
              color="black"
              style={[styles.numbers, { left: 4 }]}
            />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={[
            styles.buttonContainer,
            { backgroundColor: color ? "yellow" : "#D3D3D3" },
          ]}
          disabled={color ? false : true}
        >
          <Text
            style={[styles.buttonText, { color: color ? "black" : "#A1A1A1" }]}
          >
            Buy BTC
          </Text>
        </TouchableOpacity>
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
    justifyContent: "center",
  },
  backArrow: {
    paddingLeft: 10,
    position: "absolute",
    left: 0,
  },
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  rightView: {
    position: "absolute",
    width: "15%",
    marginRight: 20,
    borderColor: "#EEEE",
    borderWidth: 1,
    borderRadius: 20,
    backgroundColor: "#EEEE",
    right: 0,
    alignItems: "center",
  },
  sellButton: {
    fontSize: 17,
  },
  conversionContainer: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  amountContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  amount: {
    fontSize: 50,
    fontWeight: "600",
  },
  currency: {
    marginLeft: 5,
    marginTop: 20,
    fontSize: 17,
  },
  down: {
    marginLeft: 7,
    marginBottom: 7,
  },
  swap: {
    flexDirection: "column",
    position: "absolute",
    right: 0,
  },
  coinCode: {
    marginRight: 10,
    color: "gray",
  },
  rowData: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 60,
    paddingRight: 60,
    paddingTop: 20,
    paddingBottom: 20,
  },
  numbers: {
    alignSelf: "flex-end",
    fontSize: 20,
    fontWeight: "bold",
  },
  amountRange: {
    alignSelf: "center",
    marginTop: 20,
    color: "gray",
  },
  buttonContainer: {
    width: "90%",
    backgroundColor: "#D3D3D3",
    padding: 10,
    alignItems: "center",
    bottom: 0,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
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
