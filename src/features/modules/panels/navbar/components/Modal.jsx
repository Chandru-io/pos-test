/* eslint-disable react/prop-types */
import {
  useContext,
  cloneElement,
  useState,
  createContext,
  useRef,
  useEffect,
} from "react";
import { createPortal } from "react-dom";

const ModalContext = createContext();

// Modal parent
function Modal({ children }) {
  const [name, setName] = useState("");
  const open = (modalName) => setName(modalName);
  const close = () => setName("");

  return (
    <ModalContext.Provider value={{ name, open, close }}>
      {children}
    </ModalContext.Provider>
  );
}

// Modal Open
function Open({ children, openName }) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, { onClick: () => open(openName) });
}

// Modal Body Window
function ModalWindow({ children, windowName }) {
  const { name, close } = useContext(ModalContext);

  const ref = useRef();

  // OutSide Click
  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        close();
      }
    }

    document.addEventListener("click", handleClick, true);

    return () => document.removeEventListener("click", handleClick, true);
  }, [close]);

  if (name !== windowName) return null;

  return typeof window !== "undefined"
    ? createPortal(
        <div
          className="modal-wrapper_Dashboard z-50 "
          role="dialog"
          aria-modal="true"
        >
          <div
            ref={ref}
            className={`flex justify-center items-center  rounded-md delete_popup `}
          >
            {cloneElement(children, { onCloseModal: close })}
          </div>
        </div>,
        document.body
      )
    : null;
}

Modal.Open = Open;
Modal.Window = ModalWindow;

export default Modal;
