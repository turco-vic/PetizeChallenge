import { useReducer, useEffect } from "react";
import { getUser } from "../services/github.service";
import type { User } from "../types";

interface State {
  data: User | null;
  isLoading: boolean;
  notFound: boolean;
  error: string | null;
}

type Action =
  | { type: "FETCH_START" }
  | { type: "FETCH_SUCCESS"; payload: User }
  | { type: "FETCH_NOT_FOUND" }
  | { type: "FETCH_ERROR"; payload: string };

const initialState: State = {
  data: null,
  isLoading: false,
  notFound: false,
  error: null,
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "FETCH_START":
      return { ...initialState, isLoading: true };
    case "FETCH_SUCCESS":
      return { ...initialState, data: action.payload };
    case "FETCH_NOT_FOUND":
      return { ...initialState, notFound: true };
    case "FETCH_ERROR":
      return { ...initialState, error: action.payload };
    default:
      return state;
  }
}

export function useGitHubUser(username: string): State {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    if (!username) return;

    let cancelled = false;

    getUser(username)
      .then((user) => {
        if (cancelled) return;
        if (user === null) {
          dispatch({ type: "FETCH_NOT_FOUND" });
        } else {
          dispatch({ type: "FETCH_SUCCESS", payload: user });
        }
      })
      .catch(() => {
        if (!cancelled)
          dispatch({ type: "FETCH_ERROR", payload: "Something went wrong. Please try again." });
      });

    dispatch({ type: "FETCH_START" });

    return () => {
      cancelled = true;
    };
  }, [username]);

  return state;
}
