import AsyncStorage from "@react-native-async-storage/async-storage"
import { Alert } from "react-native"

export const signup = async (id,name,email,password) =>{
    try {
        const response = await AsyncStorage.setItem("userDetail",JSON.stringify({id,name,email,password}))
        return "User Added Successfully";
    } catch (error) {
     Alert.alert("Error",error);   
    }
}

export const login = async (email,password) =>{
    try {
        const response = await AsyncStorage.getItem("userDetail")
        const parsedRes = JSON.parse(response)  
        if(response===null || response===undefined){
            return "There is no User yet please signup first"
        }
        else if(parsedRes.email!==email){
        return "Email is not matched";          
        }else if(parsedRes.password!==password){
            return "Password is not matched"
        }
        else{
            return "You're Successfully Login"
        }
    } catch (error) {
        return        Alert.alert("Error",error.message);      
    }
}


export const getUserDetail = async () =>{
    try {
        const response = await AsyncStorage.getItem("userDetail")
        return JSON.parse(response);
        
    } catch (error) {
        Alert.alert("Error",error);      
    }
}

export const deleteUserDetail = async () =>{
    try {
        await AsyncStorage.removeItem('userDetail')
    } catch (error) {
        Alert.alert("Error",error.message);      
    }
}


