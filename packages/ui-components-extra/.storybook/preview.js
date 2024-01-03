import "style-loader";
import "./custom.scss";
import "css.loader";
import "sass-loader";
import "../src/style/main.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
