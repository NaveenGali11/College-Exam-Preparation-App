import React,{useState,useEffect} from "react";
import {View,Text,StyleSheet,Button,FlatList} from "react-native";
import { getNotes } from "../apiFunctions";
import PdfCard from "../components/PdfCard";

const Home = (props) => {
    const [pdfs, setPdfs] = useState([]);

    useEffect(() => {
        getNotes().then((res) => {
            console.log("Result :- ",res.data)
            setPdfs(res.data.data);
        },(err  ) => {
            console.log("Error :- ",err)
        })
    },[])

    console.log("Pdfs :- ",pdfs)

    return (
        <View>
            <FlatList 
                data = {pdfs}
                renderItem = {(item,index) => <PdfCard pdf={item} onPress={() => props.navigation.navigate('PdfDesc',{
                    pdfId : item.item.code
                }) } />}
            />
        </View>
    )
}

export default Home;