const sortItems = require("../inventoryHelpers").sortItems;

module.exports = {
   search: async (req, res) => {
      const { sortBy, sortOrder, term } = req.params;
      if (term === "none") {
         const db = req.app.get("db").inventory.euless;
         const unsortedItems = await db.get_euless();
         const items = await sortItems(unsortedItems, sortBy, sortOrder);
         res.status(200).send(items);
      } else {
         const db = req.app.get("db").inventory.search;
         const unsortedItems = await db.search([term]);
         const items = await sortItems(unsortedItems, sortBy, sortOrder);
         res.status(200).send(items);
      }
   },
};
