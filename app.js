const express = require("express");

const app = express();

//! Habilita el recibir datos en formato JSON
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).json({ message: "Server OK!" });
});

const database = [
  {
    id: 1,
    title: "Este es un asdkfjbsdljkfb",
    is_completed: false,
  },
  {
    id: 2,
    title: "Este es otro titulo",
    is_completed: false,
  },
];

app.get("/todos", (req, res) => {
  res.status(200).json(database);
});

app.post("/todos", (req, res) => {
  //? req = request = Petición
  //? res = response = Respuesta

  const { id, title } = req.body;

  //* valores falsy
  //? null
  //? undefined
  //? ''
  //? 0
  //? false

  //* valores truty
  //? 'skdjfbskdjf'
  //? 1
  //? {}
  //? []
  //? true

  if (!id || !title) {
    res.status(400).json({ message: "Missing Data" });
  } else {
    database.push({
      id,
      title,
      is_completed: false,
    });

    res.status(200).json(database);
  }
});

app.listen(8000, () => {
  console.log("Server started at port 8000");
});
