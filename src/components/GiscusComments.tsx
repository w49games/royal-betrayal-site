export function GiscusComments() {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://giscus.app/client.js';
    script.setAttribute('data-repo', 'w49games/royal-betrayal-site');
    script.setAttribute('data-repo-id', 'R_kgDOTJ_xgA');
    script.setAttribute('data-category', 'General');
    script.setAttribute('data-category-id', 'DIC_kwDOTJ_xgM4DAP1T');
    script.setAttribute('data-mapping', 'title');
    script.setAttribute('data-strict', '0');
    script.setAttribute('data-reactions-enabled', '1');
    script.setAttribute('data-emit-metadata', '0');
    script.setAttribute('data-input-position', 'bottom');
    script.setAttribute('data-theme', 'dark_dimmed');
    script.setAttribute('data-lang', 'en');
    script.setAttribute('crossorigin', 'anonymous');
    script.async = true;

    const container = document.querySelector('.giscus-container');
    if (container) {
      container.innerHTML = '';
      container.appendChild(script);
    }
  }, []);

  return <div className="giscus-container"></div>;
}