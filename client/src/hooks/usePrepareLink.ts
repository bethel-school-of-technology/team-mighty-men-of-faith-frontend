// import { useLocation } from "react-router-dom";

interface schema {
  query?: {
    [key: string]: string;
  };
}

const  location = {
  pathname: 'filter'
}
export default function usePrepareLink({ query = {} }: schema) {
  // const location = useLocation();

  let pathname;

  pathname = location.pathname;

  const newQuery = new URLSearchParams();

  Object.entries(query).forEach(([key, value]) => {
    newQuery.set(key, value);
  });

  return {
    pathname: pathname.replace(/\/\//g, "/"),
    search: newQuery.toString() ? `?${newQuery.toString()}` : "",
  };
}
