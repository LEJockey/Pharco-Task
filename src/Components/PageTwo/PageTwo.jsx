import React from 'react'
import SideBar from './../SideBar/SideBar';
import { dataTableTwo } from '../../TableData';
import Table from '../Table/Table';


const PageTwo = () => {
  return (
    <>
    <SideBar/>
    <div className='container text-center ps-5'>

    <h1 className='my-5 pb-5'>Table of Page Two</h1>

      <table class="table mt-5">

        <thead>
          <tr>
            <th className='d-none d-sm-table-cell rounded-2'  scope="col">#</th>
            <th className='rounded-2' scope="col">Name</th>
            <th className='rounded-2'scope="col">Position</th>
            <th className='d-none d-sm-table-cell rounded-2' scope="col">Company</th>
          </tr>
        </thead>

        <tbody>
          {dataTableTwo.map((cell, index) => (
              <Table key={index} {...cell} />
          ))}
        </tbody>

      </table>

    </div>
    </>
  )
}

export default PageTwo