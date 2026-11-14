"use client";

import { useEffect, useState, useCallback } from "react";
import Frame from "@/components/Frame";
import { siteConfig } from "@/config/site";

type PhotoShot = {
  kind: "photo";
  gallery: string;
  galleryName: string;
  index: number;
  ratio: string;
  src?: string;
};

type FilmShot = {
  kind: "film";
  gallery: "films";
  galleryName: "Films";
  index: number;
  ratio: string;
  title: string;
  type: "youtube" | "direct";
  url: string;
  thumbnail?: string;
};

type Shot = PhotoShot | FilmShot;

function getYoutubeId(url: string) {
  return url.match(
    /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|shorts\/))([^?&/]+)/
  )?.[1];
}

export default function Gallery() {
  const galleries = siteConfig.galleries;
  const [active, setActive] = useState("all");
  const [open, setOpen] = useState<number | null>(null);

  const shots: Shot[] = [
    ...galleries.flatMap((g) =>
      Array.from({ length: g.images.length }, (_, i): PhotoShot => ({
        kind: "photo",
        gallery: g.slug,
        galleryName: g.name,
        index: i,
        ratio: g.ratios[i] ?? "portrait",
        src: g.images[i],
      }))
    ),
    ...siteConfig.films.map(
      (film, i): FilmShot => ({
        kind: "film",
        gallery: "films",
        galleryName: "Films",
        index: i,
        ratio: "landscape",
        title: film.title,
        type: film.type,
        url: film.url,
        thumbnail: film.thumbnail,
      })
    ),
  ];

  const visible =
  active === "all"
    ? shots
    : shots.filter((s) => s.gallery === active);

  const close = useCallback(() => setOpen(null), []);

  const next = useCallback(
    () => setOpen((i) => (i === null ? null : (i + 1) % visible.length)),
    [visible.length]
  );

  const prev = useCallback(
    () =>
      setOpen((i) =>
        i === null ? null : (i - 1 + visible.length) % visible.length
      ),
    [visible.length]
  );

  useEffect(() => {
    if (open === null) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };

    document.addEventListener("keydown", onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, close, next, prev]);

  const current = open === null ? null : visible[open];

  return (
    <section id="work" className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.18em] opacity-50">
              Selected work
            </span>
            <h2 className="mt-3 font-display text-3xl font-bold tracking-tight sm:text-5xl">
              The work
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            <FilterButton
              label="Everything"
              isActive={active === "all"}
              onClick={() => {
                setActive("all");
                setOpen(null);
              }}
            />

            {galleries.map((g) => (
              <FilterButton
                key={g.slug}
                label={g.name}
                isActive={active === g.slug}
                onClick={() => {
                  setActive(g.slug);
                  setOpen(null);
                }}
              />
            ))}

            <FilterButton
              label="Films"
              isActive={active === "films"}
              onClick={() => {
                setActive("films");
                setOpen(null);
              }}
            />
          </div>
        </div>

        {active !== "all" && active !== "films" && (
          <p className="mt-5 max-w-xl text-sm opacity-60">
            {galleries.find((g) => g.slug === active)?.blurb}
          </p>
        )}

        <div className="masonry mt-10">
          {visible.map((s, i) => (
            <button
              key={`${s.gallery}-${s.index}`}
              type="button"
              onClick={() => setOpen(i)}
              className="group block w-full cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-current"
              aria-label={
                s.kind === "film"
                  ? `Play ${s.title}`
                  : `Open ${s.galleryName} photograph ${s.index + 1}`
              }
            >
              <div className="relative overflow-hidden transition-opacity duration-300 group-hover:opacity-85">
                {s.kind === "photo" ? (
                  <Frame
                    seed={s.gallery}
                    index={s.index}
                    ratio={s.ratio}
                    src={s.src}
                  />
                ) : (
                  <div
                    className="relative aspect-video w-full bg-neutral-900 bg-cover bg-center"
                    style={{
                      backgroundImage: s.thumbnail
                        ? `url("${s.thumbnail}")`
                        : s.type === "youtube" && getYoutubeId(s.url)
                          ? `url("https://img.youtube.com/vi/${getYoutubeId(s.url)}/hqdefault.jpg")`
                          : undefined,
                    }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center bg-black/25 transition-colors group-hover:bg-black/40">
                      <div className="flex h-14 w-14 items-center justify-center rounded-full border border-white/70 bg-black/30 text-white backdrop-blur-sm">
                        <svg
                          width="22"
                          height="22"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>
                    <span className="absolute bottom-4 left-4 text-xs font-semibold uppercase tracking-widest text-white">
                      {s.title}
                    </span>
                  </div>
                )}
              </div>
            </button>
          ))}
        </div>
      </div>

      {current && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 p-4 backdrop-blur-sm"
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            onClick={close}
            aria-label="Close"
            className="absolute right-5 top-5 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
          >
            ✕
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              prev();
            }}
            aria-label="Previous item"
            className="absolute left-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:left-8"
          >
            ‹
          </button>

          <figure
            className="w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {current.kind === "photo" ? (
              <Frame
                seed={current.gallery}
                index={current.index}
                ratio={current.ratio}
                className="max-h-[78vh]"
                src={current.src}
              />
            ) : (
              <div className="aspect-video w-full overflow-hidden bg-black">
                {current.type === "youtube" ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${getYoutubeId(current.url)}?autoplay=1&rel=0`}
                    title={current.title}
                    className="h-full w-full"
                    allow="autoplay; encrypted-media; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <video
                    src={current.url}
                    controls
                    autoPlay
                    playsInline
                    className="h-full w-full"
                  />
                )}
              </div>
            )}

            <figcaption className="mt-3 text-center text-xs uppercase tracking-[0.16em] text-white/50">
              {current.kind === "film" ? current.title : current.galleryName}
              {" · "}
              {open! + 1} / {visible.length}
            </figcaption>
          </figure>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              next();
            }}
            aria-label="Next item"
            className="absolute right-3 z-10 flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white sm:right-8"
          >
            ›
          </button>
        </div>
      )}
    </section>
  );
}

function FilterButton({
  label,
  isActive,
  onClick,
}: {
  label: string;
  isActive: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={isActive}
      className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${
        isActive
          ? "bg-ink-900 text-ink-50 dark:bg-ink-100 dark:text-ink-900"
          : "border border-current/15 opacity-70 hover:opacity-100"
      }`}
    >
      {label}
    </button>
  );
      }
