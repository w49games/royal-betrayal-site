import { useEffect, useRef } from 'react';

interface GiscusCommentsProps {
  repo?: string;
  repoId?: string;
  category?: string;
  categoryId?: string;
  mapping?: 'pathname' | 'url' | 'title' | 'og:title' | 'specific' | 'number';
  strict?: '0' | '1';
  reactionsEnabled?: '0' | '1';
  emitMetadata?: '0' | '1';
  inputPosition?: 'top' | 'bottom';
  theme?: string;
  lang?: string;
}

export function GiscusComments({
  repo = 'w49games/royal-betrayal-site',
  repoId = 'R_kgDOTJ_xgA',
  category = '[ENTER CATEGORY NAME HERE]',
  categoryId = '[ENTER CATEGORY ID HERE]',
  mapping = 'pathname',
  strict = '0',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  theme = 'preferred_color_scheme',
  lang = 'en',
}: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', repo);
    script.setAttribute('data-repo-id', repoId);
    script.setAttribute('data-category', category);
    script.setAttribute('data-category-id', categoryId);
    script.setAttribute('data-mapping', mapping);
    script.setAttribute('data-strict', strict);
    script.setAttribute('data-reactions-enabled', reactionsEnabled);
    script.setAttribute('data-emit-metadata', emitMetadata);
    script.setAttribute('data-input-position', inputPosition);
    script.setAttribute('data-theme', theme);
    script.setAttribute('data-lang', lang);
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    containerRef.current.appendChild(script);

    return () => {
      if (containerRef.current) {
        const giscusIframe = containerRef.current.querySelector('iframe.giscus-frame');
        if (giscusIframe) {
          giscusIframe.remove();
        }
        script.remove();
      }
    };
  }, [repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, theme, lang]);

  return <div ref={containerRef} className="giscus" />;
}
