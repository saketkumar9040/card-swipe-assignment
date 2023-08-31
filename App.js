import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { data } from "./assets/data";
import Card from "./components/Card";

export default function App() {
  
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card data={card} />}
        onSwiped={()=>{setIndex(index+1)}}
        stackSize={5}
        stackScale={19}
        stackSeparation={10}
        backgroundColor={'#fff'}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
