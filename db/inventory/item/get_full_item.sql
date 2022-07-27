SELECT items.*,
    (SELECT array_agg(image) AS images from images WHERE images.id = items.id),
    (SELECT array_agg(note) AS notes FROM notes WHERE notes.id = items.id)
    FROM items
    WHERE id = $1;