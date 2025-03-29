const path = require("path");

module.exports = {
  entry: "./src/index.js", // Entry point for your JavaScript
  output: {
    filename: "bundle.js", // Output bundled file
    path: path.resolve(__dirname, "dist"), // Output directory
  },
  module: {
    rules: [
      {
        test: /\.css$/, // Handle CSS files
        use: ["style-loader", "css-loader"],
      },
    ],
  },
};
