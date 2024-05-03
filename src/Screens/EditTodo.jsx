import React, { useContext, useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import TodoContext from "../Context/Todo/TodoContext";
import BottomTab from "../Components/BottomTab";


const EditTodo = () => {
    const { todos, editTodo } = useContext(TodoContext);
    const navigation = useNavigation();
    const route = useRoute();
    const { TodoInd,itemText } = route.params;

    const [editedText, setEditedText] = useState(itemText);

    // useEffect(() => {
    //     if (todos && todos[todoIndex]) {
    //         setEditedText(todos[todoIndex].text);
    //     }
    // }, [todos, todoIndex]);

    const handleEdit = () => {
        editTodo(TodoInd, editedText);
        navigation.goBack();
    };

    return (
        <>
            <View style={[styles.container]}>
                <TextInput
                    value={editedText}
                    onChangeText={setEditedText}
                    placeholder="Edit Todo"
                />
                <Button title="Save" onPress={handleEdit} />
            </View>
            <BottomTab />
        </>
    );
};

export default EditTodo;
const styles = StyleSheet.create({
    container: {
        flex: 1
    },
})
