# React Table Filter App

## Overview

This React application allows users to filter and search through a dataset using dynamic filters and a search bar. The app is built with functional components, utilizing hooks such as `useState`, `useEffect`, `useMemo`, and `useCallback`.

## Features

- Dynamic filtering based on dataset fields.
- Search functionality by name or mall.
- Responsive table displaying the filtered data.
- Efficient rendering using memoized components and data.

## Structure

- **App.js**: Main entry point, sets the initial dataset.
- **pages/TableFilter.js**: Handles the logic for filtering and displaying data.
- **components/Filters.js**: Renders filter options and search bar.
- **components/Table.js**: Displays the filtered data in a table format.

## Getting Started

### Prerequisites

- Node.js
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/MeetGadhiya07/react-table-filter-app.git
   ```
2. Navigate to the project directory:
   ```bash
   cd react-table-filter-app
   ```
3. Install the dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm start
   ```

## Usage

- Use the checkboxes to apply filters.
- Use the search bar to search by name or mall.
- The table updates dynamically based on the selected filters and search term.

## File Breakdown

- **App.js**: Initializes the dataset and renders the `TableFilter` component.
- **pages/TableFilter.js**: Contains the main logic for filtering and passing data to the `Filters` and `Table` components.
- **components/Filters.js**: Generates filter options and search input.
- **components/Table.js**: Renders the table with dynamic columns and rows.

## Dependencies

- `react`
- `react-dom`
- `react-table`
