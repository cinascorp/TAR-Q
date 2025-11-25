(function(){
  // Safe message handler for tar-q.html to accept non-operational hints from index.html.
  // Only conservative behavior: no sensitive functionality, only safe flags and a small snapshot.
  function sendResponse(type, payload){
    try { parent.postMessage({ __tarq_resp: true, type, payload }, '*'); } catch(e) {}
  }

  window.addEventListener('message', function(ev){
    const msg = ev.data || {};
    if (!msg || !msg.__tarq_cmd) return;
    try {
      const type = msg.type;
      const p = msg.payload || {};
      if (type === 'setPerfMode') {
        if (typeof window.setPerfMode === 'function') {
          try { window.setPerfMode(p.mode); } catch(e){}
        } else {
          window.__tarq_perfMode = p.mode;
        }
      } else if (type === 'onlySuspicious') {
        if (typeof window.onlySuspicious === 'function') {
          try { window.onlySuspicious(p.enabled); } catch(e){}
        } else {
          window.__tarq_onlySuspicious = !!p.enabled;
          try { if (typeof updateMarkersAndTracks === 'function') updateMarkersAndTracks(); } catch(e){}
        }
      } else if (type === 'requestDebugSnapshot') {
        const snapshot = { now: Date.now(), flightCount: 0, sample: [] };
        try {
          if (window.flightsByHex && typeof window.flightsByHex.size === 'number') snapshot.flightCount = window.flightsByHex.size;
          else if (window.flightsByHex && typeof window.flightsByHex === 'object') snapshot.flightCount = Object.keys(window.flightsByHex).length;
          if (window.flightsByHex && typeof window.flightsByHex.entries === 'function') {
            let i=0;
            for (const [hex, f] of window.flightsByHex.entries()) {
              snapshot.sample.push({ hex, lat: f.lat, lon: f.lon, category: f.category || null, callsign: f.callsign || null });
              if (++i >= 25) break;
            }
          }
        } catch(e){}
        sendResponse('debugSnapshot', snapshot);
      } else if (type === 'escape') {
        try { const popup = document.getElementById('popup'); if (popup) popup.style.display = 'none'; } catch(e) {}
      }
    } catch (e) {
      console.warn('tar-q message handler error', e);
    }
  }, false);

  // Non-destructive fallback functions (no-op if absent)
  window.setPerfMode = window.setPerfMode || function(mode){ console.info('tar-q: setPerfMode (stub) ->', mode); window.__tarq_perfMode = mode; };
  window.onlySuspicious = window.onlySuspicious || function(enabled){ console.info('tar-q: onlySuspicious (stub) ->', enabled); window.__tarq_onlySuspicious = !!enabled; try { if (typeof updateMarkersAndTracks === 'function') updateMarkersAndTracks(); } catch(e){} };
  window.requestDebugSnapshot = window.requestDebugSnapshot || function(){ try{ const payload = { now: Date.now(), flightCount: (window.flightsByHex && window.flightsByHex.size) || 0 }; parent.postMessage({ __tarq_resp: true, type: 'debugSnapshot', payload }, '*'); } catch(e){} };
  window.escape = window.escape || function(){ try{ const popup = document.getElementById('popup'); if (popup) popup.style.display = 'none'; } catch(e){} };
})();
