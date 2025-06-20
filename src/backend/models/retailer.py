from sqlalchemy import Column, String, Text, Integer, TIMESTAMP, func

# Assuming 'Base' is defined in a central 'database.py' or similar
from ..database import Base # Adjust this import based on your project structure

class Retailer(Base):
    __tablename__ = "retailers"

    retailer_id = Column(String, primary_key=True, index=True, unique=True)
    retailer_name = Column(String, nullable=False)
    number_of_stores = Column(Integer, nullable=True)
    notes = Column(Text, nullable=True)

    created_at = Column(TIMESTAMP, server_default=func.now(), nullable=False)
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now(), nullable=False)

    # Define relationships later, e.g., with sales_historical
    # sales = relationship("SalesHistorical", back_populates="retailer")

    def __repr__(self):
        return f"<Retailer(retailer_id='{self.retailer_id}', name='{self.retailer_name}')>"
