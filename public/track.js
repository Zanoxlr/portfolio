/* zanmocnik.com portfolio analytics — first-party, cookieless event beacons.
   Same collector/style as the InstantInvoice tracker. No cookies, no third
   parties; a random per-load session id only. Reports: page open, which project
   scrolled into view, project "View Live" clicks, and contact (email/WhatsApp)
   clicks, plus time-on-page. Fixed r=zmsite so the pipeline buckets it as the
   portfolio; the InstantInvoice demo link carries its own ?r=zmport. */
(function(){
  var EP  = 'https://t.tryinstantinvoice.com/cpx';
  var R   = 'zmsite';
  var SID = Math.random().toString(36).slice(2,10);

  // Only the live portfolio host is tracked; local/preview builds log nothing.
  // Escape hatch: ?trackcheck=1 sends beacons flagged t:1 (kept out of stats).
  var PROD_HOSTS = ['zanmocnik.com', 'www.zanmocnik.com'];
  var IS_PROD = PROD_HOSTS.indexOf(location.hostname) !== -1;
  var TESTMODE = /(?:^|[?&])trackcheck=1(?:&|$)/.test(location.search);
  if(!IS_PROD && !TESTMODE){ return; }

  function send(ev, detail){
    try{
      if(TESTMODE){ detail = detail || {}; detail.t = 1; }
      var p = 'e='+encodeURIComponent(ev)+'&r='+R+'&s='+SID;
      if(detail!=null){ var ds = JSON.stringify(detail); if(ds.length < 1000) p += '&d='+encodeURIComponent(ds); }
      var u = EP+'?'+p;
      if(navigator.sendBeacon){ navigator.sendBeacon(u); } else { var i=new Image(); i.src=u; }
    }catch(e){}
  }

  // page context
  var LANG = (document.documentElement.getAttribute('lang') || '').slice(0,5) || '?';
  var PATH = (location.pathname || '/').slice(0,80);
  var DEV  = (Math.min(screen.width, screen.height) < 700 ||
              /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent)) ? 'mobile' : 'desktop';
  var Q = new URLSearchParams(location.search);
  function utm(k){ var v = Q.get('utm_'+k); return v ? v.slice(0,60) : undefined; }
  var UTM = { src:utm('source'), med:utm('medium'), cmp:utm('campaign'),
              term:utm('term'), content:utm('content') };
  var HAS_UTM = UTM.src||UTM.med||UTM.cmp||UTM.term||UTM.content;
  var openDetail = { ref:(document.referrer||'').slice(0,120), lang:LANG, path:PATH, dev:DEV };
  if(HAS_UTM){ openDetail.utm = UTM; }
  send('open', openDetail);

  // project impressions: fire once when a project card scrolls into view.
  // React renders the cards after mount, so (re)scan for [data-project] until
  // they exist, then observe each once.
  var seen = {};
  var io = ('IntersectionObserver' in window) ? new IntersectionObserver(function(entries){
    entries.forEach(function(en){
      if(en.isIntersecting){
        var id = en.target.getAttribute('data-project');
        if(id && !seen[id]){ seen[id]=1; send('project_view', { project:id }); }
        io.unobserve(en.target);
      }
    });
  }, { threshold:0.5 }) : null;
  var observed = 0;
  function scan(){
    if(!io) return;
    var els = document.querySelectorAll('[data-project]');
    for(var i=0;i<els.length;i++){ if(!els[i].__zt){ els[i].__zt=1; io.observe(els[i]); observed++; } }
  }
  scan();
  var mo = new MutationObserver(function(){ scan(); });
  try{ mo.observe(document.body, { childList:true, subtree:true }); }catch(e){}
  // stop watching for new cards after they've settled
  setTimeout(function(){ try{ mo.disconnect(); }catch(e){} }, 8000);

  // clicks: project "View Live" (a[data-plink]), and contact links (mailto / wa.me)
  document.addEventListener('click', function(e){
    var t = e.target; if(!t || !t.closest) return;
    var pl = t.closest('a[data-plink]');
    if(pl){ send('project_click', { project: pl.getAttribute('data-plink') }); return; }
    var a = t.closest('a[href]'); if(!a) return;
    var href = a.getAttribute('href') || '';
    if(/^mailto:/i.test(href)){ send('contact_click', { method:'email' }); return; }
    if(/wa\.me|whatsapp/i.test(href)){ send('contact_click', { method:'whatsapp' }); return; }
    if(/linkedin\.com/i.test(href)){ send('contact_click', { method:'linkedin' }); return; }
    if(/github\.com/i.test(href)){ send('contact_click', { method:'github' }); return; }
  }, true);

  // time on page, sent reliably on leave
  var t0=Date.now();
  function leave(){ try{ var sec=Math.round((Date.now()-t0)/1000); if(sec>=3 && navigator.sendBeacon){
    navigator.sendBeacon(EP+'?e=engaged&r='+R+'&s='+SID+'&d='+encodeURIComponent(JSON.stringify({sec:sec}))); } }catch(e){} }
  addEventListener('visibilitychange', function(){ if(document.visibilityState==='hidden') leave(); });
  addEventListener('pagehide', leave);
})();
