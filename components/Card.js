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
    width:"326px",
    height:"500px",
    borderRadius:5,
    justifyContent: "center",
    alignItems: "center",
  },
});
