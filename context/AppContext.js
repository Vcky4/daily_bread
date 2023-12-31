import AsyncStorage from "@react-native-async-storage/async-storage";
import { createContext, useEffect, useState } from "react";
import chapters from "../src/data";

export const AppContext = createContext(null)

export const AppProvider = ({ children }) => {
    const [data, setData] = useState([])

    const updateData = (index, read) => {
        const newData = [...data]
        if (newData[index].read.includes(read)) {
            newData[index].read = [...newData[index].read.filter((item) => item !== read)]
        } else {
            newData[index].read = [...newData[index].read, read]
        }
        setData(newData)
        AsyncStorage.setItem('data', JSON.stringify(newData))
    }
    useEffect(() => {
        AsyncStorage.getItem('data').then((data) => {
            if (data) {
                setData(JSON.parse(data))
            } else {
                setData(chapters)
            }
        })
    }, [])

    return (
        <AppContext.Provider value={{ data, updateData }}>
            {children}
        </AppContext.Provider>
    )
}