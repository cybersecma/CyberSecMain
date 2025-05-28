-- Create URLs table
CREATE TABLE IF NOT EXISTS urls (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    short_code VARCHAR(10) NOT NULL UNIQUE,
    original_url TEXT NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc'::text, NOW()) NOT NULL,
    clicks INTEGER DEFAULT 0 NOT NULL,
    last_accessed_at TIMESTAMP WITH TIME ZONE
);

-- Create index for faster lookups
CREATE INDEX IF NOT EXISTS idx_urls_short_code ON urls(short_code);

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc'::text, NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create trigger to automatically update updated_at
CREATE TRIGGER update_urls_updated_at
    BEFORE UPDATE ON urls
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Drop existing record_url_access functions to avoid conflicts
DROP FUNCTION IF EXISTS record_url_access(varchar);
DROP FUNCTION IF EXISTS record_url_access(text);

-- Create function to record URL access
CREATE FUNCTION record_url_access(code varchar(10))
RETURNS text
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
DECLARE
    target_url text;
BEGIN
    UPDATE urls
    SET 
        clicks = clicks + 1,
        last_accessed_at = TIMEZONE('utc'::text, NOW())
    WHERE short_code = code
    RETURNING original_url INTO target_url;
    
    IF target_url IS NULL THEN
        RAISE EXCEPTION 'URL not found';
    END IF;
    
    RETURN target_url;
END;
$$;

-- Grant execute permission to anonymous users
GRANT EXECUTE ON FUNCTION record_url_access(varchar(10)) TO anon;

-- Create RLS (Row Level Security) policies
ALTER TABLE urls ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to create and read URLs
CREATE POLICY "Allow anonymous URL creation"
    ON urls FOR INSERT
    TO anon
    WITH CHECK (true);

CREATE POLICY "Allow anonymous URL reading"
    ON urls FOR SELECT
    TO anon
    USING (true);

-- Allow anonymous users to update click counts
CREATE POLICY "Allow anonymous URL updates"
    ON urls FOR UPDATE
    TO anon
    USING (true)
    WITH CHECK (true);

-- Create view for URL analytics
CREATE VIEW url_analytics AS
SELECT 
    short_code,
    original_url,
    clicks,
    created_at,
    last_accessed_at,
    CASE 
        WHEN last_accessed_at IS NOT NULL THEN 
            AGE(last_accessed_at, created_at)
        ELSE
            AGE(NOW(), created_at)
    END as age
FROM urls
ORDER BY clicks DESC;

-- Add comment to the table
COMMENT ON TABLE urls IS 'Stores shortened URLs and their analytics';

-- Add comments to columns
COMMENT ON COLUMN urls.id IS 'Unique identifier for the URL';
COMMENT ON COLUMN urls.short_code IS 'Short code used in the shortened URL';
COMMENT ON COLUMN urls.original_url IS 'Original URL that was shortened';
COMMENT ON COLUMN urls.created_at IS 'Timestamp when the URL was created';
COMMENT ON COLUMN urls.updated_at IS 'Timestamp when the URL was last updated';
COMMENT ON COLUMN urls.clicks IS 'Number of times the URL has been accessed';
COMMENT ON COLUMN urls.last_accessed_at IS 'Timestamp when the URL was last accessed'; 