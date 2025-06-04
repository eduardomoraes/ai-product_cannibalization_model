from flask import Flask, render_template, request, jsonify, send_from_directory
import os
import json
import pandas as pd
import uuid
from werkzeug.utils import secure_filename
import datetime
import logging

# Configure logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(name)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = os.path.join(os.path.dirname(os.path.abspath(__file__)), 'uploads')
app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB max upload size
app.config['ALLOWED_EXTENSIONS'] = {'csv', 'xlsx', 'xls', 'json', 'xml'}

# Ensure upload directory exists
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Helper functions
def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in app.config['ALLOWED_EXTENSIONS']

def process_file(file_path):
    """Process uploaded file based on its extension"""
    ext = file_path.rsplit('.', 1)[1].lower()
    try:
        if ext == 'csv':
            df = pd.read_csv(file_path)
            return {"success": True, "rows": len(df), "columns": list(df.columns)}
        elif ext in ['xlsx', 'xls']:
            df = pd.read_excel(file_path)
            return {"success": True, "rows": len(df), "columns": list(df.columns)}
        elif ext == 'json':
            with open(file_path, 'r') as f:
                data = json.load(f)
            return {"success": True, "structure": "JSON object" if isinstance(data, dict) else "JSON array"}
        elif ext == 'xml':
            # Simple XML validation, would use proper XML parsing in production
            with open(file_path, 'r') as f:
                content = f.read()
            return {"success": True, "size": len(content)}
        else:
            return {"success": False, "error": "Unsupported file format"}
    except Exception as e:
        logger.error(f"Error processing file {file_path}: {str(e)}")
        return {"success": False, "error": str(e)}

# Routes
@app.route('/')
def index():
    return render_template('index.html')

@app.route('/api/upload', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({"success": False, "error": "No file part"}), 400
    
    file = request.files['file']
    if file.filename == '':
        return jsonify({"success": False, "error": "No selected file"}), 400
    
    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        # Add timestamp to filename to avoid collisions
        timestamp = datetime.datetime.now().strftime("%Y%m%d_%H%M%S")
        unique_filename = f"{timestamp}_{filename}"
        file_path = os.path.join(app.config['UPLOAD_FOLDER'], unique_filename)
        file.save(file_path)
        
        # Process the file
        result = process_file(file_path)
        if result["success"]:
            result["filename"] = unique_filename
            result["original_filename"] = filename
            return jsonify(result), 200
        else:
            # Clean up file if processing failed
            os.remove(file_path)
            return jsonify(result), 400
    
    return jsonify({"success": False, "error": "File type not allowed"}), 400

@app.route('/api/analyze', methods=['POST'])
def analyze_data():
    """Endpoint for analyzing cannibalization based on uploaded data"""
    data = request.json
    
    # In a real implementation, this would call the AI model with appropriate prompts
    # For now, we'll return a mock response
    
    analysis_id = str(uuid.uuid4())
    
    # Mock analysis result based on the framework
    mock_result = {
        "analysis_id": analysis_id,
        "timestamp": datetime.datetime.now().isoformat(),
        "impact_framework": {
            "identify": {
                "scenario_type": "New Product Introduction",
                "affected_products": ["Product A", "Product B"],
                "risk_level": "Medium"
            },
            "measure": {
                "estimated_cannibalization": "15-20%",
                "revenue_impact": "-$50,000 to +$120,000",
                "market_share_impact": "+2.5%"
            },
            "predict": {
                "best_case": "Net revenue increase of $120,000",
                "worst_case": "Net revenue decrease of $50,000",
                "most_likely": "Net revenue increase of $35,000",
                "confidence_level": "Medium (65%)"
            },
            "analyze": {
                "key_factors": [
                    "Price positioning relative to existing products",
                    "Feature differentiation",
                    "Target customer overlap"
                ],
                "sensitivity": "Most sensitive to price positioning"
            },
            "create": {
                "recommendations": [
                    "Adjust pricing to minimize overlap with Product A",
                    "Emphasize unique features in marketing",
                    "Target specific customer segments with low current penetration"
                ]
            },
            "timeline": {
                "immediate_actions": ["Pricing strategy adjustment", "Marketing message refinement"],
                "monitoring_plan": "Weekly sales tracking for first 3 months",
                "review_points": ["30 days", "90 days", "180 days"]
            }
        }
    }
    
    return jsonify({"success": True, "result": mock_result}), 200

@app.route('/api/scenarios', methods=['POST'])
def create_scenario():
    """Endpoint for creating what-if scenarios"""
    data = request.json
    
    # Mock scenario creation
    scenario_id = str(uuid.uuid4())
    
    return jsonify({
        "success": True, 
        "scenario_id": scenario_id,
        "message": "Scenario created successfully"
    }), 200

@app.route('/api/static/<path:path>')
def serve_static(path):
    return send_from_directory('static', path)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000, debug=True)
