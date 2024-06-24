"use client";
import dynamic from 'next/dynamic';
import 'chart.js/auto';
import { FormEvent, useEffect, useState } from 'react';
import { fetchDevis, getStatsByAnnee } from '@/app/lib/data';
import { ListeSkeleton } from '../skeleton';
import { listerAnnees } from '@/app/lib/utils';
const Bar = dynamic(() => import('react-chartjs-2').then((mod) => mod.Bar), {
  ssr: false,
});





export default function ChartDevis() {
    const [annee, setAnnee] =  useState("2024");
    const [dataRetrieve, setDataRetrieve] = useState([]);
    const [load, setLoad]= useState(true);
    var dataChart = {
        labels: ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin','Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'],
        datasets: [
          {
            label: 'GeeksforGeeks Bar Chart',
            data: dataRetrieve,
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
              'rgba(255, 99, 132, 0.2)',
              'rgba(54, 162, 235, 0.2)',
              'rgba(255, 206, 86, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)',
              'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(54, 162, 235, 1)',
              'rgba(255, 206, 86, 1)',
              'rgba(75, 192, 192, 1)',
              'rgba(153, 102, 255, 1)',
              'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
          },
        ],
      };
     useEffect( ()=>{
        async function fetchData(){
            setLoad(false);
            const response = await fetch(`admin/api?annee=${annee}`);
            if (!response.ok) {
                throw new Error('Failed to fetch data');
              }
            const data = await response.json();
            console.log(data.annees);
            
            setDataRetrieve(data.annees)
            setAnnee(annee);
            
        }
        fetchData();
     },[annee])


    const handleChange = async (e : FormEvent<HTMLSelectElement>)=>{
        const anneeChoisie = e.currentTarget.value
        if (anneeChoisie != annee){
            setAnnee(anneeChoisie)
        }
    }
    const annees = listerAnnees(2000,2024);
    
    const options = annees.map((element,index) =>(
        <option key={index} value={element}>{element}</option>
    ));
    
  return (
      <>
      <div className="row">
        <div className="col-6">
            <form>
                <div className="row align-items-center">
                    <div className="col-4">
                        <select className="form-select" name="annee" onChange={handleChange}>
                            {options}
                        </select>
                    </div>
                </div>
            </form>
        </div>
        </div>

        <div className="col-10 mt-3">
        <div className="card">
        <div className="card-body">
            <h5 className="card-title">Histogramme des devis</h5>
            {load == true ?(
                <div className='m-5'>
                    <ListeSkeleton />
                </div>
            ): (
                <Bar data={dataChart}/>
            )}
            
        </div>
        </div>
        </div>
      </>
  );
};
