import { StyleSheet , Text, View, Pressable } from 'react-native';

function GoalItem(props) {
    return (
        <View style={styles.goalItem} >
            <Pressable 
            android_ripple={{ color : '#dddddd'}} 
            onPress={props.onDeleteItem.bind(this,props.id)}
            style= {({pressed})=> pressed && styles.pressedItem}
            >
                <Text style={styles.goalText} >{props.text}</Text>
            </Pressable>
            </View>
      )
}

export default GoalItem;

const styles = StyleSheet.create({
    goalItem : {
        margin:10,
        borderRadius:6,
        backgroundColor :'#0275d8',
        borderColor:'#dddddd'
    },
    pressedItem : {
        opacity : 0.5
    },
    goalText : {
        padding :5,
        color : 'white'
      }
})