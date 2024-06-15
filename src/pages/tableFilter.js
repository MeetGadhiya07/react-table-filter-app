import React, { useState, useEffect, useMemo, useCallback } from "react";
import Filters from "../components/Filters";
import Table from "../components/Table";

const TableFilter = ({ dataSet }) => {
  const [data, setData] = useState(dataSet);
  const [filters, setFilters] = useState({});
  const [searchTerm, setSearchTerm] = useState("");

  // Extract unique filter values from data
  const uniqueValues = useCallback(
    (key) => {
      return [...new Set(dataSet.map((item) => item[key]))].filter(Boolean);
    },
    [dataSet]
  );

  // Generate all possible keys from data set
  const allKeys = useMemo(() => {
    return Array.from(
      new Set(
        dataSet.reduce((keys, item) => keys.concat(Object.keys(item)), [])
      )
    );
  }, [dataSet]);

  // Generate filter keys dynamically, excluding the 'id' and 'name'/'mall' keys
  const filterKeys = useMemo(() => {
    return allKeys.filter(
      (key) => key !== "id" && key !== "name" && key !== "mall"
    );
  }, [allKeys]);

  // Handle filter change
  const handleFilterChange = useCallback((filterName, value) => {
    setFilters((prevFilters) => {
      const isChecked = prevFilters[filterName]?.includes(value);
      const updatedFilters = isChecked
        ? prevFilters[filterName].filter((item) => item !== value)
        : [...(prevFilters[filterName] || []), value];
      return { ...prevFilters, [filterName]: updatedFilters };
    });
  }, []);

  // Handle search term change
  const handleSearchChange = useCallback((event) => {
    setSearchTerm(event.target.value);
  }, []);

  // Filter data based on selected filters and search term
  const filterData = useCallback(() => {
    let filtered = dataSet;

    // Apply filters
    Object.keys(filters).forEach((key) => {
      if (filters[key]?.length > 0) {
        filtered = filtered.filter((item) => filters[key].includes(item[key]));
      }
    });

    // Apply search term
    if (searchTerm) {
      const searchKey = dataSet[0].hasOwnProperty("name") ? "name" : "mall";
      filtered = filtered.filter((item) =>
        item[searchKey].toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setData(filtered);
  }, [filters, searchTerm, dataSet]);

  useEffect(() => {
    filterData();
  }, [filters, searchTerm, filterData]);

  // Generate columns dynamically from all keys, including 'id' key
  const columns = useMemo(() => {
    return allKeys.map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));
  }, [allKeys]);

  return (
    <>
      <Filters
        uniqueValues={uniqueValues}
        filterKeys={filterKeys}
        filters={filters}
        handleFilterChange={handleFilterChange}
        searchTerm={searchTerm}
        handleSearchChange={handleSearchChange}
      />
      <Table data={data} columns={columns} />
    </>
  );
};

export default TableFilter;
