const express = require("express");
const cors = require("cors");
const { query } = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Look Mama!! I'm Here smarty pant!!");
});

const users = [
  { id: 1, name: "Sabana", email: "sabana@gmail.com", phone: "01788888888" },
  { id: 2, name: "Shabnur", email: "shabnur@gmail.com", phone: "01788888888" },
  {
    id: 3,
    name: "Suchorita",
    email: "suchorita@gmail.com",
    phone: "01788888888",
  },
  { id: 4, name: "Lamila", email: "lamila@gmail.com", phone: "01788888888" },
  { id: 5, name: "Jamila", email: "jamila@gmail.com", phone: "01788888888" },
  { id: 6, name: "Kamila", email: "kamila@gmail.com", phone: "01788888888" },
  { id: 7, name: "Bobita", email: "bobita@gmail.com", phone: "01788888888" },
];

app.get("/users", (req, res) => {
  if (req.query.name) {
    const search = req.query.name.toLowerCase();
    const matched = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(matched);
  } else {
    res.send(users);
  }
});

app.get("/user/:id", (req, res) => {
  console.log(req.params);
  //   const id = req.params.id;
  //   const user = users[id];
  const id = parseInt(req.params.id);
  const user = users.find((user) => user.id === id);
  res.send(user);
});

app.post("/user", (req, res) => {
  console.log("request", req.body);
  const user = req.body;
  user.id = users.length + 1;
  users.push(user);
  res.send(user);
});

app.listen(port, () => {
  console.log("Listening to Port", port);
});
