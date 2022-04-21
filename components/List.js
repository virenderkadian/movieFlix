import React from "react";
import {
  LayoutAnimation,
  SafeAreaView,
  StyleSheet,
  View,
  FlatList,
  Text,
  Image,
  TouchableOpacity,
} from "react-native";
import { Feather, Entypo } from "@expo/vector-icons";

const Item = (props) => {
  return (
    <TouchableOpacity
      onPress={() => {
        props.navigation.navigate("Details", { data: props.data });
      }}
    >
      <View style={styles.item}>
        <View style={styles.itemView}>
          <Image
            style={{ height: 120, width: 90, borderRadius: 3 }}
            source={{
              uri: "https://image.tmdb.org/t/p/w342" + props.data.poster_path,
            }}
          />
          <View style={styles.headerItem}>
            <Text style={styles.title}>{props.data.title}</Text>
            <Text style={styles.details}>{props.data.overview}</Text>
          </View>
          <Entypo
            name="circle-with-cross"
            size={20}
            color="#705d24"
            onPress={props.removeItem}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default (props) => {
  const onRefresh = () => {
    props.setrefreshing(true);
    props.refreshList();
  };

  const layoutAnimConfig = {
    duration: 300,
    update: {
      type: LayoutAnimation.Types.easeInEaseOut,
    },
    delete: {
      duration: 100,
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
  };

  const removeItem = (id) => {
    console.log("Icame");
    let arr = props.data.filter(function (item) {
      return item.id !== id;
    });
    props.setJSONData(arr);
    // after removing the item, we start animation
    LayoutAnimation.configureNext(layoutAnimConfig);
  };

  const renderItem = ({ item }) => {
    // when no input in searchphrase and filter phrase, show all
    if (props.searchPhrase === "") {
        LayoutAnimation.configureNext(layoutAnimConfig);
      return (
        <Item
          data={item}
          navigation={props.navigation}
          removeItem={() => {
            removeItem(item.id);
          }}
        />
      );
    }
    // when searchphrase is not null, show all searched item from title
    if (props.searchPhrase != "") {
        LayoutAnimation.configureNext(layoutAnimConfig);
      // filter of the title
      if (
        item.title
          .toUpperCase()
          .includes(props.searchPhrase.toUpperCase().trim().replace(/\s/g, ""))
      ) {
        return (
          <Item
            data={item}
            navigation={props.navigation}
            removeItem={() => {
              removeItem(item.id);
            }}
          />
        );
      }
    }
  };
  return (
    <SafeAreaView style={styles.list__container}>
      <View
        onStartShouldSetResponder={() => {
          props.setClicked(false);
        }}
      >
        <FlatList
          data={props.data}
          onRefresh={() => onRefresh()}
          refreshing={props.refreshing}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  list__container: {
    backgroundColor: "#d4b148",
    width: "100%",
    marginBottom: 150,
    height:"100%",
  },
  item: {
    borderBottomWidth: 1,
    borderBottomColor: "grey",
  },
  itemView: {
    flex: 1,
    flexDirection: "row",
    margin: 10,
  },
  headerItem: {
    flex: 1,
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "space-between",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
    fontStyle: "italic",
  },
  details: {
    height: 85,
  },
});
