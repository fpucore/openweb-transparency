
![OpenWeb Transparency logo](icons/openweb-transparency-logo_128px.png)

# 🕵️ OpenWeb Transparency

**X-Ray vision for Tech Non-Profits, Foundations, and Wikipedia.**

OpenWeb Transparency is a privacy-focused, tracker-free browser extension that cuts through the PR spin of major tech foundations. 

It injects raw, audited IRS Form 990 financial data, asset reports, and executive compensation directly into the websites of the organizations that shape the open web.

---

## ✨ Features

- 🚫 **Block Aggressive Banners**: Automatically hides Wikipedia's notorious, screen-filling donation popups.
- 💰 **Follow The Money**: Displays up-to-date (2023–2025) revenue, assets, and executive compensation for major tech non-profits.
- 📖 **Grokipedia Integration**: Adds a dynamic link on Wikipedia article pages to instantly check if the topic is covered on Grokipedia.
- 🎨 **Unified Overlay UI**: A sleek, pure-black (`#000000` @ 80% opacity) overlay with consistent typography, dimensions, and layout across all supported sites.
- 🛡️ **Zero Trackers**: No data collection, no ads, no telemetry. Just pure, transparent code.
- ⚡ **Modern Codebase**: Fully refactored using modern JavaScript (Template Literals, ES6+) for maximum performance and maintainability.

## 🌐 Supported Organizations

OpenWeb Transparency currently injects financial transparency overlays into the following domains:

| Organization | Domain |
| :--- | :--- |
| **Wikimedia Foundation** | `wikipedia.org` |
| **Mozilla Foundation** | `mozilla.org`, `mozilla.com` |
| **Linux Foundation** | `linuxfoundation.org` |
| **Python Software Foundation** | `python.org` |
| **Internet Archive** | `archive.org` |
| **Tor Project** | `torproject.org` |
| **The Perl Foundation** | `perlfoundation.org` |

---

## 🚀 Installation

### Chromium-based Browsers
1. Download the latest release `.zip` archive and extract it to a directory on your computer.
2. Open your browser and navigate to `chrome://extensions` (or `brave://extensions`).
3. Enable **Developer mode** (toggle in the top right corner).
4. Click **Load unpacked** and select the directory where you extracted the archive.
5. *Boom! Done.* Visit Wikipedia or any supported foundation site to see it in action.

### Firefox-based Browsers (experimental)
1. Download the latest release `.zip` archive and extract it to a directory on your computer.
2. Open your browser and navigate to `about:debugging#/runtime/this-firefox`.
3. Click **Load Temporary Add-on...** and select the `manifest.json` file from directory where you extracted the archive.

*(Note: Temporary add-ons in Firefox are removed when the browser restarts. For permanent installation, the extension must be signed by Mozilla or installed via the official Firefox Add-ons store once published (in the future)).*

---

## 🛠️ Development & Contributing

This project is open-source and is therefore open to contributions from the community! 

If you want to add a new tech foundation, update financial figures based on the latest IRS 990 filings, improve the UI, or anything else you believe would make this project more awesome:

1. **Fork** the repository.
2. **Clone** your fork locally.
3. Create a new JavaScript file for the site (e.g., `owt_newfoundation.js`) using the existing files as a template.
4. Add the domain to the `host_permissions` and `content_scripts` arrays in `manifest.json`.
5. Submit a **Pull Request**.

> 💡 **Not a developer?** If you have a new foundation, or updated financial figures you'd like to see added, or a feature idea but don't want to write the code yourself, please contact me directly! I am always happy to research and implement new ideas.

---

## 🙏 Acknowledgements

**OpenWeb Transparency** is a heavily modified and expanded fork of the original **[Wikipedia Donation Destroyer](https://github.com/BryanLunduke/Wikipedia-Donation-Destroyer)** browser extension created by [Bryan Lunduke](https://github.com/BryanLunduke). 

The original project built an excellent browser framework for holding tech non-profits accountable by injecting raw financial data directly into the browser.

However, in my opinion, the original project felt incomplete and abandoned, and was never given a chance to prove its real potential.

This fork expands the scope to include more foundations, updates the financial data to the absolute latest tax filings, and modernizes the entire codebase and UI.

---

## 📜 License

This project is licensed under the **BSD 2-Clause License** - see the [LICENSE](LICENSE) file for details.

*Copyright (c) 2026, Bryan Lunduke*  
*Copyright (c) 2026, Chris McGimpsey-Jones (OpenWeb Transparency Modifications)*

---

## 👨‍💻 Author

Chris McGimpsey-Jones (2026)

chrisjones.unixmen@gmail.com

