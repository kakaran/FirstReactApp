import React,{useState} from 'react';
// import axios from "axios";
import './Counter.css'

function Counter()
{
    // const[data,setData] = useState(0);
    // const Handle = async () => {
    //     try {
    //       const val = (await axios.get("https://randomuser.me/api/")).data
    //         .results[0].name.first;
    //       console.log(val);
    //       setData(val);
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   };

    //  let value = 0;
    //  let DisplayValue = <p className="value">{value}</p>;
    //  const IncrementButton = () =>
    //  {
    //     value=value+1;
    //  }
    //  const DecrementButton = () =>
    //  {
    //     value = value-1;
    //  }

    const[value,setCount] = useState(0);

     return (
         <div className="Counter">
            <div className='countanier'>
                {/* {DisplayValue} */}
                <p className="value">{value}</p>
                <div className='buttonContanier'>
                    <button className="increment" onClick={()=>
                    {
                        setCount(value+1);
                    }}>Increment</button>
                    <button className="decrement" onClick={()=>
                    {
                        setCount(value-1);

                    }}>Decrement</button>
                </div>
            </div>
            {/* <div>{data}
            </div>
            <button onClick={Handle}>Handle</button> */}
        </div>  
    );
}

export default Counter;