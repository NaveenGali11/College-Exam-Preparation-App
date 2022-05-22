import React, { useEffect, useState } from "react";
import {View,Text,Button} from "react-native";
import {getSingleNotes} from "../apiFunctions";
import PdfViewCard from "../components/PdfViewCard";

const PdfDescriptionPage = (props) => {
  const [singlePdf, setSinglePdf] = useState();

  useEffect(() => {
         getSingleNotes(props.route.params.pdfId).then((res) => {
          console.log("Res :- ",res.data.data[0])
          setSinglePdf(res.data.data[0]);
        },(err) => {
          console.log("Error :- ",err)
        })
    },[])

    return (
        <View>
            <PdfViewCard pdfDetails={singlePdf} />
        </View>
    )
}

export default PdfDescriptionPage;
