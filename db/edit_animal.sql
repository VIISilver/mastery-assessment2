update animals
set species = $1, genus = $2, description = $3, img = $4, user_id = $5
where animal_id = $6;