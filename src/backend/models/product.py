from sqlalchemy import Column, String, Date, DECIMAL, Text,TIMESTAMP, func
from sqlalchemy.dialects.postgresql import JSONB  # For PostgreSQL specific JSONB
# from sqlalchemy import JSON # Generic JSON type, use if not PostgreSQL or if JSONB is not essential

# Assuming 'Base' is defined in a central 'database.py' or similar
from ..database import Base # Adjust this import based on your project structure

class Product(Base):
    __tablename__ = "products"

    sku_id = Column(String, primary_key=True, index=True, unique=True)
    product_name = Column(String, nullable=False)
    brand_name = Column(String, nullable=True)
    category_name = Column(String, nullable=False, index=True)
    subcategory_name = Column(String, nullable=True)
    launch_date = Column(Date, nullable=True)
    discontinuation_date = Column(Date, nullable=True)
    price_retail_srp = Column(DECIMAL, nullable=True)
    price_wholesale = Column(DECIMAL, nullable=True)
    unit_cost = Column(DECIMAL, nullable=True)
    package_size = Column(String, nullable=True)
    product_tier = Column(String, nullable=True, index=True)

    # For key_features_json, using JSONB for PostgreSQL.
    # For other databases, you might use Text or the generic JSON type.
    key_features_json = Column(JSONB, nullable=True)
    # key_features_json = Column(JSON, nullable=True) # Generic JSON
    # key_features_json = Column(Text, nullable=True) # Fallback to Text if JSON type is not well supported

    created_at = Column(TIMESTAMP, server_default=func.now(), nullable=False)
    updated_at = Column(TIMESTAMP, server_default=func.now(), onupdate=func.now(), nullable=False)

    # Define relationships later, e.g., with sales_historical
    # sales = relationship("SalesHistorical", back_populates="product")

    def __repr__(self):
        return f"<Product(sku_id='{self.sku_id}', name='{self.product_name}')>"
