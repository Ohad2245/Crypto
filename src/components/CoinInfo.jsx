import React ,{useEffect,useState} from 'react';
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const CoinInfo =() => {
  const { id } = useParams();
  const [coinInfo,setCoinInfo] = useState([]);

  
  useEffect(()=>{
    axios.get(`https://api.coingecko.com/api/v3/coins/bitcoin/market_chart?vs_currency=USD&days=7`).then(
      (response) =>{
        setCoinInfo(response.data.coinInfo);

        if(!response){
          return <div>Loading...</div>
        }
        const coinChartData = response.coinInfo.map(value => ({ x: value[0], y: value[1].toFixed(2) }));
      } 
    )
  },[]);

  const options = {
    responsive: true,
  }
  const data ={
    labels:['1','20','2'],
    datasets:[
      {
        fill:true,
        data:['10','2','9'],
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      }
    ]
  }
  

  return (
    <div>
      <Line options={options} data={data} style={{width: '50%', height: '50%'}}/>
    </div>
  )
}
export default CoinInfo;
