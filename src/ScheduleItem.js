import React, { useContext, useEffect, useState } from "react";
import { Text, View } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import { AppContext } from "../context/AppContext";
export default ScheduleItem = ({ data, item, index }) => {
    const { updateData } = useContext(AppContext)
    const [isChecked, setIsChecked] = useState(0)
    useEffect(() => {
        if (isChecked > 0) {
            updateData(index, isChecked)
        }
    }, [isChecked])
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
                        isChecked={item?.read?.includes(1)}
                        iconStyle={{ borderColor: "blue" }}
                        onPress={(isChecked) => {
                            setIsChecked(1)

                        }}
                    />
                    <BouncyCheckbox
                        size={20}
                        fillColor="blue"
                        unfillColor="#FFFFFF"
                        isChecked={item.read.includes(2)}
                        iconStyle={{ borderColor: "blue" }}
                        onPress={(isChecked) => {
                            setIsChecked(2)
                        }}
                    />
                    <BouncyCheckbox
                        size={20}
                        fillColor="blue"
                        unfillColor="#FFFFFF"
                        isChecked={item.read.includes(3)}
                        iconStyle={{ borderColor: "blue" }}
                        onPress={(isChecked) => {
                            setIsChecked(3)
                        }}
                    />
                </View>
            </View>
        </View>
    )
}