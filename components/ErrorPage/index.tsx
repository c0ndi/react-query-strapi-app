import s from './index.module.css'

export default function ErrorPage({errorMessage}: { errorMessage: string }) {
   return (
      <div className={s.errorWrapper}>
         <p className={s.errorMessage}>{errorMessage}</p>
      </div>
   )
}