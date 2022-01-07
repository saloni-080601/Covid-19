import React,{useEffect,useState} from 'react';
import BootstrapTable from 'react-bootstrap-table-next';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilterFactory,{textFilter} from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table2-filter/dist/react-bootstrap-table2-filter.min.css';

const Covid = () => {
    const [userList,setUserList]=useState([]) 
    
    const columns =[

        {dataField:'state',text:'STATE' ,sort:true,filter:textFilter()},
        {dataField:'total',text:'TOTAL CASES',sort:true,filter:textFilter()},
        {dataField:'recovered',text:'TOTAL RECOVER',sort:true,filter:textFilter()},
        {dataField:'positive',text:'TOTAL ACTIVE',sort:true,filter:textFilter()},
        {dataField:'checkTimeEt',text:'TIME SERIES',sort:true,filter:textFilter()}
    ]
    const getCovidData =async ()=>{
        fetch('https://api.covidtracking.com/v1/states/current.json')
        .then((response) => response.json())
        .then((Data) => {
            console.log(Data)
            setUserList(Data)
          })
        .catch((error)=>{
            console.log('error')
        })
    }
    useEffect(() => {
        getCovidData()
    }, [])
    return (
        <div>
            <BootstrapTable bootstrap5  keyField='state' data={ userList } columns={columns}
            filter={FilterFactory()}
            />
        </div>
    )
}

export default Covid
