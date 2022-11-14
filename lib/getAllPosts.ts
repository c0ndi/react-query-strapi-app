import axios from "axios";
import {strapiURL} from "../config/config";

export function getAllPosts(locale: string | undefined) {
   return axios.get(`${strapiURL}/api/blog-posts?locale=${locale}`).then(res => res.data)
}