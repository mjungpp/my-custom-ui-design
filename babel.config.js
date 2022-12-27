module.exports = {
  presets: [
    "@babel/preset-react",
    "@babel/preset-env",
    "@babel/preset-typescript",
  ],
};

/*
  목적에 맞게 여러가지 플러그인(코드 변환을 처리하는 모듈)을 세트로 모아놓은 것을 “프리셋”이라고 한다.
  babel-loader : JSX 및 ES6+ 문법을 트랜스파일링
  @babel/core : 바벨의 코어
  @babel/preset-react : 리액트의 JSX를 트랜스파일링
  @babel/preset-env : ES6+ 코드를 ES5로 트랜스파일링하고 브라우저 폴리필을 자동화
  */
