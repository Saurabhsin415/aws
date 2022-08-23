// Example code
import { useRouter } from 'next/router';
import dynamic from 'next/dynamic';
const JodiChart=dynamic(()=>import('./charts/jodichart'),{
  ssr: true,
})
const PanelChart=dynamic(()=>import('./charts/PanelChart'),{
  ssr: true,
})
const Pages=dynamic(()=>import('./pages'),{
  ssr: true,
});

function Post({ data }) {

  return (
    <div>
   {data && data.chart=='panel'? <PanelChart name={data.data.chartname} data={data.data} week={data.data.week_day}/>:'fd'}
   {data && data.chart=='jodi'?<JodiChart name={data.data.chartname} data={data.data} week={data.data.week_day}/>:''}
   {data && data.chart=='pages'?<Pages data={data.data}/>:''} * 
 
  
      </div>
  
  );
}
 

 
export async function getServerSideProps({ params }) {
  const res = await fetch(`https://api.xn--sattmatka-t1a.com/api/${params.chart}`);
  const data = await res.json();
  return {
    props: { data },
  }
}

export default Post;