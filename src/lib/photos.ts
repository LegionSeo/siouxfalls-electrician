import type { PhotoSlot } from '../config/site';

/** 16:9 page photo. Files are {base}-800 and {base}-1280 in webp and avif. */
export function pagePhoto(base: string, alt: string): PhotoSlot {
  return {
    alt,
    width: 1280,
    height: 720,
    src: `/images/${base}-1280.webp`,
    webpSrcset: `/images/${base}-800.webp 800w, /images/${base}-1280.webp 1280w`,
    avifSrcset: `/images/${base}-800.avif 800w, /images/${base}-1280.avif 1280w`,
    note: 'Page photo. The person is not identified as company staff.',
  };
}
