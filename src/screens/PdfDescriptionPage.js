import React, { useEffect, useState } from "react";
import {View,Text} from "react-native";
import {getSingleNotes} from "../apiFunctions";
import PdfViewCard from "../components/PdfViewCard";
import { ActivityIndicator,Colors,Button } from "react-native-paper";

const PdfDescriptionPage = (props) => {
  const [singlePdf, setSinglePdf] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
         getSingleNotes(props.route.params.pdfId).then((res) => {
          console.log("Res :- ",res.data.data[0])
          setSinglePdf(res.data.data[0]);
          setIsLoading(false);
        },(err) => {
          console.log("Error :- ",err)
        })
    },[])

    return (
        <View>
          {
            isLoading ? <ActivityIndicator animating={true} color={Colors.red800} /> : 
            <View>
              <PdfViewCard pdfDetails={singlePdf} />
              <Button onPress={() => props.navigation.navigate("PdfView",{
                pdfUrl :singlePdf.FileUrl
              })} mode="contained" style={{margin : 20}}>
                View in Full Screen
              </Button>
            </View>
          }
        </View>
    )
}

export default PdfDescriptionPage;
