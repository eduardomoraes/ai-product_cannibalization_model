# AI Product Cannibalization Analysis System
# User Guide & Integration Documentation

## Table of Contents

1. [Introduction](#introduction)
2. [Getting Started](#getting-started)
3. [System Overview](#system-overview)
4. [Data Upload & Integration](#data-upload--integration)
5. [Analysis Capabilities](#analysis-capabilities)
6. [Scenario Planning](#scenario-planning)
7. [Monitoring & Alerts](#monitoring--alerts)
8. [Multi-Context Support](#multi-context-support)
9. [Integration with External Systems](#integration-with-external-systems)
10. [API Reference](#api-reference)
11. [Troubleshooting](#troubleshooting)
12. [Best Practices](#best-practices)

## Introduction

The AI Product Cannibalization Analysis System is a comprehensive tool designed to help retail sales directors understand, predict, and simulate cannibalization effects across their product portfolios. This documentation provides detailed instructions for using the system and integrating it with your existing data infrastructure.

### Purpose

This system transforms the complex task of cannibalization analysis into a structured, data-driven process. It enables you to:

- Identify potential cannibalization scenarios across your product portfolio
- Quantify the financial impact of cannibalization on existing products
- Predict outcomes with statistical confidence levels
- Simulate various scenarios to optimize product strategy
- Monitor actual performance against predictions
- Generate actionable recommendations to maximize overall portfolio performance

### Audience

This documentation is intended for:

- Retail Sales Directors and Managers
- Product Portfolio Managers
- Marketing Analysts
- Data Integration Specialists
- IT Support Personnel

## Getting Started

### System Requirements

The AI Product Cannibalization Analysis System is a web-based application with the following requirements:

- **Browser**: Chrome 80+, Firefox 75+, Safari 13+, or Edge 80+
- **Screen Resolution**: Minimum 1280x720 (responsive design supports mobile devices)
- **Network**: Broadband internet connection
- **File Upload**: Support for files up to 16MB

### Accessing the System

The system can be accessed through:

1. **Web Browser**: Navigate to the system URL provided by your administrator
2. **Local Deployment**: If deployed on your infrastructure, access via the configured local URL

### Initial Setup

1. **Login**: Use your provided credentials to access the system
2. **Select Retail Context**: Choose the appropriate retail context for your analysis (e.g., Wines, Beverages, Tools, Toys)
3. **Data Connection**: Configure at least one data source (file upload or integration)

## System Overview

The AI Product Cannibalization Analysis System consists of five main components, each accessible through the main navigation menu:

### Dashboard

The dashboard provides an overview of your current cannibalization analysis status, including:

- Key metrics and risk indicators
- Recent analyses and their outcomes
- Recommended actions
- Performance monitoring alerts

### Data Upload

The data upload section allows you to:

- Upload product data files (CSV, Excel, JSON, XML)
- Connect to external data sources
- View and manage uploaded datasets
- Validate data quality and completeness

### Analysis

The analysis section enables you to:

- Run cannibalization assessments on your product portfolio
- View detailed results using the IMPACT framework
- Export analysis results in various formats
- Compare current analysis with historical results

### Scenarios

The scenario planning section allows you to:

- Create "what-if" scenarios for potential product changes
- Simulate different market conditions and competitive responses
- Compare multiple scenarios side-by-side
- Identify optimal strategies based on scenario outcomes

### Monitoring

The monitoring section enables you to:

- Track actual performance against predictions
- Configure alert thresholds for key metrics
- Receive notifications when thresholds are crossed
- Visualize trends and patterns in cannibalization effects

## Data Upload & Integration

### Supported File Formats

The system supports the following file formats for data upload:

#### CSV Files

Comma-separated value files with the following requirements:
- UTF-8 encoding
- First row contains column headers
- Required columns depend on analysis type (see Data Templates)

Example CSV structure:
```
Date,Product,Category,Sales,Revenue
2025-01-01,Product A,Beverages,1200,36000
2025-01-01,Product B,Beverages,800,20000
```

#### Excel Files

Microsoft Excel files (.xlsx, .xls) with the following requirements:
- First sheet contains primary data (or specify sheet name)
- First row contains column headers
- Multiple sheets can be used for different data types

#### JSON Files

JSON files with either array or object structure:

Array structure example:
```json
[
  {
    "date": "2025-01-01",
    "product": "Product A",
    "category": "Beverages",
    "sales": 1200,
    "revenue": 36000
  },
  {
    "date": "2025-01-01",
    "product": "Product B",
    "category": "Beverages",
    "sales": 800,
    "revenue": 20000
  }
]
```

#### XML Files

XML files with consistent structure:

```xml
<products>
  <product>
    <date>2025-01-01</date>
    <name>Product A</name>
    <category>Beverages</category>
    <sales>1200</sales>
    <revenue>36000</revenue>
  </product>
  <product>
    <date>2025-01-01</date>
    <name>Product B</name>
    <category>Beverages</category>
    <sales>800</sales>
    <revenue>20000</revenue>
  </product>
</products>
```

### Data Templates

The system provides templates for different analysis types:

1. **Historical Sales Data**: Template for uploading historical sales performance
2. **Product Attributes**: Template for product characteristics and positioning
3. **Market Research**: Template for consumer insights and market data
4. **Competitive Intelligence**: Template for competitor product information

Templates can be downloaded from the Data Upload section.

### File Upload Process

To upload data files:

1. Navigate to the Data Upload section
2. Click on the upload zone or drag and drop your file
3. Select the appropriate data type for the file
4. Confirm column mappings if prompted
5. Review the data preview for accuracy
6. Confirm the upload

### External Data Integration

#### Cloud Storage Integration

The system can connect directly to cloud storage services:

1. **AWS S3**
   - Required permissions: ListBucket, GetObject
   - Authentication: Access Key + Secret Key or IAM Role
   - Supported regions: All AWS regions

2. **Google Cloud Storage**
   - Required permissions: storage.objects.get, storage.objects.list
   - Authentication: Service Account Key or OAuth 2.0
   - Supported formats: Same as file upload

3. **Azure Blob Storage**
   - Required permissions: Read, List
   - Authentication: Connection String or SAS Token
   - Container access: Public or Private with credentials

Configuration steps:
1. Navigate to Data Upload > External Data Sources
2. Select "Cloud Storage"
3. Choose your provider
4. Enter authentication details
5. Select bucket/container and optional path prefix
6. Test connection and save configuration

#### Database Integration

The system supports direct connection to databases:

1. **PostgreSQL**
   - Connection parameters: Host, Port, Database, Username, Password
   - SSL support: Yes (optional)
   - Required privileges: SELECT on relevant tables

2. **MySQL/MariaDB**
   - Connection parameters: Host, Port, Database, Username, Password
   - SSL support: Yes (optional)
   - Required privileges: SELECT on relevant tables

3. **MongoDB**
   - Connection parameters: Connection String or Host, Port, Database
   - Authentication: Username/Password or Certificate
   - Required privileges: read on relevant collections

4. **SQL Server**
   - Connection parameters: Host, Port, Database, Username, Password
   - Authentication: SQL Server or Windows Authentication
   - Required privileges: SELECT on relevant tables

Configuration steps:
1. Navigate to Data Upload > External Data Sources
2. Select "Database"
3. Choose your database type
4. Enter connection parameters
5. Test connection
6. Configure query or table selection
7. Save configuration

#### API Integration

The system can retrieve data from external APIs:

1. **REST APIs**
   - Methods supported: GET, POST
   - Authentication: None, API Key, OAuth 2.0, Basic Auth
   - Response formats: JSON, XML

2. **GraphQL**
   - Authentication: Same as REST
   - Query customization supported

Configuration steps:
1. Navigate to Data Upload > External Data Sources
2. Select "API Integration"
3. Enter API base URL
4. Configure authentication
5. Define request parameters or body
6. Test connection
7. Configure data mapping
8. Save configuration

## Analysis Capabilities

### Running an Analysis

To perform a cannibalization analysis:

1. Navigate to the Analysis section
2. Select the data source(s) to use
3. Choose the analysis type:
   - Initial Assessment
   - Simulation Scenario
   - Competitive Analysis
4. Configure analysis parameters
5. Click "Run Analysis"

### Analysis Types

#### Initial Assessment

The Initial Assessment provides a first evaluation of cannibalization risk:

**Required inputs:**
- Product category
- Existing product portfolio data
- New/proposed product details
- Retail channels
- Timeline for analysis

**Outputs:**
- Direct cannibalization risk assessment
- Market expansion potential
- Competitive response prediction
- Confidence levels for each prediction

#### Simulation Scenario

The Simulation Scenario provides detailed projections under different conditions:

**Required inputs:**
- Scenario type (New Launch/Competitor Entry/Price Change)
- Product specifications
- Market conditions
- Time horizon for analysis

**Outputs:**
- Base case projections
- Best case projections
- Worst case projections
- Sensitivity analysis
- Confidence intervals

#### Competitive Analysis

The Competitive Analysis focuses on external threats and opportunities:

**Required inputs:**
- Main competitors
- Their product portfolios
- Market positioning data

**Outputs:**
- Immediate threats (0-6 months)
- Medium-term risks (6-18 months)
- Strategic implications
- Recommended countermeasures

### Understanding Results

Analysis results are presented using the IMPACT framework:

#### I - Identify the cannibalization scenario

This section describes the specific cannibalization scenario being analyzed, including:
- Type of cannibalization (e.g., same-brand, cross-category)
- Products involved
- Market context
- Risk level classification

#### M - Measure potential impact

This section quantifies the potential effects, including:
- Estimated cannibalization percentage
- Revenue impact range
- Market share implications
- Unit volume changes

#### P - Predict outcomes with confidence levels

This section provides forecasts with statistical reliability indicators:
- Best case projection
- Worst case projection
- Most likely outcome
- Confidence level for each prediction
- Key assumptions underlying predictions

#### A - Analyze alternatives and scenarios

This section explores different possibilities:
- Key factors influencing outcomes
- Alternative strategies
- Sensitivity to different variables
- Scenario switching points

#### C - Create actionable recommendations

This section provides specific guidance:
- Strategic recommendations
- Tactical actions
- Prioritized by impact and feasibility
- Implementation considerations

#### T - Timeline and implementation steps

This section outlines execution planning:
- Immediate actions
- Medium-term steps
- Long-term strategy
- Monitoring checkpoints
- Review schedule

### Exporting Results

Analysis results can be exported in multiple formats:

1. **PDF Report**: Complete analysis with visualizations
2. **Excel Workbook**: Detailed data tables and charts
3. **PowerPoint Presentation**: Key findings and recommendations
4. **JSON Data**: Machine-readable format for integration

To export results:
1. Navigate to the Analysis section
2. Open the desired analysis
3. Click "Export" and select format
4. Configure export options if prompted
5. Download the exported file

## Scenario Planning

### Creating Scenarios

To create a new scenario:

1. Navigate to the Scenarios section
2. Click "Create New Scenario"
3. Select scenario type:
   - New Product Launch
   - Competitor Entry
   - Price Change
   - Other (custom)
4. Enter scenario parameters:
   - Product details
   - Market conditions
   - Time horizon
5. Click "Run Simulation"

### Scenario Parameters

#### Product Launch Scenarios

Configure parameters such as:
- Product specifications
- Price points
- Feature sets
- Launch timing
- Marketing investment
- Distribution strategy

#### Competitor Entry Scenarios

Configure parameters such as:
- Competitor product details
- Expected pricing
- Market positioning
- Launch timeline
- Marketing approach
- Competitive advantage

#### Price Change Scenarios

Configure parameters such as:
- Products affected
- Price change percentage
- Implementation timeline
- Promotional support
- Competitor response assumptions

### Comparing Scenarios

The system allows side-by-side comparison of multiple scenarios:

1. Navigate to the Scenarios section
2. Select two or more scenarios to compare
3. Click "Compare Selected"
4. View comparison across key metrics:
   - Revenue impact
   - Cannibalization rate
   - Market share effect
   - Timeline to impact
   - Risk assessment

### Scenario Optimization

To optimize a scenario:

1. Navigate to the Scenarios section
2. Open an existing scenario
3. Click "Optimize"
4. Select optimization goal:
   - Maximize revenue
   - Minimize cannibalization
   - Optimize market share
   - Balance multiple objectives
5. Review optimization suggestions
6. Apply selected optimizations
7. Re-run simulation with optimized parameters

## Monitoring & Alerts

### Setting Up Monitoring

To configure performance monitoring:

1. Navigate to the Monitoring section
2. Select metrics to track:
   - Direct cannibalization indicators
   - Market health indicators
   - Leading indicators
3. Configure data sources for each metric
4. Set update frequency
5. Save monitoring configuration

### Configuring Alerts

To set up alerts:

1. Navigate to the Monitoring section
2. Select a metric to configure
3. Set thresholds:
   - Yellow (warning) threshold
   - Red (critical) threshold
4. Configure notification methods:
   - Email alerts
   - Dashboard notifications
   - Weekly summary reports
   - Mobile app notifications
5. Set alert frequency and conditions
6. Save alert configuration

### Alert Types

The system supports three types of alerts:

1. **Red Flags**: Critical issues requiring immediate attention
   - Example: Sales velocity drops more than 10%
   - Notification: Immediate email + dashboard

2. **Yellow Warnings**: Potential issues requiring monitoring
   - Example: Sales velocity drops 5-10%
   - Notification: Dashboard only by default

3. **Green Signals**: Positive indicators confirming strategy success
   - Example: Market share increases above target
   - Notification: Included in summary reports

### Responding to Alerts

When an alert is triggered:

1. Navigate to the Monitoring section
2. Review the alert details
3. Analyze the underlying data
4. Compare actual performance with predictions
5. Access recommended actions
6. Document response actions
7. Track resolution progress

## Multi-Context Support

### Available Retail Contexts

The system supports multiple retail contexts, each with specialized metrics and terminology:

1. **General Retail**: Universal metrics applicable to all retail types
2. **Wines & Spirits**: Specialized for alcoholic beverage retail
3. **Beverages**: Non-alcoholic beverage retail metrics
4. **Tools & Hardware**: Durable goods retail metrics
5. **Toys & Games**: Seasonal and age-segmented retail metrics
6. **Electronics**: Technology lifecycle-focused metrics
7. **Fashion & Apparel**: Style and season-driven metrics
8. **Grocery & Food**: Perishability and frequency-focused metrics

### Switching Contexts

To change retail contexts:

1. Use the context selector in the top navigation bar
2. Select the desired retail context
3. Confirm the context switch

When switching contexts:
- All data remains accessible
- Terminology adapts to the selected context
- Metrics and benchmarks adjust accordingly
- Visualizations update to reflect context-specific norms

### Context-Specific Features

Each retail context provides specialized features:

#### Wines & Spirits
- Vintage-based analysis
- Regulatory compliance factors
- Premium vs. value segmentation

#### Beverages
- Seasonal consumption patterns
- Container size analysis
- Brand loyalty metrics

#### Tools & Hardware
- Durability and replacement cycle analysis
- Professional vs. consumer segmentation
- Seasonal project-driven demand

#### Toys & Games
- Age group segmentation
- Seasonal gift-giving patterns
- Collectibility and completion metrics

#### Electronics
- Technology lifecycle positioning
- Compatibility and ecosystem effects
- Early adopter vs. mainstream analysis

#### Fashion & Apparel
- Season and trend analysis
- Style cannibalization metrics
- Price tier segmentation

#### Grocery & Food
- Perishability factors
- Basket analysis
- Frequency and replenishment metrics

## Integration with External Systems

### Data Export Options

The system can export data to external systems through:

1. **File Downloads**: Manual export of analysis results
2. **Scheduled Exports**: Automated regular exports to specified locations
3. **API Access**: Programmatic retrieval of analysis data
4. **Webhook Notifications**: Push-based updates when new analyses complete

### Integration Patterns

#### Retail Management Systems

Integration with retail management systems:

1. **Import Options**:
   - Direct database connection
   - API integration
   - File import from system exports

2. **Export Options**:
   - Scheduled exports to shared location
   - API push to system endpoints
   - Webhook notifications

3. **Implementation Steps**:
   - Configure data source in Data Upload section
   - Map fields to system schema
   - Set up regular synchronization schedule
   - Validate data consistency

#### Business Intelligence Platforms

Integration with BI platforms (Tableau, Power BI, etc.):

1. **Import Options**:
   - Direct database connection
   - API data source
   - File import

2. **Export Options**:
   - Regular exports in compatible formats
   - Direct connection to analysis results

3. **Implementation Steps**:
   - Configure connection in BI platform
   - Create data model mapping
   - Set up refresh schedule
   - Build visualizations in BI platform

#### Enterprise Resource Planning (ERP)

Integration with ERP systems:

1. **Import Options**:
   - Database connection
   - API integration
   - File-based ETL

2. **Export Options**:
   - Scheduled exports
   - API endpoints for ERP consumption

3. **Implementation Steps**:
   - Work with ERP administrator to establish connection
   - Configure data mapping
   - Set up synchronization schedule
   - Validate data flow

### Authentication & Security

For secure integration:

1. **API Authentication**:
   - API Key authentication
   - OAuth 2.0 support
   - JWT token authentication

2. **Data Encryption**:
   - TLS/SSL for all connections
   - Data encryption at rest
   - Secure credential storage

3. **Access Control**:
   - Role-based permissions
   - IP restriction options
   - Audit logging

## API Reference

### Authentication

All API requests require authentication:

```
GET /api/v1/analyses
Authorization: Bearer {your_api_token}
```

To obtain an API token:
1. Navigate to User Settings > API Access
2. Generate a new API token
3. Set appropriate permissions
4. Copy the token for use in API calls

### Endpoints

#### Data Upload

```
POST /api/v1/upload
Content-Type: multipart/form-data

file: [binary data]
```

Response:
```json
{
  "success": true,
  "filename": "20250604_123456_sales_data.csv",
  "rows": 1250,
  "columns": ["Date", "Product", "Category", "Sales", "Revenue"]
}
```

#### Analysis

```
POST /api/v1/analyze
Content-Type: application/json

{
  "data_source": "20250604_123456_sales_data.csv",
  "analysis_type": "initial_assessment",
  "parameters": {
    "product_category": "Beverages",
    "new_product": "Product X",
    "timeline": "6_months"
  }
}
```

Response:
```json
{
  "success": true,
  "analysis_id": "a1b2c3d4",
  "result": {
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
```

#### Scenarios

```
POST /api/v1/scenarios
Content-Type: application/json

{
  "type": "new_launch",
  "product_details": "New premium beverage with natural ingredients",
  "market_conditions": "Growing health-conscious segment",
  "time_horizon": "12_months"
}
```

Response:
```json
{
  "success": true,
  "scenario_id": "s1e2f3g4",
  "message": "Scenario created successfully"
}
```

#### Monitoring

```
GET /api/v1/monitoring/metrics
```

Response:
```json
{
  "success": true,
  "metrics": [
    {
      "name": "Sales Velocity Change",
      "current_value": "-8.3%",
      "yellow_threshold": "-5%",
      "red_threshold": "-10%",
      "status": "warning"
    },
    {
      "name": "Customer Switching Rate",
      "current_value": "23.1%",
      "yellow_threshold": "15%",
      "red_threshold": "20%",
      "status": "alert"
    }
  ]
}
```

### Webhook Integration

To receive webhook notifications:

1. Navigate to Integration Settings > Webhooks
2. Click "Add Webhook"
3. Enter your endpoint URL
4. Select events to trigger notifications:
   - Analysis completed
   - Alert triggered
   - Scenario created
5. Configure security settings
6. Test the webhook
7. Save configuration

Webhook payload example:
```json
{
  "event_type": "analysis_completed",
  "timestamp": "2025-06-04T12:34:56Z",
  "data": {
    "analysis_id": "a1b2c3d4",
    "type": "initial_assessment",
    "status": "completed",
    "summary": {
      "risk_level": "Medium",
      "revenue_impact": "+$35,000",
      "confidence": "65%"
    }
  }
}
```

## Troubleshooting

### Common Issues

#### Data Upload Problems

| Issue | Possible Causes | Resolution |
|-------|----------------|------------|
| File upload fails | File too large | Ensure file is under 16MB or split into smaller files |
| | Unsupported format | Check that file format is CSV, Excel, JSON, or XML |
| | Network interruption | Try uploading again with stable connection |
| Column mapping errors | Header row missing | Ensure first row contains column headers |
| | Required columns missing | Add missing columns to source data |
| | Encoding issues | Save file with UTF-8 encoding |

#### Analysis Errors

| Issue | Possible Causes | Resolution |
|-------|----------------|------------|
| Analysis fails to start | Insufficient data | Ensure data meets minimum requirements |
| | Invalid parameters | Check parameter values and formats |
| | System overload | Try again during off-peak hours |
| Unexpected results | Data quality issues | Validate input data for anomalies |
| | Incorrect context | Verify retail context selection |
| | Unrealistic parameters | Adjust parameters to realistic values |

#### Integration Issues

| Issue | Possible Causes | Resolution |
|-------|----------------|------------|
| Connection failure | Invalid credentials | Verify authentication details |
| | Network restrictions | Check firewall and network settings |
| | Service unavailable | Verify external service status |
| Data synchronization errors | Schema mismatch | Update field mappings |
| | Transformation errors | Check data types and formats |
| | Timeout | Increase timeout settings or reduce data volume |

### Error Messages

| Error Code | Message | Resolution |
|------------|---------|------------|
| E1001 | "File upload failed: File too large" | Reduce file size or split into multiple files |
| E1002 | "File upload failed: Unsupported format" | Convert file to supported format |
| E2001 | "Analysis failed: Insufficient data" | Provide more historical data points |
| E2002 | "Analysis failed: Invalid parameters" | Check parameter values and formats |
| E3001 | "Integration failed: Authentication error" | Verify credentials and permissions |
| E3002 | "Integration failed: Connection timeout" | Check network and increase timeout |

### Support Resources

For additional assistance:

1. **In-App Help**: Click the "?" icon in any section for contextual help
2. **Knowledge Base**: Access articles and tutorials at [support URL]
3. **Support Ticket**: Submit issues through Help > Submit Support Request
4. **System Status**: Check current system status at [status URL]

## Best Practices

### Data Preparation

For optimal analysis results:

1. **Historical Data**: Provide at least 12 months of historical sales data
2. **Granularity**: Include daily or weekly data rather than monthly aggregates
3. **Segmentation**: Break down data by relevant dimensions (region, channel, etc.)
4. **Consistency**: Ensure consistent naming and categorization across datasets
5. **Completeness**: Include all relevant products, even those with minimal cannibalization risk

### Analysis Strategy

For effective cannibalization analysis:

1. **Start Broad**: Begin with Initial Assessment to identify key risk areas
2. **Refine Focus**: Drill down into specific products with highest risk/opportunity
3. **Compare Scenarios**: Create multiple scenarios with different parameters
4. **Validate Assumptions**: Cross-check assumptions with market research
5. **Iterate**: Refine analyses based on new data and insights

### Monitoring Implementation

For effective performance tracking:

1. **Key Metrics**: Focus on 3-5 most critical indicators
2. **Realistic Thresholds**: Set alert thresholds based on historical volatility
3. **Leading Indicators**: Include early warning signals, not just lagging metrics
4. **Regular Reviews**: Schedule periodic review of monitoring effectiveness
5. **Continuous Refinement**: Adjust thresholds and metrics based on experience

### Integration Strategy

For successful system integration:

1. **Start Simple**: Begin with file-based integration before complex API connections
2. **Test Thoroughly**: Validate data flow with small datasets before full implementation
3. **Document Mappings**: Maintain clear documentation of all field mappings
4. **Monitor Performance**: Track integration performance and resource usage
5. **Incremental Expansion**: Add additional integration points gradually
