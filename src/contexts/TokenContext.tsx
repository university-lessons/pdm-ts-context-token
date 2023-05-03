import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

interface TokenContextProps {
  token: string;
}

const TokenContext = createContext<TokenContextProps>({
  token: "",
});

interface TokenContextProviderProps {
  children: ReactNode;
}

export function TokenContextProvider({ children }: TokenContextProviderProps) {
  const [token, setToken] = useState("");

  useEffect(() => {
    setTimeout(() => {
      setToken("ABC123");
    }, 2000);
  }, []);

  return (
    <TokenContext.Provider value={{ token }}>{children}</TokenContext.Provider>
  );
}

export function useToken() {
  const { token } = useContext(TokenContext);

  if (token === undefined)
    throw new Error("useToken must be used inside TokenContextProvider");

  return token;
}
