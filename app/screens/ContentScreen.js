import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import colors from "../config/colors";

const ContentScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.bg}>
        <Text>{props.route.params.items.taskName}</Text>
        <View style={styles.box}>
          <Text style={styles.text}>
            {props.route.params.items.taskDescription}
          </Text>
        </View>
        <View style={styles.imgbox}>
          <Image
            source={{
              uri: props.route.params.items.taskUrl,
            }}
            style={styles.logo}
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: colors.primary,
    flexGrow: 1,
    paddingTop: 50,
    padding: 20,
    alignContent: "center",
    alignItems: "center",
  },
  box: {
    width: "100%",
    height: 200,
    backgroundColor: colors.white,
    elevation: 10,
    margin: 20,
    borderRadius: 20,
    borderBottomEndRadius: 40,
    padding: 20,
  },
  container: {
    flex: 1,
  },
  imgbox: {
    width: "100%",
    height: 200,
    backgroundColor: colors.white,
    elevation: 10,
    margin: 0,
    borderRadius: 20,
    borderBottomEndRadius: 40,
    overflow:"hidden"
  },
  logo:{
      height:200,
      width:"100%",

  },
  text: {
    fontSize: 18,
    color: colors.primary,
  },
});
export default ContentScreen;
