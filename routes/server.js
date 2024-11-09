// src/routes/server.js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const solapiRoutes = require("./solapiRoutes.js");

const app = express();

// 미들웨어 설정
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));

// 라우트 설정
app.get("/", (req, res) => {
  res.json({ message: "Hello YJ-student!" });
});

// 메시지 라우트 추가
app.use("/api", solapiRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}, http://localhost:${PORT}`);
});
