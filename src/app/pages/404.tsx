// pages/404.tsx
import { NextPage } from "next";

const Custom404: NextPage = () => {
  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>404 - Страница не найдена</h1>
      <p>К сожалению, такой страницы не существует.</p>
    </div>
  );
};

export default Custom404;
