import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View, Image, Button, Icon } from "react-native"

import {
    NavigationContainer,
    StackActions,
    useNavigationContainerRef,
} from "@react-navigation/native"
import { createNativeStackNavigator } from "@react-navigation/native-stack"
import LoginScreen from "./screens/LoginScreen"
import HomeScreen from "./screens/HomeScreen"
import WelcomeScreen from "./screens/WelcomeScreen"
import SignupScreen from "./screens/SignupScreen"
import AuthScreen from "./screens/AuthScreen"
import SettingsScreen from "./screens/SettingsScreen"
import { useNavigation } from "@react-navigation/native"
import {
    HeaderButtons,
    HeaderButton,
    Item,
    HiddenItem,
    OverflowMenu,
} from "react-navigation-header-buttons"
import { Ionicons } from "@expo/vector-icons"

const Stack = createNativeStackNavigator()

const IoniconsHeaderButton = (props) => (
    // the `props` here come from <Item ... />
    // you may access them and pass something else to `HeaderButton` if you like
    <HeaderButton IconComponent={Ionicons} iconSize={23} {...props} />
)

const ReusableItem = ({ onPress }) => <Item title="Edit" onPress={onPress} />

const ReusableHiddenItem = ({ onPress }) => <HiddenItem title="hidden2" onPress={onPress} />

export default function App() {
    // const navigation = useNavigation();

    // const HandelSettingsButton = ()=> {
    //   navigation.replace("Settings");
    // }
    const navigationRef = useNavigationContainerRef()
    return (
        <NavigationContainer ref={navigationRef}>
            <Stack.Navigator>
                {/* <Stack.Screen options={{ headerShown: false }} name="Auth" component={AuthScreen} /> */}
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Welcome"
                    component={WelcomeScreen}
                />
                {/* <Stack.Screen options={{headerShown: true}} name="Login" component={LoginScreen} />
        <Stack.Screen options={{headerShown: true}} name="Signup" component={SignupScreen} /> */}
                <Stack.Screen
                    options={{
                        headerShown: true,
                        headerTitle: () => (
                            <Image
                                style={{ width: 130, height: 40 }}
                                source={require("./assets/logo.png")}
                            />
                        ),
                        headerRight: () => (
                            // <Button
                            //     onPress={() => navigationRef.navigate("Settings")}
                            //     title="Info"
                            //     color="#000000"
                            //     icon={{ name: "filter-list", style: { marginRight: 0 } }}
                            // >
                            //     {/* <Text style={{ color: "red", fontSize: 18 }}>HIDE</Text>
                            //     <Icon name={"md-setting"} style={{ color: "red", fontSize: 18 }} /> */}
                            // </Button>
                            <HeaderButtons HeaderButtonComponent={IoniconsHeaderButton}>
                                <Item
                                    title="search"
                                    iconName="settings"
                                    onPress={() => navigationRef.navigate("Settings")}
                                />
                                {/* <ReusableItem onPress={() => alert("Edit")} /> */}
                                {/* <OverflowMenu
                                    style={{ marginHorizontal: 10 }}
                                    OverflowIcon={({ color }) => (
                                        <Ionicons name="ios-more" size={23} color={color} />
                                    )}
                                >
                                    <HiddenItem title="hidden1" onPress={() => alert("hidden1")} />
                                    <ReusableHiddenItem onPress={() => alert("hidden2")} />
                                </OverflowMenu> */}
                            </HeaderButtons>
                        ),
                    }}
                    name="Home"
                    component={HomeScreen}
                />
                <Stack.Screen
                    options={{ headerShown: true }}
                    name="Settings"
                    component={SettingsScreen}
                />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
})
