const path = require("path");
const webpack = require("webpack");

module.exports = {
  mode: "development", // 배포시 production
  devtool: "eval", // 배포시 설정은 hidden-source-map, source-map 쓰면 개발자도구에 소스코드 다보임
  resolve: {
    extensions: [".jsx", ".js", ".tsx", ".ts"], // 웹팩에서 처리해주는 확장자들
  },
  entry: {
    app: "./app.tsx", // 최초 진입점
  },
  // module 및 plugin에 적힌 처리과정을 client.tsx에 적용해서 최종적으로 app.js를 뽑아냄 (output)
  module: {
    rules: [
      // babel 대신 tsc
      {
        test: /\.tsx?$/, // tsx나 ts파일을 발견하면
        loader: "ts-loader", // 해당 로더를 통해 버전을 변환함
      },
    ],
  },
  output: {
    filename: "[name].js",
    path: path.join(__dirname, "dist"),
    // npm webpacK을 실행하면 client.tsx를 통해서 webpack 처리 후, dist 폴더가 생성되고 그 안에 app.js가 들어있게 됨
  },
};
