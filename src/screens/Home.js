import React,{useState,useEffect,useCallback,useRef,useMemo} from "react";
import {View,StyleSheet,ActivityIndicator,FlatList,Text,ToastAndroid} from "react-native";
import { getNotes, teacherLogin } from "../apiFunctions";
import PdfCard from "../components/PdfCard";
import { Searchbar,Colors,FAB,TextInput, Button } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import axios from "axios";

const Home = (props) => {
    const [pdfs, setPdfs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);


    const refRBSheet = useRef();

    useEffect(() => {
        getNotes().then((res) => {
            console.log("Result :- ",res.data)
            setPdfs(res.data.data);
            setIsLoading(false);
        },(err  ) => {
            console.log("Error :- ",err)
        })
    },[])


    return (
        <>
            <View>
                {
                    isLoading ? <ActivityIndicator animating={true} color={Colors.red800} size="large" /> : 
                    <>
                         <View style={styles.searchBarContainer}>
                            <Searchbar placeholder="Search Book" />
                        </View>
                        <FlatList 
                            data = {pdfs}
                            renderItem = {(item,index) => <PdfCard pdf={item} onPress={() => props.navigation.navigate('PdfDesc',{
                                pdfId : item.item.code
                            }) } />}
                        />
                    </>
                }            
            </View>
            <FAB style={styles.fab} large icon="upload" label="Upload Pdf" onPress={() => refRBSheet.current.open()} />
        </>
    )
}

const styles = StyleSheet.create({
    searchBarContainer : {
        margin : 10,
        borderRadius : 10,
    },
    fab : {
        position : "absolute",
        margin : 16,
        right : 0,
        bottom : 10,
    },
    contentContainer:{
        flex : 1,
      alignItems  : "center"
    },
    loginContainer : {
        margin : 10
    },
    loginTextContainer : {
        marginBottom : 10
    },
    loginText : {
        fontSize : 20,
        fontWeight : "bold",
        textAlign : "center"
    },
    mobileInputContainer :{
        marginBottom : 10,
        borderRadius : 10,
        overflow : "hidden"
    },
    passwordInputContainer : {
        marginBottom : 10,
        borderRadius : 10,
        overflow : "hidden"
    },
    loginButtonContainer : {
        marginHorizontal : 30
    }
})

export default Home;