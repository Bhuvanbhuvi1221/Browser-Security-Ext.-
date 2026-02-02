const CONFUSABLE_REGEX = /[а-яΑ-Ωα-ω０-９]/;

const SAFE_DOMAINS = [
  "google.com",
  "github.com",
  "amazon.com",
  "microsoft.com"
];

function isIDNHomograph(domain) {
  const hasUnicode = /[^\x00-\x7F]/.test(domain);
  const hasASCII = /[a-zA-Z]/.test(domain);

  if (hasUnicode && hasASCII) return true;
  if (CONFUSABLE_REGEX.test(domain)) return true;

  return false;
}

function extractDomain(url) {
  try {
    return new URL(url).hostname;
  } catch {
    return null;
  }
}
