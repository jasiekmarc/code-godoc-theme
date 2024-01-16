// The colours definitions based on
// https://pkg.go.dev/static/shared/color/color.css.

// palette defines available colours.
let palette = {
    gray1: "#202224",
    gray2: "#3e4042",
    gray3: "#555759",
    gray4: "#6e7072",
    gray5: "#848688",
    gray6: "#aaacae",
    gray7: "#c6c8ca",
    gray8: "#dcdee0",
    gray9: "#f0f1f2",
    gray10: "#f8f8f8",
    turqLight: "#5dc9e2",
    turqMed: "#50b7e0",
    turqDark: "#007d9c",
    turqBright: "#00769c",
    blue: "#bfeaf4",
    blueLight: "#f2fafd",
    black: "#000",
    green: "#3a6e11",
    greenLight: "#5fda64",
    pink: "#c85e7a",
    pinkLight: "#fdecf1",
    purple: "#542c7d",
    slate: "#253443",
    white: "#fff",
    yellow: "#fceea5",
    yellowLight: "#fff8cc",
}

// The light colour palette.
export let light = {
  brandPrimary: palette.turqDark,
  background: palette.white,
  backgroundInverted: palette.slate,
  backgroundAccented: palette.gray10,
  backgroundHighlighted: palette.blue,
  backgroundHighlightedLink: palette.blueLight,
  backgroundInfo: palette.gray9,
  backgroundWarning: palette.yellowLight,
  backgroundAlert: palette.pinkLight,
  border: palette.gray7,
  text: palette.gray1,
  textSubtle: palette.gray4,
  textLink: palette.turqDark,
  textInverted: palette.white,
  codeComment: palette.green,
  brightTextLink: palette.turqBright,
}

// The dark colour palette.
export let dark = {
  brandPrimary: palette.turqMed,
  background: palette.gray1,
  backgroundAccented: palette.gray2,
  backgroundHighlighted: palette.gray2,
  backgroundHighlightedLink: palette.gray2,
  backgroundInfo: palette.gray3,
  backgroundWarning: palette.yellow,
  backgroundAlert: palette.pink,
  border: palette.gray4,
  text: palette.gray9,
  textLink: palette.turqMed,
  textSubtle: palette.gray7,
  codeComment: palette.greenLight,
  brightTextLink: palette.turqMed,
}
