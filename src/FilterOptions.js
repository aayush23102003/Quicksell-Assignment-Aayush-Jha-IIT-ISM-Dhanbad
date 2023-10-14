const React = require("react");

function FilterOptions({
  groupingOption,
  setGroupingOption,
  sortingOption,
  setSortingOption,
}) {
  const [showOptions, setShowOptions] = React.useState(false);

  const handleGroupingChange = (event) => {
    setGroupingOption(event.target.value);
  };

  const handleSortingChange = (event) => {
    setSortingOption(event.target.value);
  };

  return (
    <div
      className="filter-options"
      
    >
      <div>
        <div className="filter-options-card" onClick={() => setShowOptions(!showOptions)} >
          <i class="fa-solid fa-sliders"></i>
          <span>Display</span>
          <i class="fa-solid fa-chevron-down"></i>
        </div>
        <div
          className="filter-dropdown"
          style={{ display: showOptions ? "flex" : "none" }}
        >
          <div className="filter-row">
            <label htmlFor="grouping">Grouping</label>
            <select
              id="grouping"
              style={{width: "100px"}}
              value={groupingOption}
              onChange={handleGroupingChange}
            >
              <option value="status">Status</option>
              <option value="user">User</option>
              <option value="priority">Priority</option>
            </select>
          </div>
          <div className="filter-row">
            <label htmlFor="sorting">Ordering</label>
            <select
              id="sorting"
              style={{width: "100px"}}
              value={sortingOption}
              onChange={handleSortingChange}
            >
              <option value="priority">Priority</option>
              <option value="title">Title</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FilterOptions;

/*

This code defines a React functional component called FilterOptions. It receives props (groupingOption, setGroupingOption, 
sortingOption, and setSortingOption) and renders a set of dropdown menus for selecting grouping and sorting options. The component 
listens for changes in these options through onChange event handlers (handleGroupingChange and handleSortingChange) and updates the 
corresponding state variables using the provided functions. Users can choose to group tickets by status, user, or priority, and sort
them by priority or title. It provides an interactive user interface for customizing how tickets are displayed on a Kanban board.

*/
