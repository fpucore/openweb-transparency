// OpenWeb Transparency — Financial Disclosure Overlay & Banner Suppression
(() => {
  // Remove Wikimedia fundraising banners across Wikipedia
  const banner1 = document.querySelector("div#siteNotice");
  if (banner1) banner1.remove();

  const banner2 = document.querySelector("div#frb-inline");
  if (banner2) banner2.remove();

  if (document.getElementById("owt-overlay-banner")) return;

  // Helper: Verify if current view is a main-namespace Wikipedia article
  function isWikipediaArticle() {
    if (typeof window.wgNamespaceNumber !== "undefined") {
      return window.wgNamespaceNumber === 0;
    }

    const path = window.location.pathname;
    const search = window.location.search;

    if (!path.includes("/wiki/") && !(path.includes("/w/index.php") && search.includes("title="))) {
      return false;
    }

    if (
      path.startsWith("/wiki/Special:") ||
      path.startsWith("/wiki/Talk:") ||
      path.startsWith("/wiki/User:") ||
      path.startsWith("/wiki/Wikipedia:") ||
      path.startsWith("/wiki/Template:") ||
      path.startsWith("/wiki/Category:") ||
      path.startsWith("/wiki/Help:") ||
      path.startsWith("/wiki/File:") ||
      search.includes("action=edit") ||
      search.includes("action=history") ||
      search.includes("diff=") ||
      document.body.classList.contains("page-Special_") ||
      (document.body.className.includes("ns-") && !document.body.className.includes("ns-0"))
    ) {
      return false;
    }

    const titleEl = document.querySelector("h1#firstHeading");
    return Boolean(titleEl && titleEl.textContent.trim().length > 1);
  }

  const owtDiv = document.createElement("div");
  owtDiv.id = "owt-overlay-banner";
  Object.assign(owtDiv.style, {
    position:        "fixed",
    top:             "16px",
    left:            "50%",
    transform:       "translateX(-50%)",
    minWidth:        "600px",
    maxWidth:        "800px",
    minHeight:       "72px",
    backgroundColor: "#000000",
    color:           "#e0e0e0",
    border:          "1px solid #333333",
    borderRadius:    "10px",
    boxShadow:       "0 6px 24px rgba(0,0,0,0.65)",
    zIndex:          "2147483647",
    opacity:         "0.92",
    padding:         "16px 24px",
    fontFamily:      "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
    fontSize:        "14px",
    lineHeight:      "1.45",
    display:         "flex",
    flexDirection:   "column",
    alignItems:      "center",
    justifyContent:  "center",
    boxSizing:       "border-box"
  });

  const closeBtn = document.createElement("button");
  Object.assign(closeBtn.style, {
    position:     "absolute",
    top:          "8px",
    left:         "10px",
    background:   "none",
    border:       "none",
    color:        "#aaaaaa",
    fontSize:     "18px",
    fontWeight:   "bold",
    cursor:       "pointer",
    padding:      "4px 8px",
    lineHeight:   "1",
    borderRadius: "4px"
  });
  closeBtn.textContent = "×";
  closeBtn.title = "Dismiss";
  closeBtn.setAttribute("aria-label", "Dismiss financial disclosure");
  closeBtn.onclick = () => owtDiv.remove();
  owtDiv.appendChild(closeBtn);

  const content = document.createElement("div");
  content.style.textAlign = "center";
  content.innerHTML = `
    <div style="font-weight: 600; font-size: 15px; margin-bottom: 6px; color: #ffffff;">
      Wikimedia Foundation — Financial Overview (2025)
    </div>
    <div style="margin-bottom: 4px;">
      Revenue: <strong>US$189.7 million</strong>
      | Total Assets: <strong>US$310.8 million</strong><br>
      Salaries &amp; Wages: <strong>US$114.0 million</strong>
      | Hosting Infrastructure: <strong>US$3.5 million</strong>
    </div>
    <div style="font-size: 13px; opacity: 0.9; margin-top: 10px;">
      Verified Sources:
      <a href="https://wikimediafoundation.org/annualreports/2024-2025-annual-report/"
         target="_blank"
         rel="noopener noreferrer"
         style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">
        Wikimedia Foundation Annual Report
      </a>
      <div id="owt-grok-slot"></div>
      <div style="font-weight: 600; font-size: 10px; margin-top: 12px; color: #bbbbbb;">
        OpenWeb Transparency | Released under BSD 2-Clause License | By Chris McGimpsey-Jones
      </div>
    </div>`;

  if (isWikipediaArticle()) {
    let pageTitle = "";
    const titleElement = document.querySelector("h1#firstHeading") || document.querySelector("h1");
    if (titleElement) {
      pageTitle = titleElement.textContent.trim();
    }

    if (!pageTitle || pageTitle.length < 3) {
      pageTitle = document.title
        .replace(/\s*[-–—]\s*(Wikipedia|Wikipédia|Wikimedia).*$/i, "")
        .replace(/\s*[-–—].*$/, "")
        .trim();
    }

    pageTitle = pageTitle
      .replace(/\s*\([^)]+\)$/, "")
      .replace(/\s+/g, " ")
      .trim();

    const grokTitle = pageTitle.replace(/ /g, "_");

    if (grokTitle) {
      const encodedTitle = encodeURIComponent(grokTitle);
      const grokipediaUrl = `https://grokipedia.com/page/${encodedTitle}`;

      const grokLinkContainer = document.createElement("div");
      grokLinkContainer.style.marginTop = "8px";
      grokLinkContainer.style.fontSize = "13px";

      const grokLink = document.createElement("a");
      grokLink.href = grokipediaUrl;
      grokLink.target = "_blank";
      grokLink.rel = "noopener noreferrer";
      grokLink.textContent = "View corresponding entry on Grokipedia";
      Object.assign(grokLink.style, {
        color:          "#a5d8ff",
        textDecoration: "none",
        borderBottom:   "1px dotted #a5d8ff"
      });

      grokLinkContainer.appendChild(grokLink);
      const slot = content.querySelector("#owt-grok-slot");
      if (slot) slot.replaceWith(grokLinkContainer);
    }
  }

  content.querySelectorAll("a").forEach(a => {
    a.onmouseenter = () => { a.style.color = "#4dabf7"; };
    a.onmouseleave = () => { a.style.color = "#a5d8ff"; };
  });

  owtDiv.appendChild(content);
  document.body.appendChild(owtDiv);
})();
