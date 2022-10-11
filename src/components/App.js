import React, { useState, useEffect } from "react";
import AccountContainer from "./AccountContainer";


function App() {
  const [transactions, setTransactions] = useState([])


  // const handleAddTransaction = (transaction) => {
  //   setTransactions = [...transaction, transaction];
  // }

  useEffect(() => {
    fetch('http://localhost:8001/transactions').then(resp => resp.json())
      .then(data => {
        setTransactions(data)
        console.log(data)
      })
  }, [])

  const addTransaction = (date, description, category, amount) => {
    fetch('http://localhost:8001/transactions',
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "accept": 'application/json'
        }, body: JSON.stringify({
          date,
          description,
          category,
          amount,
        })
      }).then(resp => resp.json()).then(data => console.log(data))

  }





  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      const filteredTransactions = transactions.filter((trans) => {
        if (trans.description.toLowerCase().includes(searchTerm.toLowerCase())) {
          return true;
        } else {
          return false;
        }
      });
      setTransactions(filteredTransactions);
    }
  };


  return (
    <div className="ui raised segment">
      <div className="ui segment violet inverted">
        <h2>The Royal Bank of Flatiron</h2>
      </div>
      <AccountContainer transactions={transactions} addTransaction={addTransaction} handleSearch={handleSearch} />
    </div>
  );
}

export default App;
