import React, { useState, useContext } from 'react';
import { Button, StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import BottomTab from '../Components/BottomTab';
import { useNavigation } from '@react-navigation/native';
import CheckmarkDoneIcon from "react-native-vector-icons/Ionicons"
import TodoContext from '../Context/Todo/TodoContext';
import { Todo_List } from '../Navigation/Path';

const AddTodo = () => {
    const [todo, setTodo] = useState([]);
    const [text, setText] = useState("");
    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);
    const [editText, setEditText] = useState("");
    const { navigate } = useNavigation()
    // const data = useContext(TodoContext)
    // console.log(data.name,"data.name")
    const { addTodo } = useContext(TodoContext);

    const handleTodo = () => {
        // setTodo([...todo, { text, isDone: false }]);
        addTodo({ text, isDone: false });
        setText("");
        navigate(Todo_List)
    };

    const handleEdit = (index) => {
        setIsEditing(true);

        if (isEditing) {
            const updatedTodos = [...todo];
            updatedTodos[editIndex] = { ...updatedTodos[editIndex], text: editText };
            setTodo(updatedTodos);
            setIsEditing(false);
            setEditText("");
        }
        setEditIndex(index);
        setEditText(todo[index].text);
    };

    // const handleDelete = (index) => {
    //     const updatedTodos = [...todo];
    //     updatedTodos.splice(index, 1);
    //     setTodo(updatedTodos);
    // };

    const handleDone = (index) => {
        const updatedTodos = [...todo];
        updatedTodos[index].isDone = !updatedTodos[index].isDone;
        setTodo(updatedTodos);
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
                            {/* <Text>Add Todo</Text> */}
                            <CheckmarkDoneIcon name='checkmark-done-circle' style={[style.addIcon]} />
                        </TouchableOpacity>
                    </View>
                </View>
                {/* <View>
                    <Text>Items</Text>
                    <View>
                        {todo.map((data, index) => (
                            <View style={[style.items]} key={index}>
                                <TextInput
                                    style={[style.todoText, data.isDone ? style.MAD : { textDecorationLine: "none" }]}
                                    value={index === editIndex && isEditing ? editText : data.text}
                                    editable={index === editIndex && isEditing}
                                    onChangeText={(value) => setEditText(value)}
                                />
                                <Button title={isEditing ? 'Update Todo' : 'Edit'} onPress={() => handleEdit(index)} />
                                <Button title='Mark as Done' onPress={() => handleDone(index)} />
                                <Button title='Delete' onPress={() => handleDelete(index)} />
                            </View>
                        ))}
                    </View>
                </View> */}
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
    items: {
        flexDirection: "row"
    },
    MAD: {
        textDecorationLine: "line-through"
    },
    todoText: {
        flex: 1,
        marginRight: 10,
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
        // backgroundColor: "#fff",
        width: 100,
        borderColor: "#979797",
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
        flex: 1,
        marginEnd: 10,
        color: "#fff",
    },
    subBtn: {

    }
});
