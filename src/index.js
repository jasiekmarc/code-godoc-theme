import fs from "node:fs/promises";
import { themes } from "./theme.js";

fs.mkdir("./themes", { recursive: true })
  .then(() =>
    Promise.all(
      Object.entries(themes).map(([file, theme]) =>
        fs.writeFile(`./themes/${file}-color-theme.json`, JSON.stringify(theme, null, 2))
      )
    )
  )
  .catch(() => process.exit(1));
