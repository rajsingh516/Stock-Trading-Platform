# Stock Trading Platform

A full-stack stock trading platform built with React, Node.js, and modern web technologies. This application provides a comprehensive dashboard for managing holdings, orders, and positions in the stock market.

## Project Structure

```
├── backend/         # Node.js Express backend server
├── dashboard/       # React dashboard for trading
├── frontend/        # Landing page and authentication
└── package.json     # Root package configuration
```

## Features

- **Dashboard**: Real-time trading dashboard with portfolio management
- **Holdings Management**: Track and manage your stock holdings
- **Order Management**: Create and manage buy/sell orders
- **Position Tracking**: View current market positions
- **Watchlist**: Monitor favorite stocks
- **Funds Management**: Track account funds
- **Responsive UI**: Beautiful and intuitive user interface

## Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express** - Web framework
- **MongoDB** - Database (implied by schema files)

### Frontend
- **React** - UI library
- **JavaScript** - Programming language
- **CSS** - Styling

### Dashboard
- **React** - UI framework
- **Chart Components** - Data visualization (DoughnoutChart, VerticalGraph)

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/rajsingh516/Stock-Trading-Platform.git
   cd Stock-Trading-Platform
   ```

2. **Install root dependencies**
   ```bash
   npm install
   ```

3. **Install backend dependencies**
   ```bash
   cd backend
   npm install
   cd ..
   ```

4. **Install dashboard dependencies**
   ```bash
   cd dashboard
   npm install
   cd ..
   ```

5. **Install frontend dependencies**
   ```bash
   cd frontend
   npm install
   cd ..
   ```

### Environment Setup

Create `.env` files in the backend directory with appropriate configuration:

```
# backend/.env
MONGODB_URI=your_mongodb_uri
PORT=5000
NODE_ENV=development
```

### Running the Application

1. **Start the backend**
   ```bash
   cd backend
   npm start
   ```

2. **Start the dashboard** (in a new terminal)
   ```bash
   cd dashboard
   npm start
   ```

3. **Start the frontend** (in a new terminal)
   ```bash
   cd frontend
   npm start
   ```

The application will be available at:
- Frontend: http://localhost:3000
- Dashboard: http://localhost:3001 (or configured port)
- Backend API: http://localhost:5000

## Project Components

### Backend
- `model/` - Database models for Holdings, Orders, and Positions
- `schemas/` - Schema definitions for data validation
- `index.js` - Main server entry point

### Dashboard
- `components/` - React components for the trading dashboard
- `src/` - Main dashboard source code
- `public/` - Static assets

### Frontend
- `landing_page/` - Landing page and marketing materials
- `about/` - About page
- `products/` - Product showcase
- `pricing/` - Pricing information
- `support/` - Customer support section
- `src/` - Source code

## Available Scripts

Each subdirectory has its own scripts. Common commands:

```bash
npm start       # Start the development server
npm test        # Run tests
npm run build   # Build for production
```

## Testing

Run tests for each module:

```bash
cd frontend
npm test
```

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For more information, visit the project repository:
- GitHub: [Stock-Trading-Platform](https://github.com/rajsingh516/Stock-Trading-Platform)

## Support

For support, please create an issue in the GitHub repository or contact the development team.

---

**Happy Trading!** 📈
