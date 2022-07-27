const express = require("express");
const cors = require("cors");
const massive = require("massive");
const path = require("path");
require("dotenv").config({ path: "./.env" });
const { SERVER_PORT, POSTGRES_URI } = process.env;

const searchController = require("./controllers/inventory/search/searchController");
const itemController = require("./controllers/inventory/item/itemController");

const app = express();
app.use(express.json());
app.use(cors());

massive({
   connectionString: POSTGRES_URI,
   ssl: {
      rejectUnauthorized: false,
   },
})
   .then((db) => {
      app.set("db", db);
      console.log("database connected");
   })
   .catch((err) => console.log(err));

// app.get(
//    "/api/inventory/filter=:filter/term=:term?",
//    inventoryController.getInventory
// );
// app.get(
//    "/api/inventory/filter=:filter/sortOrder=:sortOrder/term=:term",
//    inventoryController.search
// );
// app.put("/api/item/update", itemController.updateItem);

// app.get("/api/inventory/item/id=:id", );
// app.get("/api/inventory/euless", );
app.get("/api/inventory/item/id=:id", itemController.getItem);
app.get(
   "/api/inventory/search/sortBy=:sortBy/sortOrder=:sortOrder/term=:term",
   searchController.search
);

app.put("/api/inventory/item/update", itemController.updateItem);
app.post("/api/inventory/item/note", itemController.createNote);

// if (process.env.NODE_ENV === "production") {
app.use(express.static("client/build"));
app.get("*", (req, res) => {
   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});
// }

// app.use((req, res, next) => {
//    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
// });

app.listen(SERVER_PORT, () => console.log("Server Port: " + SERVER_PORT));
