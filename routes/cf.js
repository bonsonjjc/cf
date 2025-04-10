import express from 'express';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import fs from 'fs';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const router = express.Router();

router.get("/cf", (req, res) => {
    const list =''
    const txtPath= join(__dirname, "cf.txt");
    const txt = fs.readFileSync(txtPath, "utf-8");
    res.send(txt);
});

export default router;