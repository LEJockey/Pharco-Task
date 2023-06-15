import React from 'react'

const Table = ({id, name, title, company}) => {
  return (
    <tr>
        <th className='d-none d-sm-table-cell rounded-2'scope="row">{id}</th>
        <td>{name}</td>
        <td>{title}</td>
        <td className='d-none d-sm-table-cell'>{company}</td>
    </tr>
  )
}

export default Table