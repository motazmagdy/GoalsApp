import { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

function GoalInput (props) {
  const [ enteredGoalText , setEnteredGoalText ] = useState('')

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText)
  }

  function addGoalHandler (){
    props.onAddGoal(enteredGoalText)
    setEnteredGoalText('')
  }
  
    return (
        <View style={styles.inputContainer}>
            <TextInput 
            style={styles.textInput} 
            placeholder='Enter your course Goal !' 
            onChangeText={goalInputHandler}
            value ={enteredGoalText}
            />
            <Button title='Add Goal' onPress={addGoalHandler}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
    }
})

export default GoalInput ;