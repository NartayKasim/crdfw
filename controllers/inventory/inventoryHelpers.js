module.exports = {
   sortItems: function (items, sortBy, sortOrder) {
      for (let i = items.length; i > 0; i--) {
         for (let j = 0; j < i; j++) {
            if (j < items.length - 1) {
               if (items[j][sortBy] > items[j + 1][sortBy]) {
                  let temp = items[j];
                  items[j] = items[j + 1];
                  items[j + 1] = temp;
               }
            }
         }
      }
      return sortOrder === "asc" ? items : items.reverse();
   },
};
