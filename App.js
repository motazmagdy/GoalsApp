import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {

  const [enteredGoalText,setEnteredGoalText] = useState('')
  const [courseGoals , setCourseGoals] = useState([])

  function goalInputHandler(enteredText){
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler(){
    setCourseGoals((currentCourseGoals)=>{
      [...currentCourseGoals,enteredGoalText]
    })
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} placeholder='Enter your course Goal !' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View style = {styles.goalsContainer}>
        <Text>List of goals .... </Text>
      </View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
    appContainer : {
      flex : 1,
      paddingTop:15,
      paddingHorizontal:16
    },
    inputContainer : {
      flex :1,
      flexDirection:'row',
      justifyContent:'space-between',
      alignItems:'center',
      marginBottom:5,
      borderBottomWidth:1,
      borderBottomColor : '#cccccc'
    },
    textInput : {
      borderWidth:1,
      borderColor :'#cccccc',
      width :'70%',
      marginRight:8,
      padding:8
    },
    goalsContainer : {
      flex : 3
    }
});
