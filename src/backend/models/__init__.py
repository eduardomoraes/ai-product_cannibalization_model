# Import Base from database.py to be used by models
from ..database import Base

# Import all models here to make them easily accessible
from .product import Product
from .retailer import Retailer
# Add other models here as they are created, e.g.:
# from .sales_historical import SalesHistorical
# from .simulation import Simulation
# from .simulation_result import SimulationResult

print("Models package initialized. Imported: Product, Retailer")
print("Ensure that models correctly inherit from the 'Base' imported from database.py.")

# Optional: __all__ to define what `from .models import *` imports
__all__ = [
    "Product",
    "Retailer",
    # "SalesHistorical",
    # "Simulation",
    # "SimulationResult",
]
