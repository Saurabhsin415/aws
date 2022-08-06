import axios from "../components/lib/axios";
import useSWR from "swr";
import Link from 'next/link';
import { useRouter } from 'next/router'
import JodiChart from "./charts/jodichart";
import PanelChart from "./charts/PanelChart";
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
export default function ChartSlug() {
   
    const router = useRouter();
    const id = router.query.chart;
    // console.log(id)
  const address = id;
  const fetcher = async (url) => await axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(address, fetcher);
{console.log(data)}
  if (error) <p>Loading failed...</p>;
  if (!data) <h1>Loading...</h1>;

  return (
    <div>
   {/* {console.log(data && data.data.week_day)} */}
    {/* //jodichart */}
{!data? <Box sx={{ display: 'flex' }}>
      <CircularProgress className="m-auto mt-20" style={{'margin':'92px auto 35px auto'}}/>
    </Box>:data && data.chart=='panel'?<PanelChart name={id} data={data.data.result} week={data.data.week_day}/>:''}



{data && data.chart=='jodi'?<JodiChart name={id} data={data.data} week={data.data.week_day}/>:''}

 
 
      </div>
 
  );
}