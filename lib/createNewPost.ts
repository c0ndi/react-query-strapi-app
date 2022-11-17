import axios from "axios";
import {strapiURL} from "../config/config";

export function createNewPost(title: string, slug: string, content: string, locale: string | undefined) {
   axios.post(`${strapiURL}/api/blog-posts`, {
         data: {
            title,
            slug,
            content,
            locale
         }
      }
   ).then(res => console.log(res))
}