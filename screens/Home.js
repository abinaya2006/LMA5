import React from "react";
import {
    View, Text, StyleSheet, SafeAreaView, TouchableOpacity, Image,
    Platform, StatusBar
} from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export default class Home extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.safeArea} />
                <View style={styles.headingContainer}>
                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={styles.titleText1}>LOOK ME</Text><Text style={styles.titleText2}> APP</Text>

                    </View>

                    <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                        <Text style={styles.subHeading1}>Try Our</Text><Text style={styles.subHeading2}>Cool Frames!</Text>
                    </View>
                </View>
                <View style={styles.contentContainer}>
                    <View style={{ flex: 0.5 }}>
                        <Text style={styles.contentText}>Look Me is the best photo filter app for pic with the funny camera effects. With the stunning live photo filters directly on your face!</Text>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.25 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require("../assets/pic2.png")} style={{ height: 120, width: 100 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require("../assets/pic8.png")} style={{ height: 65, width: 105 }} />
                        </View>
                    </View>
                    <View style={{ flexDirection: "row", flex: 0.25 }}>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require("../assets/pic6.png")} style={{ height: 100, width: 100 }} />
                        </View>
                        <View style={{ flex: 0.5 }}>
                            <Image source={require("../assets/pic12.png")} style={{ height: 75, width: 100 }} />
                        </View>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <TouchableOpacity onPress={() => this.props.navigation.navigate("Main")}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>Try Now!</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#6278e4",

    },

    safeArea: {
        marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
    },

    headingContainer: {
        flex: 0.2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText1: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "#efb141",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    titleText2: {
        fontSize: RFValue(30),
        fontWeight: "bold",
        color: "white",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subHeading1: {
        fontSize: RFValue(20),
        color: "#efb141",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    subHeading2: {
        fontSize: RFValue(20),
        color: "white",
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -3, height: 3 },
        textShadowRadius: 1
    },
    contentContainer: {
        flex: 0.6,
        margint: RFValue(5),
        borderRadius: RFValue(15),
        backgroundColor: "white",
        height: '100%',
        padding: RFValue(20)
    },
    contentText: {
        fontSize: RFValue(17),
        fontStyle: "italic",
        fontWeight: "bold"
    },
    buttonContainer: {
        flex: 0.2,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#efb141",
        paddingLeft: RFValue(50),
        paddingRight: RFValue(50),
        paddingTop: RFValue(20),
        paddingBottom: RFValue(20),
        borderRadius: RFValue(20)
    },
    buttonText: {
        fontSize: RFValue(25),
        fontStyle: "italic",
        textShadowColor: "rgba(0,0,0,0.75)",
        textShadowOffset: { width: -1, height: 1 },
        textShadowRadius: 1
    }

})