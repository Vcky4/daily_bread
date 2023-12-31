import React, { useContext } from "react"
import { FlatList, Text, View } from "react-native"
import ScheduleItem from "./src/ScheduleItem"
import { AppContext, AppProvider } from "./context/AppContext"


const AppContent = () => {
  const { data, updateData } = useContext(AppContext)
  return (
    <View style={{
      flex: 1,
      paddingStart: 20,
      paddingVertical: 10,
    }}>
      <Text style={{
        fontSize: 30,
        fontWeight: "bold",
      }}>Daily Bread</Text>
      <Text style={{
        fontSize: 20,
        fontWeight: '600',
        marginTop: 10,
      }}>Schedule</Text>

      <FlatList
        data={data}
        renderItem={({ item, index }) => <ScheduleItem data={data} item={item} index={index} />}
        keyExtractor={(item) => `${item.week}-${item.day}`}
      />
    </View>
  )
}

export default App = () => {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
