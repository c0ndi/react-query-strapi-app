import s from './index.module.css'
import {FormEvent} from "react";

export default function CreatePostForm({onSubmit}: { onSubmit: (e: FormEvent<HTMLFormElement>) => void }) {
   return (
      <form onSubmit={onSubmit}>
         <input type="text" name={"title"}/>
         <input type="text" name={"content"}/>
         <button className={s.sendButton}>Add post</button>
      </form>
   )
}