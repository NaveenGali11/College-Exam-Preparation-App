import React, { useEffect } from "react";
import { Text, View } from "react-native";

const PdfViewCard = (props) => {
  useEffect(() => {
    console.log("Props in View Card :- ", props.pdfDetails);
  },[])

  return(
    <View>
      <Text>Pdf View Card</Text>
      {/*<Text>{props.pdfDetails.}</Text>*/}
    </View>
  )
}

export default PdfViewCard;
