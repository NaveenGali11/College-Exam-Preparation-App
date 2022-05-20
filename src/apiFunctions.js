import axios from "axios";
import { BASE_URL } from "./apiUrls";

export const getNotes = async () => {
    return await axios.get(BASE_URL + "GetNotes");
}