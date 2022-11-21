import Main from "./screens/Main";
import "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./screens/Home";

const Stack = createStackNavigator()

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{headerShown:false}}>
        <Stack.Screen name="Home" component={Home}/>
        <Stack.Screen name="Main" component={Main}/>

      </Stack.Navigator>
    </NavigationContainer>
    )
}