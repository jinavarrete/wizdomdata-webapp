"use client";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import DiagnosticoMadurez from "./DiagnosticoMadurez/DiagnosticoMadurez";
export default function DiagnosticModal({onClose}:{onClose:()=>void}) {
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    dialog.current?.showModal();
    return () => { document.body.style.overflow = overflow; previous?.focus(); };
  }, []);
  return createPortal(<dialog ref={dialog} className="diagnostic-modal" aria-label="Diagnóstico de madurez analítica" onCancel={e=>{e.preventDefault();onClose();}} onClick={e=>{if(e.target===e.currentTarget)onClose();}}><div className="diagnostic-frame"><DiagnosticoMadurez onClose={onClose}/></div></dialog>,document.body);
}
