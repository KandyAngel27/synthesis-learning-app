// ============================================
// TOAST NOTIFICATION SYSTEM
// Replaces blocking alert() calls with non-blocking slide-in toasts.
// Usage: toast("Message", "info" | "success" | "error" | "warn")
// ============================================
(function () {
  function ensureContainer() {
    let c = document.getElementById('toast-container');
    if (!c) {
      c = document.createElement('div');
      c.id = 'toast-container';
      c.style.cssText = [
        'position:fixed',
        'bottom:96px',
        'left:50%',
        'transform:translateX(-50%)',
        'z-index:99999',
        'display:flex',
        'flex-direction:column',
        'gap:0.5rem',
        'pointer-events:none',
        'max-width:90vw'
      ].join(';');
      document.body.appendChild(c);
    }
    return c;
  }

  const COLOR = {
    info:    { bg: '#1a1a2e', border: '#6366f1', text: '#ffffff' },
    success: { bg: '#1a1a2e', border: '#10b981', text: '#ffffff' },
    error:   { bg: '#1a1a2e', border: '#ef4444', text: '#ffffff' },
    warn:    { bg: '#1a1a2e', border: '#f59e0b', text: '#ffffff' }
  };

  function toast(msg, type) {
    if (!type || !COLOR[type]) type = 'info';
    const c = ensureContainer();
    const t = document.createElement('div');
    const palette = COLOR[type];
    t.style.cssText = [
      `background:${palette.bg}`,
      `color:${palette.text}`,
      `border:1px solid ${palette.border}`,
      'border-left:4px solid ' + palette.border,
      'padding:0.75rem 1.1rem',
      'border-radius:8px',
      'box-shadow:0 4px 20px rgba(0,0,0,0.35)',
      'font-size:0.95rem',
      'line-height:1.4',
      'max-width:480px',
      'opacity:0',
      'transform:translateY(8px)',
      'transition:opacity 200ms ease, transform 200ms ease',
      'pointer-events:auto',
      'cursor:pointer'
    ].join(';');
    t.textContent = String(msg);
    t.addEventListener('click', () => dismiss(t));
    c.appendChild(t);
    requestAnimationFrame(() => {
      t.style.opacity = '1';
      t.style.transform = 'translateY(0)';
    });
    // Auto-dismiss after 3.2s; longer messages stay a bit longer
    const ms = Math.min(7000, 2200 + Math.min(String(msg).length, 200) * 20);
    setTimeout(() => dismiss(t), ms);
    return t;
  }

  function dismiss(t) {
    if (!t.parentNode) return;
    t.style.opacity = '0';
    t.style.transform = 'translateY(8px)';
    setTimeout(() => { if (t.parentNode) t.parentNode.removeChild(t); }, 220);
  }

  window.toast = toast;
})();
