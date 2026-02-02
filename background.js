importScripts("utils.js");

chrome.webRequest.onBeforeRequest.addListener(
  function (details) {
    const domain = extractDomain(details.url);
    if (!domain) return;

    if (SAFE_DOMAINS.includes(domain)) return;

    if (isIDNHomograph(domain)) {
      console.warn("🚫 Blocked IDN Homograph Attack:", domain);
      return { cancel: true };
    }
  },
  { urls: ["<all_urls>"] },
  ["blocking"]
);
