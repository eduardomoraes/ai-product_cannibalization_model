// Main JavaScript file for the AI Product Cannibalization Analysis System

// App state
const appState = {
    currentView: 'dashboard',
    uploadedFiles: [],
    analyses: [],
    scenarios: [],
    selectedRetailContext: 'general',
    isLoading: false,
    notifications: []
};

// Retail contexts supported by the system
const retailContexts = [
    { id: 'general', name: 'General Retail' },
    { id: 'wines', name: 'Wines & Spirits' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'tools', name: 'Tools & Hardware' },
    { id: 'toys', name: 'Toys & Games' },
    { id: 'electronics', name: 'Electronics' },
    { id: 'fashion', name: 'Fashion & Apparel' },
    { id: 'grocery', name: 'Grocery & Food' }
];

// Component: Navigation
function Navigation() {
    return `
        <nav class="bg-white shadow-sm">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div class="flex justify-between h-16">
                    <div class="flex">
                        <div class="flex-shrink-0 flex items-center">
                            <h1 class="text-xl font-bold text-blue-600">AI Product Cannibalization Analysis</h1>
                        </div>
                        <div class="hidden sm:ml-6 sm:flex sm:space-x-8">
                            <a href="#" class="${appState.currentView === 'dashboard' ? 'nav-link-active' : 'nav-link'}" 
                               onclick="changeView('dashboard'); return false;">Dashboard</a>
                            <a href="#" class="${appState.currentView === 'upload' ? 'nav-link-active' : 'nav-link'}"
                               onclick="changeView('upload'); return false;">Data Upload</a>
                            <a href="#" class="${appState.currentView === 'analysis' ? 'nav-link-active' : 'nav-link'}"
                               onclick="changeView('analysis'); return false;">Analysis</a>
                            <a href="#" class="${appState.currentView === 'scenarios' ? 'nav-link-active' : 'nav-link'}"
                               onclick="changeView('scenarios'); return false;">Scenarios</a>
                            <a href="#" class="${appState.currentView === 'monitoring' ? 'nav-link-active' : 'nav-link'}"
                               onclick="changeView('monitoring'); return false;">Monitoring</a>
                        </div>
                    </div>
                    <div class="flex items-center">
                        <select id="retailContextSelector" class="input-field" onchange="changeRetailContext(this.value)">
                            ${retailContexts.map(context => 
                                `<option value="${context.id}" ${appState.selectedRetailContext === context.id ? 'selected' : ''}>
                                    ${context.name}
                                </option>`
                            ).join('')}
                        </select>
                    </div>
                </div>
            </div>
        </nav>
    `;
}

