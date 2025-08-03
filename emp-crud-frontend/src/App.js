import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import EmployeeList from './components/EmployeeList';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Header from './components/Header'; // Neat header with navigation

function App() {
  return (
    <Router>
      <div style={styles.container}>
        <Header />

        <Routes>
          <Route path="/" element={
            <>
              <AddEmployee />
              <EmployeeList />
            </>
          } />
          <Route path="/edit/:id" element={<UpdateEmployee />} />
        </Routes>
      </div>
    </Router>
  );
}

const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px',
  }
};

export default App;
