// pages/_error.tsx
import { NextPageContext } from "next";
import Error from "next/error";

function CustomError({ statusCode }: { statusCode: number }) {
  return <Error statusCode={statusCode} />;
}

CustomError.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default CustomError;
