import { useSearchParams } from "react-router-dom";

export default function useGetParameter(name: any) {
  const [searchParams] = useSearchParams();


  return searchParams.get(name) ?? '';
}
