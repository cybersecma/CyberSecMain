-- Drop view
DROP VIEW IF EXISTS url_analytics;

-- Drop triggers
DROP TRIGGER IF EXISTS update_urls_updated_at ON urls;

-- Drop functions
DROP FUNCTION IF EXISTS update_updated_at_column();
DROP FUNCTION IF EXISTS record_url_access(varchar(10));

-- Drop table (this will also drop the index)
DROP TABLE IF EXISTS urls; 