import React from "react";
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Dimensions,
  ScrollView,
} from "react-native";
import { Foundation, MaterialIcons } from "@expo/vector-icons";

export default (props) => {
  const data = props.route.params.data;
  let date = new Date(data.release_date).toDateString().split(" ");
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        style={styles.image}
        source={{ uri: "https://image.tmdb.org/t/p/w342" + data.poster_path }}
      >
        <ScrollView style={styles.scrollview}>
          <View style={styles.detail_container}>
            <Text style={styles.title}>{data.title}</Text>
            <Text style={styles.date}>
              {date[1]} {date[2]},
              <Text style={{ fontWeight: "bold" }}> {date[3]}</Text>{" "}
            </Text>
            <View style={styles.ratingduration}>
              <Text style={{ color: "white", fontSize: 14 }}>
                <Foundation name="crown" size={17} color="white" />{" "}
                {data.vote_average}
              </Text>
              <Text style={{ color: "white", fontSize: 14 }}>
                <MaterialIcons name="alarm" size={17} color="white" /> 2 hr 22
                mins
              </Text>
            </View>
            <Text style={styles.title}>{data.overview}</Text>
          </View>
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  scrollview: {
    marginTop: 140,
    height: Dimensions.get("window").height,
  },
  detail_container: {
    marginHorizontal: 40,
    borderRadius: 4,
    flex: 1,
    paddingLeft: 4,
    paddingTop: 4,
    paddingRight: 24,
    marginTop: 350,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0",
  },
  title: {
    color: "white",
    fontSize: 14,
    paddingTop: 14,
    paddingLeft: 8,
    paddingBottom: 14,
    fontWeight: "bold",
  },
  date: {
    color: "white",
    fontSize: 10,
    paddingLeft: 8,
  },
  ratingduration: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    paddingLeft: 8,
    paddingTop: 4,
    justifyContent: "space-between",
  },
});
