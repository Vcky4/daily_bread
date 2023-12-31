import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import chapters from "../src/data";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [achievements, setAchivements] = useState([])
    const [data, setData] = useState([])

    const updateAchivements = (achievement) => {
        setAchivements([...achievements, achievement])
        AsyncStorage.setItem('achievements', JSON.stringify([...achievements, achievement]))
    }

    useEffect(() => {
        AsyncStorage.getItem('achievements').then((data) => {
            if (data) {
                setAchivements(JSON.parse(data))
            }
        })
        AsyncStorage.getItem('data').then((data) => {
            if (data) {
                setData(JSON.parse(data))
            } else {
                setData(chapters)
            }
        })
    }, [])

    return (
        <AppContext.Provider value={{ achievements, updateAchivements }}>
            {children}
        </AppContext.Provider>
    )
}