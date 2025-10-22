# Design Document

## Overview

This design outlines the migration strategy from SQLite to MySQL for the Mitra Safety Indonesia e-commerce platform, including dependency updates, schema conversion, configuration changes, and project cleanup.

## Architecture

### Current Architecture
- **Database**: SQLite with better-sqlite3 driver
- **ORM**: Drizzle ORM with SQLite dialect
- **Schema**: SQLite-specific table definitions
- **Configuration**: Drizzle config pointing to local SQLite file

### Target Architecture
- **Database**: MySQL with mysql2 driver
- **ORM**: Drizzle ORM with MySQL dialect
- **Schema**: MySQL-compatible table definitions
- **Configuration**: Drizzle config with MySQL connection parameters

## Components and Interfaces

### 1. Database Connection Layer (`server/db.ts`)
**Current Implementation:**
```typescript
import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
```

**Target Implementation:**
```typescript
import { drizzle } from "drizzle-orm/mysql2";
import mysql from "mysql2/promise";
```

### 2. Schema Definition (`shared/schema.ts`)
**Changes Required:**
- Replace `sqliteTable` with `mysqlTable`
- Replace `text()` with `varchar()` for string fields
- Replace `integer()` with `int()` for numeric fields
- Update timestamp handling for MySQL compatibility
- Adjust JSON field handling for MySQL

### 3. Drizzle Configuration (`drizzle.config.ts`)
**Changes Required:**
- Change dialect from "sqlite" to "mysql"
- Update connection credentials for MySQL
- Configure host, port, database name, username, password

### 4. Package Dependencies
**Remove:**
- `better-sqlite3`
- `@types/better-sqlite3`

**Add:**
- `mysql2`
- `@types/mysql2` (if needed)

## Data Models

### MySQL Schema Conversion

#### Users Table
```sql
CREATE TABLE users (
  id VARCHAR(36) PRIMARY KEY,
  username VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL
);
```

#### Categories Table
```sql
CREATE TABLE categories (
  id VARCHAR(255) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  icon VARCHAR(255) NOT NULL,
  product_count INT NOT NULL DEFAULT 0
);
```

#### Products Table
```sql
CREATE TABLE products (
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  description TEXT NOT NULL,
  price INT NOT NULL,
  original_price INT,
  category VARCHAR(255) NOT NULL,
  image_url VARCHAR(500) NOT NULL,
  images JSON,
  in_stock BOOLEAN NOT NULL DEFAULT TRUE,
  badge VARCHAR(255),
  specifications JSON,
  protection_levels JSON,
  compliance_standards JSON,
  hazard_classes JSON,
  optimized_media JSON
);
```

#### Orders Table
```sql
CREATE TABLE orders (
  id VARCHAR(36) PRIMARY KEY,
  customer_name VARCHAR(255) NOT NULL,
  customer_phone VARCHAR(50) NOT NULL,
  customer_email VARCHAR(255),
  shipping_address TEXT NOT NULL,
  shipping_province VARCHAR(255) NOT NULL,
  shipping_city VARCHAR(255) NOT NULL,
  shipping_postal_code VARCHAR(20) NOT NULL,
  payment_method VARCHAR(100) NOT NULL,
  subtotal INT NOT NULL,
  shipping INT NOT NULL,
  total INT NOT NULL,
  status VARCHAR(50) NOT NULL DEFAULT 'pending',
  items JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Error Handling

### Database Connection Errors
- Implement connection retry logic
- Provide clear error messages for connection failures
- Handle MySQL-specific error codes
- Graceful fallback for development environment

### Migration Errors
- Validate schema compatibility before migration
- Provide rollback mechanism if migration fails
- Log detailed error information for debugging

## Testing Strategy

### Database Connection Testing
- Verify MySQL connection establishment
- Test basic CRUD operations
- Validate schema creation and migration
- Test all existing API endpoints

### Data Integrity Testing
- Verify data types are correctly mapped
- Test JSON field serialization/deserialization
- Validate foreign key relationships (if any)
- Test timestamp handling

## File Cleanup Strategy

### Files to Remove
- `mitrasafety.db` (SQLite database file)
- `replit.md` (Replit-specific documentation)
- Any migration files from previous SQLite setup

### Files to Keep
- All client-side React components and pages
- Server-side API routes and business logic
- Configuration files (package.json, tsconfig.json, etc.)
- Design guidelines and documentation
- Asset files in attached_assets folder

### Configuration Updates
- Update `.env` file with MySQL connection parameters
- Modify `package.json` scripts if needed
- Update any development/deployment scripts

## Implementation Phases

### Phase 1: Dependency Management
1. Remove SQLite dependencies
2. Add MySQL dependencies
3. Update package.json and install new packages

### Phase 2: Schema Migration
1. Convert schema from SQLite to MySQL syntax
2. Update data types and constraints
3. Test schema compilation

### Phase 3: Database Configuration
1. Update database connection configuration
2. Create MySQL database and user
3. Configure connection parameters

### Phase 4: Application Updates
1. Update database initialization
2. Test all API endpoints
3. Verify data operations

### Phase 5: Cleanup and Testing
1. Remove unnecessary files
2. Run application and verify functionality
3. Test complete user workflows