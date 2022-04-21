import React from "react";
import {
    LayoutAnimation,
  StyleSheet,
  TextInput,
  View,
  Keyboard,
  Text,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

export default ({ clicked, searchPhrase, setSearchPhrase, setClicked }) => {
    const layoutAnimConfig = {
        duration: 300,
        create:{  duration:300,
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,},
        update: {
            duration:200,
            type: LayoutAnimation.Types.easeInEaseOut,
            property: LayoutAnimation.Properties.opacity,
        },
        delete: {
          duration: 100,
          type: LayoutAnimation.Types.easeInEaseOut,
          property: LayoutAnimation.Properties.opacity,
        },
      };
      const animate = () => {
        LayoutAnimation.configureNext(layoutAnimConfig);
      };
  return (
    <View style={styles.container}>
      <View
        style={
          !clicked ? styles.searchBar__unclicked : styles.searchBar__clicked
        }
      >
        <Feather
          name="search"
          size={20}
          color="black"
          style={{ marginLeft: searchPhrase == "" ? 1 : 7.5 }}
        />
        <TextInput
          style={styles.input}
          placeholder="Search"
          value={searchPhrase}
          onChangeText={setSearchPhrase}
          onFocus={() => {
            setClicked(true);
            animate();
          }}
        />
        {searchPhrase != "" && clicked ? (
          <Entypo
            name="circle-with-cross"
            size={20}
            color="black"
            style={{ right: 12 }}
            onPress={() => {
                animate();
              setSearchPhrase("");
            }}
          />
        ) : (
          <></>
        )}
      </View>
      {clicked && (
        <View>
          <Text
            style={{ marginLeft: 7, fontSize: 20 }}
            title="Cancel"
            onPress={() => {
              Keyboard.dismiss();
              setClicked(false);
              animate();
            }}
          >
            Cancel
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 4,
    flexDirection: "row",
    height: 57,
    borderBottomColor: "grey",
    backgroundColor: "#bf9f3f",
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
  searchBar__unclicked: {
    padding: 4,
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#d9dbda",
    borderRadius: 7,
    alignItems: "center",
  },
  searchBar__clicked: {
    padding: 4,
    flexDirection: "row",
    width: "80%",
    backgroundColor: "#d9dbda",
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "space-evenly",
  },
  input: {
    height:26,
    fontSize: 17,
    marginLeft: 10,
    paddingLeft: 8,
    width: "90%",
  },
});
