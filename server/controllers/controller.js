module.exports = {

    addAnimal: (req, res, next) => {
        const db = req.app.get('db');
        const { species, genus, description, img, user_id } = req.body;

        db.add_animal([species, genus, description, img, user_id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },

    getAnimals: (req, res, next) => {
        const db = req.app.get('db');

        db.get_animals()
            .then((animals) => res.status(200).send(animals))
            .catch(() => res.status(500).send());
    },

    editAnimal: (req, res, next) => {
        const db = req.app.get('db');
        const { species, genus, description, img, user_id, animal_id } = req.body;
        console.log('editBook fired')

        db.edit_animal([species, genus, description, img, user_id, animal_id])
            .then(() => res.status(200).send())
            .catch(() => res.status(500).send());
    },
    
        deleteAnimal: (req, res, next) => {
            const db = req.app.get('db');
            const bookId = req.params.id
    
            db.delete_animal(bookId)
                .then(() => res.status(200).send())
                .catch(() => res.send(500).send());
        }
}