import React, { useState } from "react";
  
import axios from "../components/lib/axios";
const FaqList = ({ faq }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <Card>
      <CardHeader id="headingOne">
        <h5 className="mb-0">
          <button
            className="btn btn-link"
            type="button"
            data-toggle="collapse"
            onClick={toggle}
            data-target="#collapseOne"
            aria-expanded="true"
            aria-controls="collapseOne"
          >
            {faq.title}
          </button>
        </h5>
      </CardHeader>
      <Collapse
        isOpen={isOpen}
        id="collapseOne"
        className="collapse"
        aria-labelledby="headingOne"
        data-parent="#accordionExample"
      >
        <div className="card-body">
        <div className="content" dangerouslySetInnerHTML={{__html: faq.content}}></div>  
        </div>
      </Collapse>
    </Card>
  );
};

const FaqPage = ({data}) => {
  return (
    <>
 
 
      
           
    
                <div
                  className="accordion theme-accordion"
                  id="accordionExample"
                >
                  {data && data.data.map((faq, i) => (
                   <> <FaqList faq={faq} key={i} />         
                     {console.log(data)}</>
                  ))}
                </div>
           
          
 
    </>
  );
};

//faq  content fatch 
export async function getServerSideProps() {
  const res =await axios.get('https://backend.nutracharm.in/api/faq');
  // console.log(res);
  const data = res.data;
  return {
    props: {
        data,
    },
  }
} 
export default FaqPage;
