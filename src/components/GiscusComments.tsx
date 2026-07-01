import { useEffect, useRef } from 'react';

export function GiscusComments() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return;

    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'w49games/royal-betrayal-site');
    script.setAttribute('data-repo-id', 'R_kgDOTJ_xgA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOTJ_xgM4DAP1T');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.crossOrigin = 'anonymous';
    script.async = true;

    ref.current.appendChild(script);
  }, []);

  return <div ref={ref} className="giscus-container py-8" />;
}