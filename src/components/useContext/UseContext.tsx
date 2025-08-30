// import ChildA from './ChildA'
import { createContext, useState } from "react";
interface UserContextType {
  user: string;
  setUser: (name: string) => void;
}

export const UserContext = createContext<UserContextType | null>(null);

function UseContext({ children }:{children: React.ReactNode}) {
     const [user, setUser] = useState("asif sheikh");
  return (
    <div>
        <UserContext.Provider value={{ user, setUser }}>
          {children}
        </UserContext.Provider>
    </div>
  )
}

export default UseContext