import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext } from 'react'
import BottomTab from '../Components/BottomTab'
import TodoContext from '../Context/Todo/TodoContext'
import { useNavigation } from '@react-navigation/native'
import { Edit_Todo } from '../Navigation/Path'

const TodoList = () => {
  const { todos, deleteTodo, editTodo } = useContext(TodoContext)
  const { navigate } = useNavigation()

  const handleEditTodo = (index, itemText) => {
    navigate(Edit_Todo, { TodoInd: index, itemText: itemText })
  }

  const handleDone = (ind) => {
    const updatedTodos = [...todos];
    updatedTodos[ind].isDone = !updatedTodos[ind].isDone;
    editTodo(updatedTodos);
  };

  return (<>
    <View style={[styles.todoItemMain]}>
      {!todos?.length ? <Text style={[styles.todoItemText]}>No Data Found</Text> : todos?.map((item, ind) => (
        <View key={ind} style={[styles.todoItemCard]}>
          <Text style={[styles.todoItemText, item.isDone ? styles.MAD : { textDecorationLine: "none" }]}>{item.text}</Text>
          <View style={[styles.todoItemAction]}>
            <TouchableOpacity style={[styles.actionBtns]} onPress={() => handleEditTodo(ind, item.text)}><Text style={[styles.btnText]}>Edit</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtns]} onPress={() => handleDone(ind)}><Text style={[styles.btnText]}>Mark As Done</Text></TouchableOpacity>
            <TouchableOpacity style={[styles.actionBtns]} onPress={() => deleteTodo(ind)}><Text style={[styles.btnText]}>Delete</Text></TouchableOpacity>
          </View>
        </View>
      ))}
    </View>
    <BottomTab />
  </>
  )
}

export default TodoList

const styles = StyleSheet.create({
  todoItemMain: {
    padding: 20,
    backgroundColor: '#000',
    flex: 1

  },
  MAD: {
    textDecorationLine: "line-through"
  },
  todoItemCard: {
    backgroundColor: "#363636",
    height: 72,
    width: "100%",
    marginBottom: 10,
    borderRadius: 4,
    padding: 10
  },
  todoItemText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: 400,
    marginBottom: 5
  },
  todoItemAction: {
    flexDirection: 'row',
    justifyContent: "flex-end"
  },
  actionBtns: {
    marginRight: 10,
    backgroundColor: '#FF8080',
    paddingHorizontal: 10,
    paddingVertical: 3,
    borderRadius: 4,
  },
  btnText: {
    color: '#fff'
  }

})