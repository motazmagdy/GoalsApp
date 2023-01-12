import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal,Image } from "react-native";

function GoalInput(props) {
  const [enteredGoalText, setEnteredGoalText] = useState("");

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  }

  function addGoalHandler() {
    props.onAddGoal(enteredGoalText);
    setEnteredGoalText("");
  }

  return (
    <Modal visible={props.visible} animationType='slide'>
      <View style={styles.inputContainer}>
        <Image source={require('../assets/images/goal.png')}  style={styles.image}/>
        <TextInput
          style={styles.textInput}
          placeholder="Enter your course Goal !"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.buttonContainer}>
          <View style = {styles.buttonView}>
            <Button title='Cancel' color='#df4759' onPress={props.onCancel}/>
          </View>
          <View style = {styles.buttonView}>
            <Button title="Add Goal" color='#42ba96' onPress={addGoalHandler} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding:10,
    backgroundColor : '#00aaee'
  },
  image : {
    width:80 ,
    height : 80,
    margin:20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor : "#e4d0ff",
    color : "120438",
    width: "100%",
    padding:8,
    borderRadius : 6,
    marginTop:15
  },
  buttonContainer : {
    flexDirection : 'row',
    marginTop : 25
  },
  buttonView : {
    marginHorizontal:8,
    width : '30%'
  }
});

export default GoalInput;
