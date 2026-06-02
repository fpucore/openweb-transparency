// Show true financials
var owt_div = document.createElement("div");
Object.assign(owt_div.style, {
  position:         "fixed",
  top:              "16px",
  left:             "50%",
  transform:        "translateX(-50%)",
  minWidth:         "600px",
  maxWidth:         "800px",
  minHeight:        "72px",
  backgroundColor:  "#000000",
  color:            "#e0e0e0",
  borderRadius:     "10px",
  boxShadow:        "0 6px 24px rgba(0,0,0,0.5)",
  zIndex:           "9999",
  opacity:          "0.8",
  padding:          "16px 20px",
  fontFamily:       "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
  fontSize:         "14px",
  lineHeight:       "1.45",
  display:          "flex",
  flexDirection:    "column",
  alignItems:       "center",
  justifyContent:   "center",
  boxSizing:        "border-box",
});

// Close button
var closeBtn = document.createElement("button");
Object.assign(closeBtn.style, {
  position:         "absolute",
  top:              "8px",
  left:             "10px",
  background:       "none",
  border:           "none",
  color:            "#aaa",
  fontSize:         "18px",
  fontWeight:       "bold",
  cursor:           "pointer",
  padding:          "4px 8px",
  lineHeight:       "1",
  borderRadius:     "4px",
});
closeBtn.innerHTML = "×";
closeBtn.title = "Close";
closeBtn.onclick = function() {
  owt_div.remove();
};
owt_div.appendChild(closeBtn);

// Display the true financial data
var content = document.createElement("div");
content.style.textAlign = "center";
content.innerHTML = `
  <div style="font-weight: 600; font-size: 15px; margin-bottom: 6px;">
    The Perl and Raku Foundation Financial Report (as of 2024)
  </div>
  <div style="margin-bottom: 4px;">
    Revenue: <strong>(US)$86,845</strong>
    | Assets: <strong>(US)$101,524</strong> <br>
    Board compensation: <strong>$0</strong> (100% Volunteer Board)
    | Costs <strong>(US)$188,037</strong>
  </div>
  <div style="font-size: 13px; opacity: 0.9; margin-top: 12px;">
    Sources:
    <a href="https://projects.propublica.org/nonprofits/organizations/383536536"
       target="_blank"
       style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">
      IRS Form 990
    </a>,
    <a href="https://www.perlfoundation.org/"
       target="_blank"
       style="color: #a5d8ff; text-decoration: none; border-bottom: 1px dotted #a5d8ff;">
      Official Website
    </a>
    <div style="font-weight: 600; font-size: 10px; margin-top: 12px;">
      Released under BSD 2-Clause License | By Chris McGimpsey-Jones
    </div>
  </div>`;

// Hover effect for links
content.querySelectorAll('a').forEach(a => {
  a.onmouseenter = () => { a.style.color = "#4dabf7"; };
  a.onmouseleave = () => { a.style.color = "#a5d8ff"; };
});

owt_div.appendChild(content);
document.body.appendChild(owt_div);

