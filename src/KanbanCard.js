const KanbanCard = ({ ticket }) => {
    const getTruncatedText = (text) => {
      return text.slice(0, 60) + " ...";
    }
    return (
      <div key={ticket.id} className="kanban-card">
        <div className="card-ticket-id">
          <span>
            {ticket.id}
          </span>
          <span className="card-user-icon">
            {ticket.userId.split('-')[1]}
          </span>
        </div>
        <h3 className="card-ticket-name">{getTruncatedText(ticket.title)}</h3>
        <div className="card-tag">
          <span className="card-tag-circle"></span>
          {ticket.tag[0]}
        </div>
        {/* <p>Status: {ticket.status}</p> */}
        {/* <p>User: {ticket.userId}</p> */}
        {/* <p>Priority: {ticket.priority}</p> */}
      </div>
    );
}

export default KanbanCard;