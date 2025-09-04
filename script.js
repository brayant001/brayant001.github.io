document.addEventListener('DOMContentLoaded', () => {
  // Botones → URL
  const targets = {
    downloadCvBtn: 'https://drive.google.com/file/d/1EsG5SBhkx1iPVl-UAvJ272s_KxBZVTB2/view?usp=sharing',
    downloadartBtn: 'https://drive.google.com/file/d/12flPZh-0wRGFLCqNi4QDK7eZlcF_Vy_H/view?usp=sharing',
    downloadCGDABtn: 'https://drive.google.com/file/d/1jE_dRaHqYMw575IVxFHFnR2EmDQMdIBs/view?usp=sharing',
    downloadCPBIBtn: 'https://drive.google.com/file/d/1U6zE20K8iSk3NlZD66C2MvVSKObVQWu8/view?usp=sharing',
    downloadCMEXCELBtn: 'https://drive.google.com/file/d/1vJpbIIpxnbbBYf04jf6_S6-mVfzd4LLz/view?usp=sharing',
    scheduleBtn: 'https://calendar.app.google/uxBoB9qceFgagE6s7'
  };

  // Abrir en nueva pestaña sin tocar la actual
  const openBlank = (url) => {
    const a = document.createElement('a');
    a.href = url;
    a.target = '_blank';
    a.rel = 'noopener'; // seguridad
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    a.remove();
  };

  // Alta de listeners
  for (const [id, url] of Object.entries(targets)) {
    const btn = document.getElementById(id);
    if (!btn) continue;
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openBlank(url); // sin fallback a location.href
    });
  }

  // Año dinámico
  const y = document.getElementById('year');
  if (y) y.textContent = new Date().getFullYear();
});