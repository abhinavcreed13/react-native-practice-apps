import React, { useState, useRef, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  ScrollView,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-style";
import MainButton from "../components/MainButton";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const randNum = Math.floor(Math.random() * (max - min) + min);
  if (randNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randNum;
  }
};

const renderListItem = (value, numOfRound) => {
  return (
    <View key={value} style={styles.listItem}>
      <BodyText>#{numOfRound}</BodyText>
      <BodyText>{value}</BodyText>
    </View>
  );
};

const renderListItem2 = (listLength, itemData) => {
  return (
    <View style={styles.listItem}>
      <BodyText>#{listLength - itemData.index}</BodyText>
      <BodyText>{itemData.item}</BodyText>
    </View>
  );
};

const GameScreen = props => {
  const initialGuess = generateRandomBetween(
    1,
    100,
    props.userChoice
  ).toString();
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [pastGuesses, setPastGuesses] = useState([initialGuess]);

  // this survives component re-render
  const currentLow = useRef(1);
  const currentHigh = useRef(100);

  const { userChoice, onGameOver } = props;

  // function call after component re-renders
  // effect will only re-run if dependency changes (2nd function property)
  useEffect(() => {
    if (currentGuess === props.userChoice) {
      onGameOver(pastGuesses.length);
    }
  }, [currentGuess, userChoice, onGameOver]);

  const nextGuessHandler = direction => {
    if (
      (direction == "lower" && currentGuess < props.userChoice) ||
      (direction == "greater" && currentGuess > props.userChoice)
    ) {
      Alert.alert("Don't lie!", "You know that this is wrong..", [
        { text: "Sorry!", style: "cancel" }
      ]);
      return;
    }
    if (direction == "lower") {
      currentHigh.current = currentGuess;
    } else {
      currentLow.current = currentGuess + 1;
    }
    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );
    setCurrentGuess(nextNumber);
    //setRounds(curRounds => curRounds + 1);
    setPastGuesses(curPastGuesses => [
      nextNumber.toString(),
      ...curPastGuesses
    ]);
  };

  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonCard}>
        <View style={styles.buttonContainer}>
          <MainButton onPress={nextGuessHandler.bind(this, "lower")}>
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          <MainButton onPress={nextGuessHandler.bind(this, "greater")}>
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </View>
      </Card>
      <View style={styles.listContainer}>
        {/* <ScrollView contentContainerStyle={styles.list}>
          {pastGuesses.map((guess, idx) =>
            renderListItem(guess, pastGuesses.length - idx)
          )}
        </ScrollView> */}
        <FlatList
          keyExtractor={item => item}
          data={pastGuesses}
          renderItem={renderListItem2.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center"
  },
  buttonCard: {
    marginTop: 20
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    width: 400,
    maxWidth: "90%"
  },
  listContainer: {
    flex: 1,
    width: "60%"
  },
  list: {
    flexGrow: 1,
    //alignItems: "center",
    justifyContent: "flex-end"
  },
  listItem: {
    borderColor: "#ccc",
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%"
  }
});

export default GameScreen;
