import axios from "axios";
import { BASE_URL } from "./apiUrls";

export const getNotes = async () => {
    return await axios.get(BASE_URL + "GetNotes");
}

export const getSingleNotes = async (pdfId) => {
    console.log("Pdf Id :- ",pdfId);
    // https://exampreparationapp.000webhostapp.com/apis/GetSingleNotes.php?id=lRx66pc4yvPpIbcvZvCZ2tFbt
    return await axios.get(BASE_URL + "GetSingleNotes.php?id="+pdfId);
}
