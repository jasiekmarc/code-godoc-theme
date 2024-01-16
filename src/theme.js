import { light, dark } from "./colours";

function theme(name, palette) {
  return {
    name: name,
    colors: {
      focusBorder: palette.brandPrimary,
      foreground: palette.textSubtle,

      "editor.background": palette.backgroundAccented,
      "editor.foreground": palette.text,
      "editorLineNumber.foreground": palette.brandPrimary,
      "editorGutter.background": palette.backgroundAccented,
    },
    tokenColors: [
      {
        scope: [
          "comment",
          "string.quoted.docstring.multi.python",
          "string.comment",
        ],
        settings: {
          foreground: palette.codeComment,
        },
      },
      {
        scope: "string.quoted",
        settings: {
          foreground: palette.brandPrimary,
        },
      },
    ],
  };
}

export const themes = {
    light: theme("Go Doc Light", light),
    dark: theme("Go Doc Dark", dark),
}
