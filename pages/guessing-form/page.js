
import React, { useEffect, useState,Component,useRef } from "react";
import useSWR from "swr";
import axios from "../../components/lib/axios";
const fetcher = (url) => axios.get(url).then((res) => res.data);
function App () {
    const [cnt, setCnt] = useState(1)
  
    const list = []
    for (let i = 0; i < cnt; i++) {
      // 🚨 This is wrong! Commonly, you can't use hooks inside a loop.
      const { data } = useSWR(`/api/data?page=${i}`)
      list.push(data)
    }
  
    return <div>
      {list.map((data, i) =>
        <div key={i}>{
          data.map(item => <div key={item.id}>{item.name}</div>)
        }</div>)}
      <button onClick={() => setCnt(cnt + 1)}>Load More</button>
    </div>
  }