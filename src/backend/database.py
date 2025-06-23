import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# Default to a local development PostgreSQL instance if DATABASE_URL is not set.
# Replace 'user', 'password', and 'retail_analytics_dev' as needed for your default local setup.
DEFAULT_DATABASE_URL = "postgresql://user:password@localhost:5432/retail_analytics_dev"
SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", DEFAULT_DATABASE_URL)

engine = create_engine(
    SQLALCHEMY_DATABASE_URL
    # For PostgreSQL, 'connect_args' is usually not needed unless for specific SSL modes etc.
    # For SQLite, it was: connect_args={"check_same_thread": False}
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

# Dependency to get DB session in FastAPI routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

# Optional: Add a function to create all tables (for use in main.py during startup if not using Alembic for everything)
# def create_db_and_tables():
#     Base.metadata.create_all(bind=engine)
