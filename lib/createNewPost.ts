import axios from "axios";
import {strapiURL} from "../config/config";

export function createNewPost(title: string, slug: string, content: string, locale: string | undefined) {
   axios.post(`${strapiURL}/api/blog-posts?locale=${locale}`, {
         data: {
            title,
            slug,
            content
         }
      }
   ).then(res => console.log(res))
}