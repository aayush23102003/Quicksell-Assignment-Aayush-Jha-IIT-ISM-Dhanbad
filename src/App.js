import logo from './logo.svg';
import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react';
import KanbanBoard from './KanbanBoard'
import FilterOptions from './FilterOptions'
import './App.css'


function App() {

  const [tickets, setTickets] = useState([]);
  const [groupedTickets, setGroupedTickets] = useState({});
  const [sortedTickets, setSortedTickets] = useState({});
  const [groupingOption, setGroupingOption] = useState('status');
  const [sortingOption, setSortingOption] = useState('priority');

  // fetch tickets
  useEffect(()=>{
    const fetchTickets = async () => {
      const response = await axios.get("https://api.quicksell.co/v1/internal/frontend-assignment");
      if(response.status !== 200){
        alert("error")
      }else{
        setTickets(response.data.tickets)
      }
    }
    fetchTickets()
  }, [])

  // grouping
  useEffect(()=>{
    const groupTickets = () => {
      if (groupingOption === 'status') {
        const groupedByStatus = {};
        tickets?.forEach((ticket) => {
          const status = ticket.status;
          if (!groupedByStatus[status]) {
            groupedByStatus[status] = [];
          }
          groupedByStatus[status].push(ticket);
        });
        return groupedByStatus;
      } else if (groupingOption === 'user') {
        const groupedByUser = {};
        tickets?.forEach((ticket) => {
          const user = ticket.userId;
          if (!groupedByUser[user]) {
            groupedByUser[user] = [];
          }
          groupedByUser[user].push(ticket);
        });
    
        return groupedByUser;
      } else if (groupingOption === 'priority') {
        const groupedByPriority = {};
        tickets?.forEach((ticket) => {
          const priority = ticket.priority;
          if (!groupedByPriority[priority]) {
            groupedByPriority[priority] = [];
          }
          groupedByPriority[priority].push(ticket);
        });
        return groupedByPriority;
      } else {
        return { 'No grouping': tickets };
      }
    }
    const grouped = groupTickets()
    setGroupedTickets(grouped)
  }, [tickets, groupingOption])

  // sorting
  useEffect(()=> {
    const sortTickets = () => {
      if (sortingOption === 'priority') {
        const keys = Object.keys(groupedTickets)
        keys?.forEach(key => groupedTickets[key].sort((a, b) => b.priority - a.priority))
        return groupedTickets;
      } else if (sortingOption === 'title') {
        const keys = Object.keys(groupedTickets)
        keys?.forEach(key => groupedTickets[key].sort((a, b) => a.title.localeCompare(b.title)))
        return groupedTickets;
      } else {
        return groupedTickets;
      }
    }
    const response = sortTickets();
    setSortedTickets(response)
  }, [groupedTickets, sortingOption])

  return (
    <div className="App">
      <FilterOptions
        groupingOption={groupingOption}
        setGroupingOption={setGroupingOption}
        sortingOption={sortingOption}
        setSortingOption={setSortingOption}
      /> 
      <KanbanBoard sortedTickets={sortedTickets} />
    </div>
  );
}


export default App;
