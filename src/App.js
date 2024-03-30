import React from 'react';
import Sidebar from './components/Sidebar';
import DataTable from './components/TableData';




const App = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      <Sidebar/>
      <DataTable />
    </div>
  )
}

export default App