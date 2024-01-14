import React, { createContext, useContext, useReducer, ReactNode } from "react";

interface CustomState {
  name: string;
  email: string;
  phone: string;
  salary_indication: string;
}

type ActionType =
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_PHONE"; payload: string }
  | { type: "SET_SALARY"; payload: string };

const CustomStateContext = createContext<
  | {
      state: CustomState;
      dispatch: React.Dispatch<ActionType>;
    }
  | undefined
>(undefined);

const customReducer = (state: CustomState, action: ActionType): CustomState => {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PHONE":
      return { ...state, phone: action.payload };
    case "SET_SALARY":
      return { ...state, salary_indication: action.payload };
    default:
      return state;
  }
};

// Creating a custom hook
export const useCustomState = () => {
  const [state, dispatch] = useReducer(customReducer, {
    name: "",
    email: "",
    phone: "",
    salary_indication: "",
  });

  const Provider: React.FC<{ children: ReactNode }> = ({ children }) => (
    <CustomStateContext.Provider value={{ state, dispatch }}>
      {children}
    </CustomStateContext.Provider>
  );

  const useContextValue = () => {
    const context = useContext(CustomStateContext);
    if (!context) {
      throw new Error(
        "useCustomState must be used within a CustomStateProvider",
      );
    }
    return context;
  };

  return { Provider, useContextValue };
};
