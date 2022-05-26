import React,{useEffect}from "react";
import {View,Text,StyleSheet,Dimensions} from "react-native";
import {WebView} from "react-native-webview"; 
import { IMAGE_URL } from "../apiUrls";

const PdfViewPage = (props) => {
    useEffect(() => {
        console.log("View :- ",props.route.params.pdfUrl)
    },[])
    return (
        <View style={styles.rootView}>
            <WebView source={{uri : "http://docs.google.com/gview?embedded=true&url=" + IMAGE_URL + props.route.params.pdfUrl}} />
        </View>
    )
}

const styles = StyleSheet.create({
    rootView : {
        height : Dimensions.get("window").height ,
        width : Dimensions.get("window").width
    }
})

export default PdfViewPage;