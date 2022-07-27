import useSWR from "swr";
import useSWRInfinite from 'swr/infinite'
import axios from "./axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);
export const usePagination=(url)=>{
    const PAGE_SIZE=15;
    // guessing-forum
    const getKey=(pageIndex, previousPageData)=>{
        pageIndex=pageIndex+1;
        if(previousPageData && !previousPageData.length) return null;
        return `${url}&page=${pageIndex}`;

      };
    
      const { data:posts, size, setSize,error,mutate } = useSWRInfinite(getKey, fetcher);
      const paginatedPost=posts?.flat();
    // console.log({posts,size})
    const isReachedEnd=posts && posts[posts.length-1]?.length < PAGE_SIZE;
    const loadingMore=posts && typeof posts[size-1]==="undefined";
    return {
        paginatedPost,isReachedEnd,loadingMore,size,setSize,error,mutate,
    }
}