// Component: Dashboard
function Dashboard() {
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 class="text-2xl font-bold mb-6">Product Cannibalization Dashboard</h2>
            
            ${appState.analyses.length === 0 ? EmptyDashboard() : PopulatedDashboard()}
        </div>
    `;
}

function EmptyDashboard() {
    return `
        <div class="bg-white shadow rounded-lg p-6 text-center">
            <h3 class="text-xl font-medium text-gray-700 mb-2">Welcome to the AI Product Cannibalization Analysis System</h3>
            <p class="text-gray-500 mb-4">Get started by uploading your product data for analysis</p>
            <button class="btn-primary" onclick="changeView('upload')">Upload Data</button>
        </div>
        
        <div class="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div class="card">
                <h3 class="text-lg font-medium mb-2">Identify Cannibalization</h3>
                <p class="text-gray-500">Understand how products in your portfolio affect each other's sales</p>
            </div>
            <div class="card">
                <h3 class="text-lg font-medium mb-2">Measure Impact</h3>
                <p class="text-gray-500">Quantify the financial effects of product cannibalization</p>
            </div>
            <div class="card">
                <h3 class="text-lg font-medium mb-2">Create Strategies</h3>
                <p class="text-gray-500">Develop data-driven approaches to optimize your product portfolio</p>
            </div>
        </div>
    `;
}

function PopulatedDashboard() {
    // In a real implementation, this would use actual analysis data
    return `
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div class="metric-card">
                <span class="metric-label">Cannibalization Risk Level</span>
                <span class="metric-value text-yellow-500">Medium</span>
            </div>
            <div class="metric-card">
                <span class="metric-label">Estimated Revenue Impact</span>
                <span class="metric-value text-green-500">+$35,000</span>
            </div>
            <div class="metric-card">
                <span class="metric-label">Confidence Level</span>
                <span class="metric-value">65%</span>
            </div>
        </div>
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div class="chart-container">
                <h3 class="text-lg font-medium mb-4">Cannibalization Impact by Product</h3>
                <canvas id="cannibalizationChart"></canvas>
            </div>
            <div class="chart-container">
                <h3 class="text-lg font-medium mb-4">Revenue Projection Scenarios</h3>
                <canvas id="scenarioChart"></canvas>
            </div>
        </div>
        
        <div class="mt-8">
            <h3 class="text-lg font-medium mb-4">Top Recommendations</h3>
            <div class="bg-white shadow overflow-hidden sm:rounded-md">
                <ul class="divide-y divide-gray-200">
                    <li class="px-4 py-4 sm:px-6">
                        <div class="flex items-center">
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-blue-600 truncate">Adjust pricing to minimize overlap with Product A</p>
                                <p class="mt-1 text-sm text-gray-500">High impact, Medium effort</p>
                            </div>
                        </div>
                    </li>
                    <li class="px-4 py-4 sm:px-6">
                        <div class="flex items-center">
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-blue-600 truncate">Emphasize unique features in marketing</p>
                                <p class="mt-1 text-sm text-gray-500">Medium impact, Low effort</p>
                            </div>
                        </div>
                    </li>
                    <li class="px-4 py-4 sm:px-6">
                        <div class="flex items-center">
                            <div class="min-w-0 flex-1">
                                <p class="text-sm font-medium text-blue-600 truncate">Target specific customer segments with low current penetration</p>
                                <p class="mt-1 text-sm text-gray-500">High impact, High effort</p>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    `;
}

// Component: Data Upload
function DataUpload() {
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 class="text-2xl font-bold mb-6">Data Upload</h2>
            
            <div class="card">
                <h3 class="text-lg font-medium mb-4">Upload Product Data</h3>
                <div class="upload-zone" id="uploadZone" onclick="triggerFileUpload()">
                    <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48">
                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    <p class="mt-1 text-sm text-gray-600">
                        Drag and drop your file here, or click to select a file
                    </p>
                    <p class="mt-1 text-xs text-gray-500">
                        Supported formats: CSV, Excel, JSON, XML
                    </p>
                </div>
                <input type="file" id="fileInput" class="hidden" onchange="handleFileUpload(this.files)" />
            </div>
            
            <div class="mt-6">
                <h3 class="text-lg font-medium mb-4">Uploaded Files</h3>
                ${renderUploadedFiles()}
            </div>
            
            <div class="mt-6">
                <h3 class="text-lg font-medium mb-4">External Data Sources</h3>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div class="border rounded p-4">
                        <h4 class="font-medium">Cloud Storage</h4>
                        <p class="text-sm text-gray-500 mb-2">Connect to AWS S3, Google Cloud Storage, etc.</p>
                        <button class="btn-secondary text-sm" onclick="showIntegrationModal('cloud')">Connect</button>
                    </div>
                    <div class="border rounded p-4">
                        <h4 class="font-medium">Database</h4>
                        <p class="text-sm text-gray-500 mb-2">Connect to SQL, NoSQL databases</p>
                        <button class="btn-secondary text-sm" onclick="showIntegrationModal('database')">Connect</button>
                    </div>
                    <div class="border rounded p-4">
                        <h4 class="font-medium">API Integration</h4>
                        <p class="text-sm text-gray-500 mb-2">Connect to external APIs</p>
                        <button class="btn-secondary text-sm" onclick="showIntegrationModal('api')">Connect</button>
                    </div>
                </div>
            </div>
        </div>
    `;
}

