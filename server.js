import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 3000;

// Serve os arquivos da pasta "public"
app.use(express.static(path.join(__dirname, "public")));

app.get("/wifi", (req, res) => {
  const wifiList = [
    { ssid: "Algar", password: "allanfellipe363501" },
    { ssid: "Lucky", password: null },
    { ssid: "Nbrf", password: null },
    { ssid: "EVA CRISTINA", password: null },
    { ssid: "LeotinaSM", password: null },
  ];

  res.json(wifiList);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
