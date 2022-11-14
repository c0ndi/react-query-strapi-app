import {IBlogPost} from "../../lib/interfaces";

import s from './index.module.css'

export default function Post({title, slug, content}: IBlogPost) {
   return (
      <div
         className={s.postWrapper}
      >
         <p className={s.postTitle}>{title}</p>
         <p>{slug}</p>
         <p>{content}</p>
      </div>
   )
}