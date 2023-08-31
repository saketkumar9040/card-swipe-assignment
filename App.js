import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Swiper from "react-native-deck-swiper";
import { data } from "./assets/data";
import Card from "./components/Card";
import { Entypo ,FontAwesome} from '@expo/vector-icons';

export default function App() {
  
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <Swiper
        cards={data}
        cardIndex={index}
        renderCard={(card) => <Card data={card} />}
        onSwiped={()=>{setIndex((index+1)%data.length)}}
        infinite
        stackSize={5}
        stackScale={5}
        stackSeparation={20}
        backgroundColor={'#fff'}
        verticalSwipe={false}
        overlayLabels={{
          left:{
            element:<Entypo name="circle-with-cross" size={60} color="red" />,
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-end',
                justifyContent: 'flex-start',
                paddingRight:5,
              }
            }
          },
          right:{
            element:<FontAwesome name="check-circle" size={60} color="green" />,
            style: {
              wrapper: {
                flexDirection: 'column',
                alignItems: 'flex-start',
                justifyContent: 'flex-start',
                paddingLeft:5,
              }
            }
          }
        }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop:80,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
