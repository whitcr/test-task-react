# Camper Rental Application

This is a web application built with React and Redux for a company that provides
camper rental services in Ukraine.

## Features

- Home page with a general description of the company's services
- Catalog page displaying available campers with filtering options (location,
  equipment, type)
- Favorites page to view campers added to the user's favorites list
- Modal window with detailed camper information and a booking form
- Pagination for the catalog page (4 campers per page)
- Ability to add/remove campers to/from the favorites list
- State persistence after page refresh for the favorites list

## Technologies Used

- React
- Redux
- React Router
- Axios
- MockAPI (for creating a mock backend)

## Installation

1. Clone the repository: `git clone https://github.com/your-repo-url.git`
2. Install dependencies: `npm install`
3. Create a mock backend on MockAPI and update the API endpoint in the codebase
4. Start the development server: `npm start`

## Usage

- Navigate to the Home page (`/`) to view the general service description
- Go to the Catalog page (`/catalog`) to browse available campers and filter
  them
- Click the heart icon on a camper card to add/remove it from the favorites list
- Click the "Show more" button to open the modal window with detailed camper
  information
- In the modal window, you can switch between tabs to view camper details and
  reviews
- Fill out the booking form in the modal window to make a reservation (form
  validation is implemented)
- Visit the Favorites page (`/favorites`) to see your favorite campers
