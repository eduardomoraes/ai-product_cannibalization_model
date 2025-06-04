# Installation Guide for AI Product Cannibalization Analysis System

This document provides instructions for installing and running the AI Product Cannibalization Analysis System on your server.

## Prerequisites

- Python 3.8 or higher
- Node.js 14 or higher
- PostgreSQL 12 or higher (optional, for production deployment)
- Redis (optional, for production deployment)

## Installation Steps

### 1. Clone the Repository

```bash
git clone https://github.com/your-organization/cannibalization-system.git
cd cannibalization-system
```

### 2. Set Up Python Environment

```bash
# Create and activate virtual environment
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate

# Install dependencies
pip install -r requirements.txt
```

### 3. Configure the Application

```bash
# Copy example configuration
cp config.example.py config.py

# Edit configuration file with your settings
nano config.py
```

### 4. Initialize the Database

```bash
# For development (SQLite)
python manage.py init_db

# For production (PostgreSQL)
# First create database in PostgreSQL
# Then run:
python manage.py init_db --production
```

### 5. Run the Application

```bash
# Development mode
python app.py

# Production mode
gunicorn -w 4 -b 0.0.0.0:5000 app:app
```

### 6. Access the Application

Open your web browser and navigate to:
- Development: http://localhost:5000
- Production: http://your-server-address:5000

## Docker Deployment

For containerized deployment:

```bash
# Build the Docker image
docker build -t cannibalization-system .

# Run the container
docker run -d -p 5000:5000 --name cannibalization-app cannibalization-system
```

## Troubleshooting

If you encounter issues during installation:

1. Check Python and Node.js versions
2. Verify all dependencies are installed
3. Check database connection settings
4. Review logs in the `logs` directory
5. Ensure proper permissions for file uploads directory

For additional help, contact support at support@example.com
