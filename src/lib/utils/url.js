/**
 * Extracts domain name from a url
 *
 * @param url
 * @returns {string | string}
 */
export const extractDomainName = url => {
  const domain = url
    .replace("http://www.", "")
    .replace("https://www.", "")
    .replace("http://", "")
    .replace("https://", "")
    .split(/[/?#]/)[0];

  return domain || "";
};
