const express = require("express");
const cors = require("cors");
const QRCode = require("qrcode");

const app = express();
app.use(express.json());
app.use(cors());

app.post("/generate", (req, res) => {
  console.log(req.body);
  const { text } = req.body;

  if (!text) {
    return res.status(400).send("Text is Required");
  }

  QRCode.toDataURL(text, (err, url) => {
    if (err) {
      return res.status(500).send("Error");
    }
    res.send({ url });
  });
});

app.listen(8080, () => {
  console.log(`Server is running on http://localhost:${8080}`);
});
