import React, { useEffect,useState } from "react";
import { Text, View ,Dimensions,StyleSheet,Image} from "react-native";
import { Chip, Card, Title,Divider, Colors, ProgressBar } from "react-native-paper";
import {  IMAGE_URL } from "../apiUrls";
import Pdf from "react-native-pdf";

const PdfViewCard = (props) => {

  useEffect(() => {
    console.log("Props in View Card :- ", props.pdfDetails);
  },[])

  const imageUrl = IMAGE_URL + props.pdfDetails.UploadedBy[0].userPhoto;
  const fileURl = IMAGE_URL + props.pdfDetails.FileUrl

  return(
    <View>
      <Card style={styles.cardStyle}>
        <Card.Content>
          <Title style={styles.Heading}>{props.pdfDetails.FileName}</Title>
        </Card.Content>
        <View style={styles.detailsSection}>
          <Chip mode="flat">{props.pdfDetails.SubjectName}</Chip>
          <Chip mode="flat">{props.pdfDetails.SubjectCode}</Chip>
        </View>
        <Divider />
        <Text style={styles.uploadedByHeading}>Uploaded By</Text>
        <View style={styles.uploadedBySection}>
          <View style={styles.leftSection}>
            <Text style={styles.uploadedByName}>{props.pdfDetails.UploadedBy[0].fullname}</Text>
          </View>
          <View style={styles.rightSection}>
            <Image
                style={styles.tinyLogo}
                source={{uri : imageUrl}}
              />
          </View>
        </View>
      </Card>
      <View style={{height : 300}}>
        {/* <WebView source={{uri : "http://docs.google.com/gview?embedded=true&url=" + fileURl}} startInLoadingState={true} /> */}
        <Pdf
          source={{uri : fileURl}}
          onLoadComplete={(numberOfPages,filePath) => {
            console.log("Number of Pages :- ",numberOfPages)
          }}
          onPageChanged={(page) => {
            console.log("Current PAge",page)
          }}
          onError = {(error) => {
            console.log("Error :- ",error)
          }}
          onPressLink = {(uri) => {
            console.log("Link PAssed :- ",uri)
          }}
          style={styles.pdfStyle}
          trustAllCerts ={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  Heading : {
    fontSize : 40,
    paddingTop : 10
  },
  pdfStyle:{
    flex:1,
    width:Dimensions.get('window').width,
    height:Dimensions.get('window').height ,
  },
  detailsSection : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-around",
    marginHorizontal : 10,
    marginVertical : 10
  },
  leftSection : {
    marginLeft : 10
  },
  rightSection : {
    marginRight : 10
  },  
  tinyLogo: {
    width: 50,
    height: 50,
    borderRadius : 25,
  },
  uploadedByName : {
    fontSize : 19,
    color : Colors.black
  },
  uploadedByHeading : {
    padding : 12,
    color : Colors.black,
  },  
  uploadedBySection : {
    flex : 1,
    flexDirection : "row",
    justifyContent : "space-between"
  },
  cardStyle : {
    marginVertical : 10,
    paddingVertical : 10,
    marginHorizontal : 10,
    borderRadius : 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.29,
    shadowRadius: 4.65,
    elevation: 7,
    height : 250
  },
  loadingSpinner :{ 
    marginTop : 100,
  }
})

export default PdfViewCard;
