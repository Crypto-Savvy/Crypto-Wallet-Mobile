import { View, Text } from "../components/Themed";
import AutoScroll from "@homielab/react-native-auto-scroll";
import {
  StyleSheet,
  Image,
  TouchableOpacity,
  Animated,
  Dimensions,
  FlatList,
  ListRenderItem,
  ScrollView,
  SectionList,
} from "react-native";
import {
  FontAwesome,
  Feather,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import dummyData from "../constants/dummy";
import { Coin } from "../types";
import { createRef, useEffect } from "react";

let CurrentSlide: number = 0;
let IntervalTime: number = 4000;
let _timerId: ReturnType<typeof setInterval> | null;

export default function HomeScreen() {
  const width = Dimensions.get("window").width;

  const scrollX = new Animated.Value(0);

  let position = Animated.divide(scrollX, width);

  const flatList = createRef<FlatList>();

  useEffect(() => {
    _stopAutoPlay();
    _startAutoPlay();
    return () => {
      _stopAutoPlay();
    };
  }, []);

  const NextPage = () => {
    if (CurrentSlide >= dummyData.length - 1) {
      CurrentSlide = 0;
      flatList?.current?.scrollToIndex({
        index: CurrentSlide,
        animated: true,
      });
    } else {
      flatList?.current?.scrollToIndex({
        index: ++CurrentSlide,
        animated: true,
      });
    }
  };

  const _startAutoPlay = () => {
    _timerId = setInterval(NextPage, IntervalTime);
  };
  const _stopAutoPlay = () => {
    if (_timerId) {
      clearInterval(_timerId);
      _timerId = null;
    }
  };

  // const renderProduct: ListRenderItem<Coin> = ({ item }) => {
  //   return (
  //     <View
  //       style={{
  //         width: "100%",
  //         // alignItems: "center",
  //         flex: 1,
  //         flexWrap: "wrap",
  //       }}
  //     >
  //       <View
  //         style={{ width: "100%", flexDirection: "row", marginHorizontal: 30 }}
  //       >
  //         <View>
  //           <Text>BUSD</Text>
  //           <Text>USD</Text>
  //           <Text>$19,116.69</Text>
  //           <Text>+0.81%</Text>
  //         </View>
  //       </View>
  //     </View>
  //   );
  // };

  const renderProduct: React.FC<Coin> = (data: Coin) => {
    return (
      <ScrollView
        horizontal={true}
        decelerationRate={0.8}
        snapToInterval={width}
        bounces={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
        style={{ width: "30%", flexDirection: "row" }}
      >
        <Text>{data.name}</Text>
      </ScrollView>
    );
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <FontAwesome name="user-o" size={24} color="#00adef" />
        <View style={styles.rightHeader}>
          <Feather name="search" size={24} color="gray" style={styles.search} />
          <MaterialCommunityIcons name="line-scan" size={24} color="gray" />
        </View>
      </View>
      <View style={styles.buyDeposit}>
        <Image
          source={require("../assets/images/crypto.png")}
          style={styles.image}
        />
        <Text style={styles.buyCrypto}>Get Started with crypto</Text>
        <View style={styles.button}>
          <TouchableOpacity
            style={[styles.deposit, { backgroundColor: "#D3D3D3" }]}
          >
            <Text style={styles.textButton}>Deposit</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.deposit}>
            <Text style={styles.textButton}>Buy Crypto</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.ads}>
          <View style={styles.adsInner}>
            <Text style={styles.adsText}>2022 Year in Review</Text>
            <Text style={styles.adsDescription}>
              Discover your #2022withBinance
            </Text>
          </View>
          <Image
            source={require("../assets/images/crypto.png")}
            style={styles.adsImage}
          />
        </View>
      </View>
      <View style={{ flexDirection: "column", marginLeft: 10 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            width: "100%",
            // marginRight: 10,
          }}
        >
          <Text>For Beginners</Text>

          <View
            style={{
              flexDirection: "row-reverse",
              width: "70%",
              // alignItems: "flex-start",
              justifyContent: "flex-start",
              marginTop: 15,
            }}
          >
            <Animated.View
              // key={index}
              style={{
                width: "8%",
                height: 5,
                backgroundColor: "black",
                // opacity,
                marginHorizontal: 4,
                borderRadius: 100,
              }}
            ></Animated.View>
            <Animated.View
              // key={index}
              style={{
                width: "8%",
                height: 5,
                backgroundColor: "black",
                // opacity,
                marginHorizontal: 4,
                borderRadius: 100,
              }}
            ></Animated.View>
          </View>
        </View>
        {dummyData.map((data) => renderProduct(data))}

        {/* <FlatList
          data={dummyData ? dummyData : null}
          horizontal
          renderItem={renderProduct}
          keyExtractor={(item: Coin) => item.id}
          showsHorizontalScrollIndicator={false}
          decelerationRate={0.8}
          snapToInterval={width}
          bounces={false}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            { useNativeDriver: false }
          )}
          ref={flatList}
        /> */}
      </View>
      <View style={styles.coinContainer}>
        <Text style={styles.coinName}>Coin</Text>
        <View style={styles.headerContainer}>
          <Text style={{ fontSize: 15 }}>Hot</Text>
          <Text style={{ fontSize: 15 }}>MarketCap</Text>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>Price</Text>
            <View
              style={{
                marginLeft: 15,
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="caretup"
                size={10}
                color="black"
                style={{
                  margin: -2,
                }}
              />
              <AntDesign
                name="caretdown"
                size={10}
                color="black"
                style={{
                  margin: -2,
                }}
              />
            </View>
          </View>
          <View style={{ flexDirection: "row" }}>
            <Text style={{ fontSize: 15 }}>24H Change</Text>
            <View
              style={{
                marginLeft: 15,
                justifyContent: "center",
              }}
            >
              <AntDesign
                name="caretup"
                size={10}
                color="black"
                style={{
                  margin: -2,
                }}
              />
              <AntDesign
                name="caretdown"
                size={10}
                color="black"
                style={{
                  margin: -2,
                }}
              />
            </View>
          </View>
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
  header: {
    width: "100%",
    flexDirection: "row",
    paddingLeft: 10,
  },
  rightHeader: {
    flex: 1,
    paddingRight: 20,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  search: {
    paddingRight: 40,
  },
  buyDeposit: {
    // flex: 1,
    marginTop: 50,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  button: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
  },
  deposit: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingRight: 20,
    borderRadius: 30,
    backgroundColor: "yellow",
    height: 45,
    margin: 10,
  },
  buyCrypto: {
    marginTop: 30,
    fontSize: 20,
    fontWeight: "500",
  },
  textButton: {
    fontSize: 20,
    fontWeight: "500",
  },
  ads: {
    width: "90%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "#010101",
    margin: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
  },
  adsInner: {
    flexDirection: "column",
    // fontSize: 20,
  },
  adsImage: {
    width: 50,
    height: 50,
  },
  adsText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  adsDescription: {
    color: "gray",
  },
  coinContainer: {
    flexDirection: "column",
    width: "100%",
    margin: 10,
  },
  coinName: {
    fontSize: 20,
    fontWeight: "500",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    position: "relative",
    right: 25,
    top: 10,
  },
});
