import React from "react";
import { Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
export default ScheduleItem = ({ data, item, index }) => {
    return (
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
    )
}