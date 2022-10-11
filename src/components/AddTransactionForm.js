import React, { useState } from "react";

function AddTransactionForm({ addTransaction }) {
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [category, setCategory] = useState('')
  const [amount, setAmount] = useState('')




  const handleSubmit = (e) => {
    e.preventDefault()
    addTransaction(date, description, category, amount)
  }
  return (
    <div className="ui segment">
      <form className="ui form" onSubmit={handleSubmit}>
        <div className="inline fields">
          <input type="date" name="date" onChange={(e) => setDate(e.target.value)} />
          <input type="text" name="description" placeholder="Description" onChange={(e) => setDescription(e.target.value)} />
          <input type="text" name="category" placeholder="Category" onChange={(e) => setCategory(e.target.value)} />
          <input type="number" name="amount" placeholder="Amount" step="0.01" onChange={(e) => setAmount(e.target.value)} />
        </div>
        <button className="ui button" type="submit">
          Add Transaction
        </button>
      </form>
    </div>
  );
}

export default AddTransactionForm;
