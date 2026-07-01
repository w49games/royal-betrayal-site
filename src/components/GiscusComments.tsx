import { useEffect, useRef, useState } from 'react';

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
  category = 'General',
  categoryId = 'DIC_kwDOTJ_xgM4DAP1T',
  mapping = 'title',
  strict = '0',
  reactionsEnabled = '1',
  emitMetadata = '0',
  inputPosition = 'bottom',
  theme = 'dark_dimmed',
  lang = 'en',
}: GiscusCommentsProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;

    const handleMessage = (event: MessageEvent) => {
      if (event.origin !== 'https://giscus.app') return;
      if (event.data?.giscus?.discussion) {
        setIsLoaded(true);
        setHasError(false);
      }
    };

    const handleError = () => {
      setHasError(true);
    };

    window.addEventListener('message', handleMessage);

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
    script.onerror = handleError;

    containerRef.current.appendChild(script);

    const timeoutId = setTimeout(() => {
      if (!isLoaded && !hasError) {
        setHasError(true);
      }
    }, 10000);

    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('message', handleMessage);
      if (containerRef.current) {
        const giscusIframe = containerRef.current.querySelector('iframe.giscus-frame');
        if (giscusIframe) {
          giscusIframe.remove();
        }
        script.remove();
      }
    };
  }, [repo, repoId, category, categoryId, mapping, strict, reactionsEnabled, emitMetadata, inputPosition, theme, lang, isLoaded, hasError]);

  if (hasError) {
    return (
      <div className="max-w-4xl mx-auto p-6 rounded-xl bg-dark-400/30 backdrop-blur-sm border border-dark-50/10">
        <p className="text-secondary-400 text-sm text-center font-sans">
          Comments could not be loaded. Please ensure GitHub Discussions is enabled for the repository.
        </p>
      </div>
    );
  }

  return (
    <div
      className={`max-w-4xl mx-auto p-6 rounded-xl bg-dark-400/30 backdrop-blur-sm border border-dark-50/10 transition-opacity duration-500 ${
        isLoaded ? 'opacity-100' : 'opacity-0'
      }`}
    >
      <div ref={containerRef} className="giscus" />
    </div>
  );
}
