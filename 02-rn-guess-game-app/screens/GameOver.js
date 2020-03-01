import React from "react";
import { View, Text, StyleSheet, Button, Image } from "react-native";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
const GameOver = props => {
  return (
    <View style={styles.screen}>
      <TitleText>The Game is Over!</TitleText>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/success.png")}
          resizeMode="cover"
        />
        {/* react native cannot determine width and height of URI images */}
        {/* <Image
          fadeDuration={1000}
          style={styles.image}
          source={{
            uri:
              "https://s3.amazonaws.com/images.gearjunkie.com/uploads/2018/05/matterhorn-3x2.jpg"
          }}
          resizeMode="cover"
        /> */}
      </View>
      <View style={styles.resultContainer}>
        <BodyText style={styles.resultText}>
          Your phone needed{" "}
          <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to
          guess the number{" "}
          <Text style={styles.highlight}>{props.userNumber}</Text>
        </BodyText>
      </View>
      <Button title="NEW GAME" onPress={props.onRestart} />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  imageContainer: {
    borderRadius: 150,
    borderWidth: 3,
    borderColor: "black",
    width: 300,
    height: 300,
    overflow: "hidden",
    margin: 30
  },
  image: {
    width: "100%",
    height: "100%"
  },
  highlight: {
    color: Colors.primary
  },
  resultContainer: {
      marginHorizontal: 20,
      marginVertical: 15
  },
  resultText: {
      textAlign: 'center',
      fontSize: 20
  }
});

export default GameOver;
