import { Feather, FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import {
  Pressable,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Text, View } from "../components/Themed";

export default function Test() {
  const [show, setShow] = useState<Boolean>(false);

  const handleShow = () => {
    setShow(!show);
  };
  const image: String =
    "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg";
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.balanceHeader}>
        <Text style={styles.title}>Total Balance</Text>
        <TouchableOpacity onPress={handleShow}>
          <Feather size={20} name={show ? "eye-off" : "eye"} color="grey" />
        </TouchableOpacity>
      </View>
      {show ? (
        <View style={styles.balance}>
          <Text style={styles.dollar}>$</Text>
          <Text style={styles.amount}>0.00</Text>
        </View>
      ) : (
        <View style={styles.balance}>
          <Text style={styles.amount}>*****</Text>
        </View>
      )}

      <Text style={styles.headerTitle}>Buy Your First Crypto</Text>
      <Text style={styles.subTitle}>
        Start your crypto journey with the most popular coins!
      </Text>
      <View style={styles.search}>
        <Feather name="search" size={15} />
        <Text style={styles.searchText}>Search Coins</Text>
      </View>

      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.coinType}>
          {/* <FontAwesome
            name="bitcoin"
            size={17}
            color="red"
            style={styles.coinIcon}
          /> */}
          <Image
            style={styles.coinIcon}
            source={{
              uri: "https://static1.srcdn.com/wordpress/wp-content/uploads/2020/07/Aang-Avatar-The-Last-Airbender.jpg",
            }}
          />
          <Text style={styles.coinName}>BUSD</Text>
          <Text style={styles.coinSub}>BUSD</Text>
        </View>
        <Text style={styles.coinDetail}>
          Best Stablecoin for beginners on Binance. Holding a one to one value
          with the US Dollar.
        </Text>
        <View style={styles.coinAmount}>
          <Text style={styles.coinValue}>$</Text>
          <Text style={styles.coinValue}>1.00</Text>

          <Pressable style={styles.button}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Buy</Text>
          </Pressable>
        </View>
      </View>
      {/* </View> */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 15,
  },
  title: {
    marginRight: 5,
    fontWeight: "bold",
  },
  balanceHeader: {
    flexDirection: "row",
  },
  balance: {
    marginTop: 5,
    flexDirection: "row",
  },
  dollar: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 8,
  },
  amount: {
    fontSize: 20,
    fontWeight: "bold",
  },
  headerTitle: {
    fontWeight: "bold",
    fontSize: 18,
    marginTop: 25,
  },
  subTitle: {
    marginTop: 10,
    fontSize: 12,
    color: "gray",
  },
  search: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 12,
    marginBottom: 12,
    width: "50%",
    height: "6%",
    borderWidth: 1,
    borderColor: "#D3D3D3",
    borderRadius: 30,
    backgroundColor: "#D3D3D3",
  },
  searchText: {
    marginLeft: 7,
  },
  card: {
    borderWidth: 1,
    borderColor: "#D3D3D3",
    width: "90%",
    height: "17%",
    margin: 10,
    borderRadius: 10,
    flexDirection: "column",
  },
  coinType: {
    margin: 10,
    flexDirection: "row",
  },
  coinName: {
    fontSize: 17,
  },
  coinIcon: {
    alignSelf: "center",
    marginRight: 15,
    width: 40,
    height: 40,
    borderRadius: 25,
    borderWidth: 5,
    borderColor: "#D3D3D3",
  },
  coinSub: {
    color: "gray",
    marginTop: 3,
    marginLeft: 4,
  },
  coinDetail: {
    margin: 5,
    color: "gray",
  },
  coinAmount: {
    flexDirection: "row",
    marginHorizontal: 15,
    flex: 1.5,
    // backgroundColor: "red",
    alignItems: "center",
  },
  coinValue: {
    fontSize: 20,
    fontWeight: "bold",
    marginRight: 3,
  },
  button: {
    width: "40%",
    height: "50%",
    alignItems: "center",
    justifyContent: "center",
    marginLeft: 130,
    borderRadius: 20,
    backgroundColor: "#F3BA2F",
  },
});
