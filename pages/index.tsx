import {FormEvent, Key, useEffect} from "react";
import {IBlogPost} from "../lib/interfaces";

import {useMutation, useQuery} from "@tanstack/react-query";

import Post from "../components/Post";
import ErrorPage from "../components/ErrorPage";
import Loading from "../components/Loading";

import {getAllPosts} from "../lib/getAllPosts";
import {useRouter} from "next/router";
import CreatePostForm from "../components/CreatePostForm";
import {createNewPost} from "../lib/createNewPost";
import Link from "next/link";


export default function Home() {
   const router = useRouter();
   const {locale, locales, asPath} = router;

   const query = useQuery(["strapiData"], () => getAllPosts(locale));

   useEffect(() => {
      query.refetch()
   }, [locale])

   const mutation = useMutation({
      mutationFn: async (variables: IBlogPost) => {
         createNewPost(variables.title, variables.slug, variables.content, locale)
      },
      onSuccess: () => {
         query.refetch();
      }
   })

   if (query.isLoading) return <Loading/>;

   if (query.error instanceof Error) return <ErrorPage errorMessage={query.error.message}/>;

   function onSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

      const target = e.target as any;
      const data = new FormData(target)

      mutation.mutate({
         title: `${data.getAll("title")}`,
         slug: `${data.getAll("title") + "-" + (Math.random() * 10000).toFixed(0) + new Date().getSeconds()}`,
         content: `${data.getAll("content")}`,
      })
   }

   return (
      <div>

         <Link href={asPath} locale='en'>ENG</Link>
         <Link href={asPath} locale='pl'>PL</Link>

         <CreatePostForm onSubmit={onSubmit}/>
         <form onSubmit={onSubmit}/>
         {query.data.data.map(({attributes: {title, slug, content}}: { attributes: IBlogPost }, key: Key) => {
            return (
               <Post
                  key={key}
                  title={title}
                  slug={slug}
                  content={content}
               />
            )
         })}

      </div>
   )
}
