import React,{useState,useEffect} from "react";
import {View,StyleSheet,ActivityIndicator,FlatList} from "react-native";
import { getNotes } from "../apiFunctions";
import PdfCard from "../components/PdfCard";
import { Searchbar,Colors } from "react-native-paper";


const Home = (props) => {
    const [pdfs, setPdfs] = useState([]);
    const [isLoading,setIsLoading] = useState(true);

    useEffect(() => {
        getNotes().then((res) => {
            console.log("Result :- ",res.data)
            setPdfs(res.data.data);
            setIsLoading(false);
        },(err  ) => {
            console.log("Error :- ",err)
        })
    },[])

    console.log("Pdfs :- ",pdfs)

    return (
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
    )
}

const styles = StyleSheet.create({
    searchBarContainer : {
        margin : 10,
        borderRadius : 10,
    }
})

export default Home;