from fastapi import FastAPI

app = FastAPI(title="Strategic Retail Analytics Assistant API")

@app.get("/")
async def root():
    return {"message": "Welcome to the Strategic Retail Analytics Assistant API!"}

@app.get("/hello/{name}")
async def say_hello(name: str):
    return {"message": f"Hello {name}"}

# Placeholder for future modules based on DESIGN_DOCUMENT.md
# For example:
# from .routers import detection, simulation
# app.include_router(detection.router, prefix="/detection", tags=["Detection"])
# app.include_router(simulation.router, prefix="/simulation", tags=["Simulation"])

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)
