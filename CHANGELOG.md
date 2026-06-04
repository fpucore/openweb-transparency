# Changelog

All notable changes to the **OpenWeb Transparency** browser extension will be documented in this file.

## [1.1.0] - 2026-06-04

### Added
- **Logo:** Added image files for logo of range of sizes.

### Fixed
- **Bugs:** Minor code fixes.

## [1.0.0] - 2026-06-02

### 🎉 Initial Release of "OpenWeb Transparency" (Fork)
This project is a heavily modified fork of the **Wikipedia Donation Destroyer**, a privacy-focused browser extension created by **Bryan Lunduke**. 

#### About the Original Project
The original *Wikipedia Donation Destroyer* was built as a simple, tracker-free, and ad-free Chrome/Firefox extension designed to do three main things:
1. Block the aggressive Wikipedia donation popups (e.g., "Donate or Wikipedia will die in 3 minutes!").
2. Display the true financials of the Wikimedia Foundation in a small, closable overlay box.
3. Provide a dynamic link to check if the current article is available on Grokipedia.

Additionally, as Lunduke described, "just for good measure," the original extension also injected financial data overlays for several other major Tech Foundations when visiting their respective websites, including Mozilla, the Python Software Foundation, the Linux Foundation, the Internet Archive, and the Tor Project.

While the original concept focused on injecting raw financial data and calling out PR spin on tech non-profit websites, this fork expands the scope, modernizes the codebase, unifies the user experience, and rebrands the project.

*Original project licensed under BSD 2-Clause. Modifications Copyright (c) 2026 Chris McGimpsey-Jones.*

### Added
- **The Perl Foundation Support:** Added `owt_perl.js` to track Yet Another Society (Perl) financials, highlighting their 100% volunteer board and $0 executive compensation.
- **Contextual Callouts:** Added specific contextual notes to existing overlays, such as the Python Software Foundation's declined $1.5M DEI grant.
- **Evergreen Source Links:** Replaced brittle, direct PDF links with stable, evergreen directories (e.g., ProPublica Nonprofit Explorer, official foundation record hubs).
- **Unified Footer:** Added a consistent BSD 2-Clause licensing and attribution footer to all non-Wikipedia overlays.

### Changed
- **Rebranding:** Renamed the extension from *Wikipedia Donation Destroyer* to **OpenWeb Transparency**.
- **Variable Prefixes:** Refactored the entire codebase, changing all variable and file prefixes from `wdd_` to `owt_` to match the new branding.
- **UI/UX Standardization:** 
  - Unified the background color across all modules to **Pure Black (`#000000`)** at **80% opacity** (previously a mix of dark greys and varying opacities).
  - Increased overlay dimensions to a minimum width of `600px` and maximum of `800px` for better readability.
  - Standardized the "Close" button position to the **Left** side across all modules.
- **Modern Codebase:** Rewrote all HTML string concatenations using modern JavaScript **Template Literals** (backticks) for cleaner, more maintainable code.
- **Manifest Optimization:** Removed `"all_frames": true` from `manifest.json` to prevent the overlay from injecting into hidden tracking iframes and causing duplicate banners.
- **Financial Data Updates:** Updated all revenue, asset, and executive compensation figures across all original foundations (Wikimedia, Mozilla, Linux, Archive, Tor, PSF) to reflect the absolute latest available IRS Form 990s and audits (2023–2025 data).

### Fixed
- **Wikipedia Syntax Error:** Fixed a broken arrow function syntax (`() = >` corrected to `() =>`) in the Grokipedia hover effect logic.
- **Mozilla HTML Bug:** Removed a redundant, broken double-closing tag (`</strong > </strong >`) in the Mozilla overlay.
- **CSS Trailing Spaces:** Stripped out non-standard trailing spaces inside CSS string values (e.g., `"fixed "`, `"#000000 "`) across all files.
- **Redundant HTML Tags:** Removed unnecessary `<strong>` tags in headers where CSS `font-weight: 600` was already handling the styling.
