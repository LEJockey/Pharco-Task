import React from 'react'
import SideBar from './../SideBar/SideBar';
import Table from '../Table/Table';
import { dataTableOne } from '../../TableData';


const PageOne = () => {
  return (

    <>

    <SideBar/>

    <div className='container text-center ps-5'>

      <h1 className='my-5 pb-5'>Table of Page One</h1>

      <table class="table mt-5 ">

        <thead>
          <tr>
            <th className='d-none d-sm-table-cell rounded-2'  scope="col">#</th>
            <th className='rounded-2' scope="col">Name</th>
            <th className='rounded-2'scope="col">Position</th>
            <th className='d-none d-sm-table-cell rounded-2' scope="col">Company</th>
          </tr>
        </thead>

        <tbody>
          {dataTableOne.map((cell, index) => (
              <Table key={index} {...cell} />
          ))}
        </tbody>

      </table>

    </div>
    </>
  )
}

export default PageOne