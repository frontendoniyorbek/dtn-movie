import { auth } from "@/firebase";
import { UseAuth } from "@/hooks/useAuth";
import { User, onAuthStateChanged } from "firebase/auth";
import { useRouter } from "next/router";
import { createContext, ReactNode, useMemo, useEffect, useState } from "react";

interface AuthContextState {
  user: User | null;
  error: string;
  isLoading: boolean;
  signUp:(email:string, password:string) => Promise<void>;
  signIn:(email:string, password:string) => Promise<void>;
  logout:() => Promise<void>;
}

export const AuthContext = createContext<AuthContextState>({
  user:null,
  error:'',
  isLoading:false,
  signIn:async () => {},
  signUp:async () => {},
  logout:async () => {},
});

const AuthContextProvider = ({children} : {children: ReactNode}) => {
  const [initialLoader, setInitialLoader] = useState<boolean>(true)
  const {error, isLoading, logout, signIn, signUp, user, setUser, setIsLoading} = UseAuth();
  const router = useRouter()
  const value = useMemo(
    () => ({
      user,
      isLoading,
      logout,
      signIn,
      error,
      signUp,
    }),

    //eslint-disable-next-line
    [user, isLoading, error]
  );

  useEffect(() => onAuthStateChanged(auth, user => {
    if(user) {
      setIsLoading(false)
      setUser(user)
    } else {
      setIsLoading(true)
      setUser(null)
      router.push('/auth');
    }

    setInitialLoader(false);
  }),
  // eslint-disable-next-libe
  []
  );

  return <AuthContext.Provider value={value}>{!initialLoader ? children : 'Loading...'}</AuthContext.Provider>;
}

export default AuthContextProvider;