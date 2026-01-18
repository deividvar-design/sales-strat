import React from 'react';

// Declare Calendly on window object
declare global {
  interface Window {
    Calendly: any;
  }
}

const CalendlyEmbed: React.FC = () => {
  const embedRef = React.useRef<HTMLDivElement>(null);
  const [scriptsLoaded, setScriptsLoaded] = React.useState(false);
  const [initialized, setInitialized] = React.useState(false);

  // Lazy load Calendly scripts when component mounts
  React.useEffect(() => {
    if (scriptsLoaded) return;

    // Load Calendly CSS
    const link = document.createElement('link');
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => setScriptsLoaded(true);
    document.body.appendChild(script);

    return () => {
      // Cleanup if component unmounts before script loads
      if (script.parentNode) script.parentNode.removeChild(script);
      if (link.parentNode) link.parentNode.removeChild(link);
    };
  }, [scriptsLoaded]);

  // Initialize Calendly widget after scripts are loaded
  React.useEffect(() => {
    if (!scriptsLoaded || initialized || !embedRef.current) return;

    if (window.Calendly) {
      embedRef.current.innerHTML = '';
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/david-saleshouse/30min?hide_gdpr_banner=1&primary_color=4f46e5',
        parentElement: embedRef.current,
        prefill: {},
        utm: {},
        styles: {
          height: '950px'
        }
      });
      setInitialized(true);
    }
  }, [scriptsLoaded, initialized]);

  return (
    <div ref={embedRef} style={{ minWidth: '320px', height: '950px' }}>
      {!scriptsLoaded && (
        <div className="flex items-center justify-center h-full">
          <div className="text-slate-600">Loading calendar...</div>
        </div>
      )}
    </div>
  );
};

export default CalendlyEmbed;
