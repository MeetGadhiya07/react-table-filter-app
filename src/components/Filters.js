import React, { memo, useMemo } from "react";

const Filters = ({
  uniqueValues,
  filterKeys,
  filters,
  handleFilterChange,
  searchTerm,
  handleSearchChange,
}) => {
  // Memoize the renderFilterOptions function to avoid unnecessary re-renders
  const renderFilterOptions = useMemo(
    () => (filterName) => {
      return uniqueValues(filterName).map((value) => (
        <label className="switch" key={value}>
          <input
            type="checkbox"
            checked={filters[filterName]?.includes(value) || false}
            onChange={() => handleFilterChange(filterName, value)}
          />
          <span className="slider round">{value}</span>
        </label>
      ));
    },
    [filters, handleFilterChange, uniqueValues]
  );

  return (
    <div className="filter-main">
      {filterKeys.map((key) => (
        <div className="filter-main-child" key={key}>
          <p>{key.charAt(0).toUpperCase() + key.slice(1)}</p>
          <div className="filter-switch">{renderFilterOptions(key)}</div>
        </div>
      ))}
      <div className="filter-search">
        <input
          type="text"
          placeholder="Search by name"
          className="search-input"
          value={searchTerm}
          onChange={handleSearchChange}
        />
      </div>
    </div>
  );
};

// Export memoized component to avoid unnecessary re-renders
export default memo(Filters);
