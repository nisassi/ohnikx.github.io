"use client";
import * as React from "react";

let count = 0;
function genId() { count = (count + 1) % Number.MAX_SAFE_INTEGER; return count.toString(); }

const listeners = [];
let memoryState = { toasts: [] };

function dispatch(action) {
  switch(action.type) {
    case "ADD_TOAST":
      memoryState = { ...memoryState, toasts: [action.toast] };
      break;
    case "DISMISS_TOAST":
      memoryState = { ...memoryState, toasts: memoryState.toasts.map(t => ({ ...t, open: false })) };
      break;
    case "REMOVE_TOAST":
      memoryState = { ...memoryState, toasts: memoryState.toasts.filter(t => t.id !== action.toastId) };
      break;
    default: break;
  }
  listeners.forEach(l => l(memoryState));
}

export function toast(props) {
  const id = genId();
  const dismiss = () => dispatch({ type: "DISMISS_TOAST", toastId: id });
  dispatch({ type: "ADD_TOAST", toast: { ...props, id, open: true } });
  return { id, dismiss };
}

export function useToast() {
  const [state, setState] = React.useState(memoryState);
  React.useEffect(() => { listeners.push(setState); return () => { const i = listeners.indexOf(setState); if(i>-1) listeners.splice(i,1); }; }, []);
  return { ...state, toast, dismiss: (toastId) => dispatch({ type: "DISMISS_TOAST", toastId }) };
}
