from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

# SQLALCHEMY_DATABASE_URL = "sqlite:///./sql_app.db" # Example for SQLite
SQLALCHEMY_DATABASE_URL = "postgresql://user:password@host:5432/database" # Example for PostgreSQL

# In a real application, get this URL from environment variables or a config file
# For example:
# import os
# SQLALCHEMY_DATABASE_URL = os.getenv("DATABASE_URL", "postgresql://user:password@localhost/mydatabase")


# engine = create_engine(
#     SQLALCHEMY_DATABASE_URL
#     # connect_args={"check_same_thread": False} # Needed only for SQLite
# )

# SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base() # Base can be defined without an engine

# Dependency to get DB session in FastAPI routes
# def get_db():
#     db = SessionLocal()
#     try:
#         yield db
#     finally:
#         db.close()

# print(f"Database URL for engine: {SQLALCHEMY_DATABASE_URL}") # For debugging, remove in production
# print("SQLAlchemy engine and SessionLocal configured.")
# print("Ensure your database server is running and the DATABASE_URL is correctly set.")
