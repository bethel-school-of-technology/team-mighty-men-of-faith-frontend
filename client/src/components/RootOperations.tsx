import LoadingIndicator from "./LoadingIndicator";
import NavBar from "./NavBar";
import Snack from "./Snack";

interface rootOperationsSchema {
  children: JSX.Element;
}
export default function RootOperations({ children }: rootOperationsSchema) {
  return (
    <>
      <NavBar />
      {children}

      <Snack />
      <LoadingIndicator />
    </>
  );
}
