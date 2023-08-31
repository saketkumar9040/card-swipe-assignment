import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Card = ({ data }) => {
  return (
    <View style={{...styles.cardContainer,backgroundColor:data.color}}>
      <Text>{data.name}</Text>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardContainer: {
    flex: 0.7,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    justifyContent: "center",
    alignItems: "center",
  },
});
