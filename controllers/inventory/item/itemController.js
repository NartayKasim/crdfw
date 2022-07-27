async function returnItem(db, id) {
   const response = await db.get_full_item([id]);
   const item = response[0];
   return item;
}

async function toggleDescription(db, id) {
   await db.flag_description_true([id]);
   return;
}

module.exports = {
   getItem: async (req, res) => {
      const { id } = req.params;
      const db = req.app.get("db").inventory.item;
      const item = await returnItem(db, id);
      res.status(200).send(item);
   },

   createItem: async (req, res) => {
      const { item } = req.body;
      const db = req.app.get("db").inventory.item;
   },
   updateItem: async (req, res) => {
      const { item } = req.body;
      const db = req.app.get("db").inventory.item;
      const response = await db.update_item([
         item.id,
         item.title,
         item.category,
         item.brand,
         item.location,
         item.condition,
         item.description,
      ]);
      const newItem = response[0];
      res.status(200).send(newItem);
   },
   deleteItem: async (req, res) => {
      const db = req.app.get("db").inventory.item;
   },
   updateDescription: async (req, res) => {
      const { id, description } = req.body;
      const db = req.app.get("db").inventory.item;
      await db.update_description([id, description]);
      const item = returnItem(db, id);
      res.status(200).send(item);
   },
   createNote: async (req, res) => {
      const { id, note } = req.body;
      const db = req.app.get("db").inventory.item;
      await db.create_note([id, note]);
      const item = returnItem(db, id);
      res.status(200).send(item);
   },
};
