# Browser-Security-Ext.-
“A browser security extension that protects users from phishing by blocking IDN homograph attacks. It detects Unicode look-alike domains using punycode patterns and Chrome’s Declarative Net Request API to prevent malicious websites from loading in real time.”

🔐 IDN Homograph Attack Blocker – Browser Security Extension

A lightweight browser security extension that protects users from phishing attacks by blocking IDN Homograph domains (Unicode look-alike URLs) in real time. The extension is built using JavaScript and Chrome’s Declarative Net Request API, fully compliant with Manifest V3.

🚨 What is an IDN Homograph Attack?

IDN (Internationalized Domain Name) homograph attacks exploit Unicode characters that visually resemble ASCII characters.

Example:
Fake Domain	Looks Like
раypal.com	paypal.com
gοοgle.com	google.com

Although these domains look legitimate, they resolve to different malicious websites.

🎯 Project Objective

Detect and block Unicode look-alike phishing domains

Prevent malicious pages from loading

Work silently in the background

Be Chrome Web Store compliant

Provide real-time protection with zero performance impact

⚙️ How the Project Works
1. IDN & Punycode Detection

All internationalized domain names are converted by browsers into Punycode, which always starts with:

xn--


Example:

раypal.com → xn--ypal-4ve.com

2. Request Interception (Declarative)

The extension uses Chrome’s Declarative Net Request (DNR) engine to:

Intercept navigation requests

Match domains containing xn--

Block the request before the page loads

This approach avoids restricted APIs and complies with Manifest V3 security policies.

3. Silent & Secure Blocking

No page loads

No popups

No user interaction required

Works automatically after installation

🗂️ Project Structure
idn-homograph-blocker/
│
├── manifest.json        # Extension configuration (MV3)
├── rules.json           # Blocking rules for IDN domains
├── background.js        # Installation & logging
└── icon.png (optional)

🧩 Key Files Explained
manifest.json

Defines permissions, background service worker, and rule resources using Manifest V3.

rules.json

Contains declarative rules that block any URL containing:

xn--

background.js

Handles extension lifecycle events (installation, logging).

🚀 How to Install (Chrome)

Clone or download this repository

Open Chrome and navigate to:

chrome://extensions


Enable Developer Mode

Click Load unpacked

Select the project folder

The extension will activate immediately.

🧪 How to Test
Test a Fake Homograph Domain
http://раypal.com


✔ Page will be blocked
✔ Site will not load

Test a Legitimate Website
https://google.com


✔ Loads normally

🔐 What This Extension Blocks

IDN homograph phishing domains

Unicode look-alike character attacks

Punycode-encoded malicious URLs

🛡️ Technologies Used

JavaScript

Chrome Extensions API

Declarative Net Request API

Manifest V3

📌 Use Cases

Phishing prevention

Browser security research

Cybersecurity academic projects

Resume and portfolio projects

📈 Future Enhancements

Warning page instead of silent blocking

Threat statistics dashboard

Machine-learning phishing detection

Firefox-specific build with advanced Unicode analysis

Integration with external threat-intel APIs

📄 License

This project is open-source and intended for educational and security research purposes.

⭐ Final Note

This extension demonstrates a modern, policy-compliant approach to browser security by addressing a real-world phishing threat using officially supported APIs.

If you find this project useful, feel free to ⭐ star the repository!
