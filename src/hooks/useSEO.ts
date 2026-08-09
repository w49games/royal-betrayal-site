import { useEffect } from 'react';

interface SEOOptions {
  title?: string;
  description: string;
  keywords?: string;
  image?: string;
}

const SITE_URL = 'https://royalbetrayal.com';
const DEFAULT_IMAGE = `${SITE_URL}/Tabletopiaphoto.webp`;

function setMeta(attr: 'name' | 'property', key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
  if (!element) {
    element = document.createElement('meta');
    element.setAttribute(attr, key);
    document.head.appendChild(element);
  }
  element.setAttribute('content', content);
}

const SITE_TITLE = 'Royal Betrayal';

export function useSEO({ description, keywords, image }: SEOOptions) {
  useEffect(() => {
    document.title = SITE_TITLE;
    setMeta('name', 'title', SITE_TITLE);
    setMeta('name', 'description', description);
    if (keywords) setMeta('name', 'keywords', keywords);

    setMeta('property', 'og:title', SITE_TITLE);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:image', image || DEFAULT_IMAGE);
    setMeta('property', 'og:url', SITE_URL);

    setMeta('name', 'twitter:title', SITE_TITLE);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:image', image || DEFAULT_IMAGE);
  }, [description, keywords, image]);
}
