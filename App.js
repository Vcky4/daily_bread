import React from "react"
import { FlatList, Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"

export default App = () => {
  const data = [
    { week: 1, day: 1, scriptues: "Genesis 1-3" },
    { week: 1, day: 2, scriptues: "Genesis 4-7" },
    { week: 1, day: 3, scriptues: "Genesis 8-11" },
    { week: 1, day: 4, scriptues: "Genesis 12-15" },
    { week: 1, day: 5, scriptues: "Genesis 16-18" },
    { week: 1, day: 6, scriptues: "Genesis 19-21" },
    { week: 1, day: 7, scriptues: "Genesis 22-24" },
    { week: 2, day: 1, scriptues: "Genesis 25-26" },
    { week: 2, day: 2, scriptues: "Genesis 27-29" },
    { week: 2, day: 3, scriptues: "Genesis 30-31" },
    { week: 2, day: 4, scriptues: "Genesis 32-34" },
    { week: 2, day: 5, scriptues: "Genesis 35-37" },
    { week: 2, day: 6, scriptues: "Genesis 38-40" },
    { week: 2, day: 7, scriptues: "Genesis 41-42" },
    { week: 3, day: 1, scriptues: "Genesis 43-45" },
    { week: 3, day: 2, scriptues: "Genesis 46-47" },
    { week: 3, day: 3, scriptues: "Genesis 48-50" },
    { week: 3, day: 4, scriptues: "Exodus 1-3" },
    { week: 3, day: 5, scriptues: "Exodus 4-6" },
    { week: 3, day: 6, scriptues: "Exodus 7-9" },
    { week: 3, day: 7, scriptues: "Exodus 10-12" },
    { week: 4, day: 1, scriptues: "Exodus 13-15" },
  ]
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
        renderItem={({ item, index }) => (
          <View style={{
            width: '100%',
          }}>
            <Text style={{
              fontSize: 18,
              fontWeight: '800',
              marginTop: 20,
              alignSelf: 'center',
              display: data[index - 1]?.week === item.week ? 'none' : 'flex',
            }}>Week {item.week}</Text>
            <View style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              alignItems: 'center',
            }}>
              <Text style={{
                fontSize: 16,
                fontWeight: '500',
                marginTop: 5,
              }}>Day {item.day}</Text>
              <Text style={{
                fontSize: 16,
                fontWeight: '500',
                marginTop: 10,
              }}>{item.scriptues}</Text>
              <View style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
                <BouncyCheckbox
                  size={20}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "blue" }}
                  onPress={(isChecked) => { }}
                />
                <BouncyCheckbox
                  size={20}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "blue" }}
                  onPress={(isChecked) => { }}
                />
                <BouncyCheckbox
                  size={20}
                  fillColor="blue"
                  unfillColor="#FFFFFF"
                  iconStyle={{ borderColor: "blue" }}
                  onPress={(isChecked) => { }}
                />
              </View>
            </View>
          </View>
        )}
        keyExtractor={(item) => `${item.week}-${item.day}`}
      />
    </View>
  )
}