"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Play, X } from "lucide-react";

function FilmModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    const trigger = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    const dialog = dialogRef.current;
    document.body.style.overflow = "hidden";
    dialog?.showModal();
    return () => {
      dialog?.close();
      document.body.style.overflow = previousOverflow;
      trigger?.focus();
    };
  }, []);

  return createPortal(
    <dialog ref={dialogRef} className="v2-film-modal" aria-labelledby="v2-film-title"
      onCancel={event => { event.preventDefault(); onClose(); }}
      onClick={event => { if (event.target === event.currentTarget) onClose(); }}>
      <div className="v2-film-dialog-content">
        <div className="v2-film-modal-header"><h2 id="v2-film-title">Dentro del negocio</h2><button onClick={onClose} aria-label="Cerrar video"><X size={22} /></button></div>
        <video controls playsInline preload="metadata" poster="/media/wizdomdata-dentro-del-negocio-poster.jpg" aria-label="WizdomData: dentro del negocio, video de 30 segundos sin audio">
          <source src="/media/wizdomdata-dentro-del-negocio.mp4" type="video/mp4" />
          <a href="/media/wizdomdata-dentro-del-negocio.mp4">Ver el video de WizdomData</a>
        </video>
        <details className="v2-film-transcript"><summary>Leer la idea del video</summary><p>Antes de construir, hay que entender. Nos integramos a tus procesos para comprender cómo se conecta tu negocio. Desde dentro identificamos fricciones, prioridades y oportunidades. Ese conocimiento se convierte en un producto analítico para anticipar, priorizar y decidir. Las decisiones vuelven a tu operación. WizdomData: tu partner estratégico en datos e inteligencia artificial.</p><p>El diagrama es ilustrativo y el video no tiene audio.</p></details>
      </div>
    </dialog>, document.body,
  );
}

export default function BrandFilm() {
  const [open, setOpen] = useState(false);
  return <>
    <section className="v2-film-section v2-shell" aria-labelledby="v2-film-heading">
      <div className="v2-film-copy"><p className="v2-kicker">Nuestra mirada</p><h2 id="v2-film-heading">Nos involucramos<br />para entender.<br /><span>Entendemos para<br />crear valor.</span></h2><p>Entramos en tus procesos, conectamos las piezas y encontramos dónde la analítica puede hacer una diferencia.</p></div>
      <button className="v2-film-launch" onClick={() => setOpen(true)} aria-haspopup="dialog" aria-label="Ver nuestra mirada, video de 30 segundos">
        <Image src="/media/wizdomdata-dentro-del-negocio-poster.jpg" alt="Diagrama de WizdomData dentro de los procesos de una empresa, conectado a un producto analítico" width={1280} height={720} sizes="(max-width: 760px) 100vw, 700px" />
        <span className="v2-film-launch-bar"><span className="v2-film-play"><Play size={19} fill="currentColor" /></span><span>Conoce nuestra mirada<span>30 segundos · Dentro del negocio</span></span><span className="v2-film-duration">00:30</span></span>
      </button>
    </section>
    {open && <FilmModal onClose={() => setOpen(false)} />}
  </>;
}
