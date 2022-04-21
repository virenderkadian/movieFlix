import React, { useState, useEffect } from "react";
import { View, Text, SafeAreaView, Dimensions, Platform } from "react-native";
import List from "../components/List";
import SearchBar from "../components/SearchBar";

export default ({ navigation }) => {
  const [jsonData, setJSONData] = useState();
  const [searchPhrase, setSearchPhrase] = useState("");
  const [clicked, setClicked] = useState(false);
  const [refreshing, setrefreshing] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const apiResponse = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?api_key=a07e22bc18f5cb106bfe4cc1f83ad8ed"
    );
    const data = await apiResponse.json();
    setJSONData(data.results);
    setrefreshing(false);
  };

  const props = {
    navigation,
    setSearchPhrase,
    clicked,
    refreshing,
    setrefreshing,
    data: jsonData,
    refreshList: getData,
    searchPhrase,
    setClicked,
    setJSONData,
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#bf9f3f",
        height: Dimensions.get("window").height,
      }}
    >
      <View
        style={{
          position: "relative",
          marginTop: Platform.OS == "android" ? 27 : -12,
        }}
      >
        <SearchBar {...props} />
        <List {...props} />
      </View>
    </SafeAreaView>
  );
};
