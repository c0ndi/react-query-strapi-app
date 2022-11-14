import s from './index.module.css'

export default function Loading() {
   return (
      <div className={s.loadingWrapper}>
         <div className={s.loadingCircle}></div>
      </div>
   )
}