// OpenWeb Transparency — Financial Disclosure Overlay
(() => {
  if (document.getElementById("owt-overlay-banner")) return;

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
      The Perl and Raku Foundation — Financial Overview (2024)
    </div>
    <div style="margin-bottom: 4px;">
      Revenue: <strong>US$86,845</strong>
      | Total Assets: <strong>US$101,524</strong><br>
      Board Compensation: <strong>US$0</strong> (100% Volunteer Board)
      | Operating Expenses: <strong>US$188,037</strong>
    </div>
    <div style="font-size: 13px; opacity: 0.9; margin-top: 10px;">
      Verified Sources:
      <a href="https://projects.propublica.org/nonprofits/organizations/383536536"
         target="_blank"
         rel="noopener noreferrer"
         style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">
        IRS Form 990
      </a>,
      <a href="https://www.perlfoundation.org/"
         target="_blank"
         rel="noopener noreferrer"
         style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">
        Official Foundation Disclosures
      </a>
      <div style="font-weight: 600; font-size: 10px; margin-top: 12px; color: #bbbbbb;">
        OpenWeb Transparency | Released under BSD 2-Clause License | By Chris McGimpsey-Jones
      </div>
    </div>`;

  content.querySelectorAll("a").forEach(a => {
    a.onmouseenter = () => { a.style.color = "#4dabf7"; };
    a.onmouseleave = () => { a.style.color = "#a5d8ff"; };
  });

  owtDiv.appendChild(content);
  document.body.appendChild(owtDiv);
})();
