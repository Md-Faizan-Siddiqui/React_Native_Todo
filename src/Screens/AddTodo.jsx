import React, { useState, useContext } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import BottomTab from '../Components/BottomTab';
import { useNavigation } from '@react-navigation/native';
import CheckmarkDoneIcon from "react-native-vector-icons/Ionicons"
import TodoContext from '../Context/Todo/TodoContext';
import { Todo_List } from '../Navigation/Path';

const AddTodo = () => {
    const [text, setText] = useState("");
    const { addTodo } = useContext(TodoContext);
    const { navigate } = useNavigation()

    const handleTodo = () => {
        addTodo({ text, isDone: false });
        setText("");
        navigate(Todo_List)
    };
    return (
        <>
            <View style={[style.container]}>
                <View style={[style.addTodoCard]}>
                    <Text style={[style.header]}>Add Task</Text>
                    <View style={[style.inputMain]}>
                        <TextInput
                            placeholder='Todo Text'
                            placeholderTextColor="#fff"
                            value={text}
                            onChangeText={(value) => setText(value)}
                            style={[style.inputField]}
                        />
                        <TouchableOpacity style={[style.subBtn]} onPress={handleTodo}>
                            <CheckmarkDoneIcon name='checkmark-done-circle' style={[style.addIcon]} />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <BottomTab />
        </>
    )
}

export default AddTodo

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000",
        padding: 10,
        justifyContent: "center"
    },

    addTodoCard: {
        backgroundColor: "#363636",
        padding: 10,
        borderRadius: 10
    },
    inputMain: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    header: {
        alignSelf: "center",
        fontSize: 18,
        color: "#fff",
        marginBottom: 20,
    },
    addIcon: {
        fontSize: 30,
        color: '#8685E7'
    },
    inputField: {
        width: 100,
        borderColor: "#979797",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flex: 1,
        marginEnd: 10,
        color: "#fff",
    },
});
