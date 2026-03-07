// Twitter/X uses twitter:image meta tag, which Next.js serves from this file.
// Re-export everything from opengraph-image so both use the same design.
export { default, alt, size, contentType } from './opengraph-image';

// runtime must be declared directly — Next.js cannot parse re-exported config fields
export const runtime = 'edge';
