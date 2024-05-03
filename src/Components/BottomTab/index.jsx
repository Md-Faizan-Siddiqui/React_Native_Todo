import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Icon from "react-native-vector-icons/Ionicons"
import { useNavigation } from '@react-navigation/native'
import { Add_Todo, Edit_Todo, Todo_List } from '../../Navigation/Path'



const TABS = [
  {
    title: "Home",
    path: Todo_List,
    icon: "home-outline",
    selectedIcon: "home"
  },
  // {
  //   title: "Calendar",
  //   path: "path",
  //   icon: "calendar-outline",
  //   selectedIcon: "calendar"
  // },
  {
    title: "",
    path: Add_Todo,
    icon: "add",
    selectedIcon: "",
  },
  {
    title: "Focuse",
    path: Edit_Todo,
    icon: "stopwatch-outline",
    selectedIcon: "stopwatch"
  },
  // {
  //   title: "Profile",
  //   path: "path",
  //   icon: "person-outline",
  //   selectedIcon: "person"
  // },
]

const BottomTab = () => {
  const { navigate } = useNavigation()
  return (
    <View style={[styles.main]}>
      {/* <CustomModal /> */}
      {TABS?.map((items, index) => {
        return (
          <TouchableOpacity key={index} onPress={() =>navigate(items?.path)} style={[items?.path === "AddTodo" ? styles.addBtn : styles.tabMain]}>
            <View style={[styles.iconMain]}>
              <Icon name={items?.icon}
                style={[items?.path === "AddTodo" ? { marginBottom: 0, fontSize: 32, color: '#fff' } : styles.icon]} />
            </View>
            {items?.path == "AddTodo" ? "" : <Text style={[styles.text]}>{items?.title}</Text>}
          </TouchableOpacity>
        )
      })}
    </View>
  )
}

export default BottomTab

const styles = StyleSheet.create({
  main: {
    flexDirection: 'row',
    backgroundColor: "#363636",
    width: "100%",
    height: 100,
    // borderRadius:20,
    alignSelf: "center",
    // position: 'absolute',
    // bottom: 0,
    paddingHorizontal: 25,
    justifyContent: "space-between"
  },
  tabMain: {
    padding: 10,
    alignItems: 'center'
  },
  iconMain: {
    // marginBottom: 8
  },
  icon: {
    fontSize: 24,
    color: '#fff',
    marginBottom: 8
  },
  text: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 400,
  },
  addBtn: {
    backgroundColor: "#8687E7",
    width: 64,
    height: 64,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    marginTop: -30
  }
})