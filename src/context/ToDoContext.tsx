import { createContext, useState, PropsWithChildren  } from 'react';

interface TodoContextState {
  filter: string;
  setFilter: (filter: string) => void;
}

const TodoContext = createContext<TodoContextState | null>(null)
export const TodoProvider: React.FC = ({ children }: PropsWithChildren<{}>) => {
  const [filter, setFilter] = useState("all")

  return (
    <TodoContext.Provider value={{ filter, setFilter }}>
      {children}
    </TodoContext.Provider>
  );
};