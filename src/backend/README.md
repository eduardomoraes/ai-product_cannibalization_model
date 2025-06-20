# Backend Service - Strategic Retail Analytics Assistant

This directory contains the Python FastAPI backend for the Strategic Retail Analytics Assistant.

## Running the Development Server

1.  **Navigate to this directory (`src/backend/`) in your terminal.**
2.  **Create a virtual environment (recommended):**
    ```bash
    python -m venv venv
    source venv/bin/activate  # On Windows use `venv\Scripts\activate`
    ```
3.  **Install dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4.  **Run the FastAPI application using Uvicorn:**
    ```bash
    uvicorn main:app --reload
    ```
    The `--reload` flag enables auto-reloading when code changes, which is useful for development.
    The application will typically be available at `http://127.0.0.1:8000`.

## API Endpoints

*   `GET /`: Welcome message.
*   `GET /docs`: Interactive API documentation (Swagger UI).
*   `GET /redoc`: Alternative API documentation (ReDoc).
*   `GET /hello/{name}`: A simple hello endpoint.

Further endpoints for detection, simulation, etc., will be added based on the project's `DESIGN_DOCUMENT.md`.
