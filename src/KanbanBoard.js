import KanbanCard from './KanbanCard';

const fixHeading = (groupName) => {
  switch(groupName){
    case '0': return 'No Priority'
    break;
    case '1': return 'Low'
    break;
    case '2': return 'Medium'
    break;
    case '3': return 'High'
    break;
    case '4': return 'Urgent'
    break;
    default: return groupName
   }
}

const titleIcon = (title) => {
  if(title === "0") return <i class="fa-brands fa-creative-commons-nd"></i>
  else if(title === "1") return <i class="fa-solid fa-timer"></i>
  else if(title === "2") return <i class="fa-solid fa-bars-progress"></i>
  else if(title === "3") return <i class="fa-solid fa-chart-simple"></i>
  else if(title === "4") return<i class="fa-solid fa-chart-simple"></i>
  else if(title === "Todo") return <i class="fa-solid fa-clock"></i>
  else if(title === "In progress") return <i class="fa-solid fa-circle-half-stroke"></i>
  else if(title === "Backlog") return <i class="fa-solid fa-square-check"></i>
  else return <i class="fa-solid fa-user"></i>
}

const KanbanBoard = ({sortedTickets}) => {
  const groupNames = Object.keys(sortedTickets);

  return (
    <div className="kanban-board">
      {groupNames.map((groupName) => (
        <div key={groupName} className="kanban-column">
          <div style={{width: "100%", display: "flex", alignItems: "center", gap: "1em"}}>
            {titleIcon(groupName)}
            <h2 className='kanban-board-title'>{fixHeading(groupName)}</h2>
          </div>
          {sortedTickets[groupName].map((ticket) => (
             <KanbanCard key={ticket.id} ticket={ticket} />
           ))} 
        </div>
      ))}
    </div>
  );
}

export default KanbanBoard;