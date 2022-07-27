SELECT * FROM items WHERE sku || title || brand || category || location || condition || brand ILIKE '%' || $1 || '%';