function renderUploadedFiles() {
    if (appState.uploadedFiles.length === 0) {
        return `<p class="text-gray-500">No files uploaded yet</p>`;
    }
    
    return `
        <div class="bg-white shadow overflow-hidden sm:rounded-md">
            <ul class="divide-y divide-gray-200">
                ${appState.uploadedFiles.map((file, index) => `
                    <li class="px-4 py-4 sm:px-6">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center">
                                <div class="flex-shrink-0">
                                    <svg class="h-5 w-5 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4z" clip-rule="evenodd" />
                                    </svg>
                                </div>
                                <div class="ml-3">
                                    <p class="text-sm font-medium text-gray-900">${file.original_filename}</p>
                                    <p class="text-sm text-gray-500">
                                        ${file.rows ? `${file.rows} rows, ${file.columns.length} columns` : 
                                          file.structure ? `Structure: ${file.structure}` : 
                                          file.size ? `Size: ${file.size} bytes` : ''}
                                    </p>
                                </div>
                            </div>
                            <div>
                                <button class="text-sm text-blue-600 hover:text-blue-800" 
                                        onclick="analyzeFile('${file.filename}')">
                                    Analyze
                                </button>
                            </div>
                        </div>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

// Component: Analysis
function Analysis() {
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 class="text-2xl font-bold mb-6">Cannibalization Analysis</h2>
            
            ${appState.analyses.length === 0 ? EmptyAnalysis() : renderAnalyses()}
        </div>
    `;
}

function EmptyAnalysis() {
    return `
        <div class="bg-white shadow rounded-lg p-6 text-center">
            <h3 class="text-xl font-medium text-gray-700 mb-2">No Analyses Yet</h3>
            <p class="text-gray-500 mb-4">Upload data and run an analysis to see results here</p>
            <button class="btn-primary" onclick="changeView('upload')">Upload Data</button>
        </div>
    `;
}

function renderAnalyses() {
    // In a real implementation, this would render actual analyses
    return `
        <div class="card">
            <h3 class="text-xl font-bold mb-4">Analysis Results</h3>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">I - Identify the cannibalization scenario</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <p><strong>Scenario Type:</strong> New Product Introduction</p>
                    <p><strong>Affected Products:</strong> Product A, Product B</p>
                    <p><strong>Risk Level:</strong> Medium</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">M - Measure potential impact</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <p><strong>Estimated Cannibalization:</strong> 15-20%</p>
                    <p><strong>Revenue Impact:</strong> -$50,000 to +$120,000</p>
                    <p><strong>Market Share Impact:</strong> +2.5%</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">P - Predict outcomes with confidence levels</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <p><strong>Best Case:</strong> Net revenue increase of $120,000</p>
                    <p><strong>Worst Case:</strong> Net revenue decrease of $50,000</p>
                    <p><strong>Most Likely:</strong> Net revenue increase of $35,000</p>
                    <p><strong>Confidence Level:</strong> Medium (65%)</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">A - Analyze alternatives and scenarios</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <p><strong>Key Factors:</strong></p>
                    <ul class="list-disc pl-5">
                        <li>Price positioning relative to existing products</li>
                        <li>Feature differentiation</li>
                        <li>Target customer overlap</li>
                    </ul>
                    <p class="mt-2"><strong>Sensitivity:</strong> Most sensitive to price positioning</p>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">C - Create actionable recommendations</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <ul class="list-disc pl-5">
                        <li>Adjust pricing to minimize overlap with Product A</li>
                        <li>Emphasize unique features in marketing</li>
                        <li>Target specific customer segments with low current penetration</li>
                    </ul>
                </div>
            </div>
            
            <div class="mb-6">
                <h4 class="text-lg font-medium mb-2">T - Timeline and implementation steps</h4>
                <div class="bg-gray-50 p-4 rounded">
                    <p><strong>Immediate Actions:</strong></p>
                    <ul class="list-disc pl-5">
                        <li>Pricing strategy adjustment</li>
                        <li>Marketing message refinement</li>
                    </ul>
                    <p class="mt-2"><strong>Monitoring Plan:</strong> Weekly sales tracking for first 3 months</p>
                    <p><strong>Review Points:</strong> 30 days, 90 days, 180 days</p>
                </div>
            </div>
            
            <div class="mt-6 flex justify-end">
                <button class="btn-secondary mr-2" onclick="exportAnalysis('pdf')">Export as PDF</button>
                <button class="btn-secondary" onclick="exportAnalysis('excel')">Export as Excel</button>
            </div>
        </div>
    `;
}

// Component: Scenarios
function Scenarios() {
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 class="text-2xl font-bold mb-6">What-If Scenarios</h2>
            
            <div class="card">
                <h3 class="text-lg font-medium mb-4">Create New Scenario</h3>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Scenario Type</label>
                    <select class="input-field" id="scenarioType">
                        <option value="new_launch">New Product Launch</option>
                        <option value="competitor_entry">Competitor Entry</option>
                        <option value="price_change">Price Change</option>
                    </select>
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Product Details</label>
                    <textarea class="input-field" id="productDetails" rows="3" placeholder="Enter product specifications, features, pricing, etc."></textarea>
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Market Conditions</label>
                    <textarea class="input-field" id="marketConditions" rows="2" placeholder="Describe current market conditions"></textarea>
                </div>
                
                <div class="mb-4">
                    <label class="block text-sm font-medium text-gray-700 mb-1">Time Horizon</label>
                    <select class="input-field" id="timeHorizon">
                        <option value="3_months">3 Months</option>
                        <option value="6_months">6 Months</option>
                        <option value="12_months">12 Months</option>
                        <option value="24_months">24 Months</option>
                    </select>
                </div>
                
                <div class="flex justify-end">
                    <button class="btn-primary" onclick="createScenario()">Run Simulation</button>
                </div>
            </div>
            
            <div class="mt-6">
                <h3 class="text-lg font-medium mb-4">Scenario Comparison</h3>
                
                ${appState.scenarios.length === 0 ? 
                    `<p class="text-gray-500">No scenarios created yet</p>` : 
                    renderScenarioComparison()}
            </div>
        </div>
    `;
}

function renderScenarioComparison() {
    // In a real implementation, this would compare actual scenarios
    return `
        <div class="overflow-x-auto">
            <table class="data-table">
                <thead>
                    <tr>
                        <th>Metric</th>
                        <th>Base Case</th>
                        <th>Best Case</th>
                        <th>Worst Case</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Revenue Impact</td>
                        <td>+$35,000</td>
                        <td>+$120,000</td>
                        <td>-$50,000</td>
                    </tr>
                    <tr>
                        <td>Cannibalization Rate</td>
                        <td>17.5%</td>
                        <td>15%</td>
                        <td>20%</td>
                    </tr>
                    <tr>
                        <td>Market Share Effect</td>
                        <td>+2.5%</td>
                        <td>+3.8%</td>
                        <td>+1.2%</td>
                    </tr>
                    <tr>
                        <td>Timeline to Impact</td>
                        <td>90 days</td>
                        <td>60 days</td>
                        <td>120 days</td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
            <div class="scenario-card scenario-base">
                <h4 class="font-medium">Base Case Mitigation</h4>
                <ul class="list-disc pl-5 mt-2">
                    <li>Standard pricing strategy</li>
                    <li>Regular marketing campaign</li>
                    <li>Normal distribution channels</li>
                </ul>
            </div>
            <div class="scenario-card scenario-optimistic">
                <h4 class="font-medium">Best Case Enablers</h4>
                <ul class="list-disc pl-5 mt-2">
                    <li>Premium positioning</li>
                    <li>Enhanced feature differentiation</li>
                    <li>Targeted customer segmentation</li>
                </ul>
            </div>
            <div class="scenario-card scenario-pessimistic">
                <h4 class="font-medium">Worst Case Mitigations</h4>
                <ul class="list-disc pl-5 mt-2">
                    <li>Price adjustment contingency</li>
                    <li>Promotional budget increase</li>
                    <li>Channel partner incentives</li>
                </ul>
            </div>
        </div>
    `;
}

// Component: Monitoring
function Monitoring() {
    return `
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <h2 class="text-2xl font-bold mb-6">Performance Monitoring</h2>
            
            <div class="card">
                <h3 class="text-lg font-medium mb-4">Monitoring Dashboard</h3>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                    <div class="bg-green-100 border-l-4 border-green-500 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-green-800">Category Growth Rate</p>
                                <p class="text-sm text-green-700">+5.2% (above threshold)</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-yellow-100 border-l-4 border-yellow-500 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-yellow-800">Product A Sales Velocity</p>
                                <p class="text-sm text-yellow-700">-8.3% (warning threshold)</p>
                            </div>
                        </div>
                    </div>
                    <div class="bg-red-100 border-l-4 border-red-500 p-4">
                        <div class="flex">
                            <div class="flex-shrink-0">
                                <svg class="h-5 w-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clip-rule="evenodd" />
                                </svg>
                            </div>
                            <div class="ml-3">
                                <p class="text-sm font-medium text-red-800">Customer Switching Rate</p>
                                <p class="text-sm text-red-700">23.1% (above critical threshold)</p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-medium mb-2">Cannibalization Indicators</h4>
                    <div class="chart-container">
                        <canvas id="monitoringChart"></canvas>
                    </div>
                </div>
                
                <div class="mb-6">
                    <h4 class="font-medium mb-2">Alert Configuration</h4>
                    <div class="overflow-x-auto">
                        <table class="data-table">
                            <thead>
                                <tr>
                                    <th>Metric</th>
                                    <th>Yellow Threshold</th>
                                    <th>Red Threshold</th>
                                    <th>Current Value</th>
                                    <th>Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Sales Velocity Change</td>
                                    <td>-5%</td>
                                    <td>-10%</td>
                                    <td>-8.3%</td>
                                    <td><span class="px-2 py-1 text-xs rounded-full bg-yellow-100 text-yellow-800">Warning</span></td>
                                </tr>
                                <tr>
                                    <td>Customer Switching Rate</td>
                                    <td>15%</td>
                                    <td>20%</td>
                                    <td>23.1%</td>
                                    <td><span class="px-2 py-1 text-xs rounded-full bg-red-100 text-red-800">Alert</span></td>
                                </tr>
                                <tr>
                                    <td>Market Share Shift</td>
                                    <td>-2%</td>
                                    <td>-4%</td>
                                    <td>-1.2%</td>
                                    <td><span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Normal</span></td>
                                </tr>
                                <tr>
                                    <td>Category Growth Rate</td>
                                    <td>2%</td>
                                    <td>0%</td>
                                    <td>5.2%</td>
                                    <td><span class="px-2 py-1 text-xs rounded-full bg-green-100 text-green-800">Normal</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                
                <div>
                    <h4 class="font-medium mb-2">Notification Settings</h4>
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600" checked>
                                <span class="ml-2 text-sm text-gray-700">Email alerts for red thresholds</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600" checked>
                                <span class="ml-2 text-sm text-gray-700">Dashboard notifications for yellow thresholds</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600">
                                <span class="ml-2 text-sm text-gray-700">Weekly summary reports</span>
                            </label>
                        </div>
                        <div>
                            <label class="flex items-center">
                                <input type="checkbox" class="form-checkbox h-4 w-4 text-blue-600">
                                <span class="ml-2 text-sm text-gray-700">Mobile app notifications</span>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
}

// Component: Notifications
function Notifications() {
    if (appState.notifications.length === 0) return '';
    
    return `
        <div class="fixed bottom-4 right-4 z-50">
            ${appState.notifications.map((notification, index) => `
                <div class="alert-${notification.type} mb-2 shadow-lg" role="alert">
                    <div class="flex">
                        <div class="py-1">
                            <svg class="h-6 w-6 text-${notification.type === 'success' ? 'green' : 'red'}-500 mr-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                ${notification.type === 'success' 
                                    ? '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />'
                                    : '<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />'}
                            </svg>
                        </div>
                        <div>
                            <p class="font-bold">${notification.title}</p>
                            <p class="text-sm">${notification.message}</p>
                        </div>
                        <div class="ml-auto pl-3">
                            <div class="-mx-1.5 -my-1.5">
                                <button class="inline-flex rounded-md p-1.5 text-${notification.type === 'success' ? 'green' : 'red'}-500 hover:bg-${notification.type === 'success' ? 'green' : 'red'}-100" 
                                        onclick="dismissNotification(${index})">
                                    <svg class="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                                        <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}

// Component: Loading Indicator
function LoadingIndicator() {
    if (!appState.isLoading) return '';
    
    return `
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50">
            <div class="bg-white p-6 rounded-lg shadow-xl flex items-center">
                <svg class="animate-spin -ml-1 mr-3 h-8 w-8 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                <span class="text-lg font-medium">Processing...</span>
            </div>
        </div>
    `;
}

// Component: Integration Modal
function IntegrationModal(type) {
    let title, fields;
    
    switch(type) {
        case 'cloud':
            title = 'Connect to Cloud Storage';
            fields = [
                { id: 'provider', label: 'Cloud Provider', type: 'select', options: ['AWS S3', 'Google Cloud Storage', 'Azure Blob Storage'] },
                { id: 'bucket', label: 'Bucket/Container Name', type: 'text' },
                { id: 'accessKey', label: 'Access Key/Connection String', type: 'password' },
                { id: 'secretKey', label: 'Secret Key (if applicable)', type: 'password' }
            ];
            break;
        case 'database':
            title = 'Connect to Database';
            fields = [
                { id: 'dbType', label: 'Database Type', type: 'select', options: ['PostgreSQL', 'MySQL', 'MongoDB', 'SQL Server'] },
                { id: 'host', label: 'Host', type: 'text' },
                { id: 'port', label: 'Port', type: 'text' },
                { id: 'database', label: 'Database Name', type: 'text' },
                { id: 'username', label: 'Username', type: 'text' },
                { id: 'password', label: 'Password', type: 'password' }
            ];
            break;
        case 'api':
            title = 'Connect to API';
            fields = [
                { id: 'apiUrl', label: 'API Base URL', type: 'text' },
                { id: 'authType', label: 'Authentication Type', type: 'select', options: ['None', 'API Key', 'OAuth 2.0', 'Basic Auth'] },
                { id: 'apiKey', label: 'API Key/Token (if applicable)', type: 'password' },
                { id: 'headers', label: 'Additional Headers (JSON)', type: 'textarea' }
            ];
            break;
        default:
            return '';
    }
    
    return `
        <div class="fixed inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center z-50" id="integrationModal">
            <div class="bg-white rounded-lg shadow-xl w-full max-w-md">
                <div class="px-6 py-4 border-b">
                    <h3 class="text-lg font-medium">${title}</h3>
                </div>
                <div class="p-6">
                    <form id="integrationForm">
                        ${fields.map(field => `
                            <div class="mb-4">
                                <label class="block text-sm font-medium text-gray-700 mb-1" for="${field.id}">${field.label}</label>
                                ${field.type === 'select' 
                                    ? `<select class="input-field" id="${field.id}">
                                        ${field.options.map(option => `<option value="${option}">${option}</option>`).join('')}
                                       </select>`
                                    : field.type === 'textarea'
                                        ? `<textarea class="input-field" id="${field.id}" rows="3"></textarea>`
                                        : `<input type="${field.type}" class="input-field" id="${field.id}">`
                                }
                            </div>
                        `).join('')}
                    </form>
                </div>
                <div class="px-6 py-4 border-t bg-gray-50 flex justify-end">
                    <button class="btn-secondary mr-2" onclick="closeIntegrationModal()">Cancel</button>
                    <button class="btn-primary" onclick="submitIntegration('${type}')">Connect</button>
                </div>
            </div>
        </div>
    `;
}

// Utility functions
function changeView(view) {
    appState.currentView = view;
    renderApp();
}

function changeRetailContext(context) {
    appState.selectedRetailContext = context;
    showNotification('Context Changed', `Retail context changed to ${retailContexts.find(c => c.id === context).name}`, 'success');
    renderApp();
}

function triggerFileUpload() {
    document.getElementById('fileInput').click();
}

function handleFileUpload(files) {
    if (!files || files.length === 0) return;
    
    const file = files[0];
    const formData = new FormData();
    formData.append('file', file);
    
    appState.isLoading = true;
    renderApp();
    
    // In a real implementation, this would use actual AJAX
    // Simulating AJAX call with timeout
    setTimeout(() => {
        // Mock successful upload
        const fileExt = file.name.split('.').pop().toLowerCase();
        let mockResponse;
        
        if (fileExt === 'csv') {
            mockResponse = {
                success: true,
                filename: `${Date.now()}_${file.name}`,
                original_filename: file.name,
                rows: 1250,
                columns: ['Date', 'Product', 'Category', 'Sales', 'Revenue']
            };
        } else if (fileExt === 'xlsx' || fileExt === 'xls') {
            mockResponse = {
                success: true,
                filename: `${Date.now()}_${file.name}`,
                original_filename: file.name,
                rows: 2500,
                columns: ['Date', 'Product', 'Category', 'Region', 'Sales', 'Revenue', 'Profit']
            };
        } else if (fileExt === 'json') {
            mockResponse = {
                success: true,
                filename: `${Date.now()}_${file.name}`,
                original_filename: file.name,
                structure: 'JSON array'
            };
        } else {
            mockResponse = {
                success: true,
                filename: `${Date.now()}_${file.name}`,
                original_filename: file.name,
                size: 1024 * 1024 * 2 // 2MB
            };
        }
        
        appState.uploadedFiles.push(mockResponse);
        appState.isLoading = false;
        showNotification('Upload Complete', `File "${file.name}" uploaded successfully`, 'success');
        renderApp();
    }, 1500);
}

function analyzeFile(filename) {
    appState.isLoading = true;
    renderApp();
    
    // In a real implementation, this would use actual AJAX
    // Simulating AJAX call with timeout
    setTimeout(() => {
        // Mock successful analysis
        const mockAnalysis = {
            id: Date.now().toString(),
            timestamp: new Date().toISOString(),
            filename: filename,
            result: {
                // Analysis result would go here
            }
        };
        
        appState.analyses.push(mockAnalysis);
        appState.isLoading = false;
        showNotification('Analysis Complete', 'Cannibalization analysis completed successfully', 'success');
        changeView('analysis');
    }, 2000);
}

function createScenario() {
    appState.isLoading = true;
    renderApp();
    
    // In a real implementation, this would use actual AJAX
    // Simulating AJAX call with timeout
    setTimeout(() => {
        // Mock successful scenario creation
        const mockScenario = {
            id: Date.now().toString(),
            type: document.getElementById('scenarioType').value,
            details: document.getElementById('productDetails').value,
            conditions: document.getElementById('marketConditions').value,
            timeHorizon: document.getElementById('timeHorizon').value
        };
        
        appState.scenarios.push(mockScenario);
        appState.isLoading = false;
        showNotification('Scenario Created', 'What-if scenario simulation completed', 'success');
        renderApp();
    }, 2000);
}

function exportAnalysis(format) {
    showNotification('Export Started', `Exporting analysis as ${format.toUpperCase()}...`, 'success');
    
    // In a real implementation, this would trigger a file download
    setTimeout(() => {
        showNotification('Export Complete', `Analysis exported as ${format.toUpperCase()} successfully`, 'success');
    }, 1000);
}

function showIntegrationModal(type) {
    const modalHtml = IntegrationModal(type);
    const modalContainer = document.createElement('div');
    modalContainer.id = 'modalContainer';
    modalContainer.innerHTML = modalHtml;
    document.body.appendChild(modalContainer);
}

function closeIntegrationModal() {
    const modalContainer = document.getElementById('modalContainer');
    if (modalContainer) {
        document.body.removeChild(modalContainer);
    }
}

function submitIntegration(type) {
    appState.isLoading = true;
    closeIntegrationModal();
    renderApp();
    
    // In a real implementation, this would use actual AJAX
    // Simulating AJAX call with timeout
    setTimeout(() => {
        appState.isLoading = false;
        showNotification('Connection Established', `Successfully connected to ${type} data source`, 'success');
        renderApp();
    }, 1500);
}

function showNotification(title, message, type) {
    const notification = { title, message, type };
    appState.notifications.push(notification);
    renderApp();
    
    // Auto-dismiss after 5 seconds
    setTimeout(() => {
        dismissNotification(appState.notifications.indexOf(notification));
    }, 5000);
}

function dismissNotification(index) {
    if (index >= 0 && index < appState.notifications.length) {
        appState.notifications.splice(index, 1);
        renderApp();
    }
}

// Initialize charts
function initializeCharts() {
    // Only initialize charts if they exist in the current view
    if (appState.currentView === 'dashboard') {
        const cannibalizationCtx = document.getElementById('cannibalizationChart');
        if (cannibalizationCtx) {
            new Chart(cannibalizationCtx, {
                type: 'bar',
                data: {
                    labels: ['Product A', 'Product B', 'Product C', 'Product D'],
                    datasets: [{
                        label: 'Cannibalization Impact (%)',
                        data: [-15, -8, 2, -1],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.5)',
                            'rgba(255, 159, 64, 0.5)',
                            'rgba(75, 192, 192, 0.5)',
                            'rgba(54, 162, 235, 0.5)'
                        ],
                        borderColor: [
                            'rgb(255, 99, 132)',
                            'rgb(255, 159, 64)',
                            'rgb(75, 192, 192)',
                            'rgb(54, 162, 235)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                            title: {
                                display: true,
                                text: 'Sales Impact (%)'
                            }
                        }
                    }
                }
            });
        }
        
        const scenarioCtx = document.getElementById('scenarioChart');
        if (scenarioCtx) {
            new Chart(scenarioCtx, {
                type: 'line',
                data: {
                    labels: ['Month 1', 'Month 2', 'Month 3', 'Month 4', 'Month 5', 'Month 6'],
                    datasets: [
                        {
                            label: 'Best Case',
                            data: [10000, 35000, 60000, 85000, 100000, 120000],
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Most Likely',
                            data: [5000, 15000, 22000, 28000, 32000, 35000],
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.1)',
                            fill: true,
                            tension: 0.3
                        },
                        {
                            label: 'Worst Case',
                            data: [-10000, -25000, -40000, -45000, -48000, -50000],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.1)',
                            fill: true,
                            tension: 0.3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Revenue Impact ($)'
                            }
                        }
                    }
                }
            });
        }
    } else if (appState.currentView === 'monitoring') {
        const monitoringCtx = document.getElementById('monitoringChart');
        if (monitoringCtx) {
            new Chart(monitoringCtx, {
                type: 'line',
                data: {
                    labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
                    datasets: [
                        {
                            label: 'Product A Sales',
                            data: [100, 95, 92, 88, 85, 83, 80, 78],
                            borderColor: 'rgb(255, 99, 132)',
                            backgroundColor: 'rgba(255, 99, 132, 0.1)',
                            fill: false,
                            tension: 0.3
                        },
                        {
                            label: 'Product B Sales',
                            data: [80, 78, 75, 74, 72, 70, 68, 65],
                            borderColor: 'rgb(255, 159, 64)',
                            backgroundColor: 'rgba(255, 159, 64, 0.1)',
                            fill: false,
                            tension: 0.3
                        },
                        {
                            label: 'New Product Sales',
                            data: [0, 10, 25, 40, 55, 65, 75, 85],
                            borderColor: 'rgb(75, 192, 192)',
                            backgroundColor: 'rgba(75, 192, 192, 0.1)',
                            fill: false,
                            tension: 0.3
                        },
                        {
                            label: 'Total Category Sales',
                            data: [180, 183, 192, 202, 212, 218, 223, 228],
                            borderColor: 'rgb(54, 162, 235)',
                            backgroundColor: 'rgba(54, 162, 235, 0.1)',
                            fill: false,
                            tension: 0.3,
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            title: {
                                display: true,
                                text: 'Sales Units (indexed)'
                            }
                        }
                    }
                }
            });
        }
    }
}

// Render the application
function renderApp() {
    const appContainer = document.getElementById('app');
    
    let viewContent = '';
    switch(appState.currentView) {
        case 'dashboard':
            viewContent = Dashboard();
            break;
        case 'upload':
            viewContent = DataUpload();
            break;
        case 'analysis':
            viewContent = Analysis();
            break;
        case 'scenarios':
            viewContent = Scenarios();
            break;
        case 'monitoring':
            viewContent = Monitoring();
            break;
        default:
            viewContent = Dashboard();
    }
    
    appContainer.innerHTML = `
        ${Navigation()}
        ${viewContent}
        ${Notifications()}
        ${LoadingIndicator()}
    `;
    
    // Initialize charts after rendering
    setTimeout(initializeCharts, 100);
}

// Initial render
document.addEventListener('DOMContentLoaded', () => {
    renderApp();
});
