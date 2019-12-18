/**
 * Types of cookies as specified by GDPR
 *
 * @type {*[]}
 */
export const CookieTypes = [
  "Unclassified cookies",
  "Preference cookies",
  "Statistics cookies",
  "Marketing cookies",
  "Essential cookies"
];

/**
 * Description of cookie types as shown in the sidebar
 *
 * @type {{"Statistics cookies": {description: string}, "Marketing cookies": {description: string}, "Unclassified cookies": {description: string}, "Preference cookies": {description: string}, "Essential cookies": {description: string}}}
 */
export const CookieTypeDetails = {
  "Unclassified cookies": {
    description:
      "Unclassified cookies are cookies that we are in the process of classifying, together with the providers of individual cookies."
  },
  "Preference cookies": {
    description:
      "Preference cookies enable a website to remember information that changes the way the website behaves or looks, like your preferred language or the region that you are in."
  },
  "Statistics cookies": {
    description:
      "Statistic cookies help website owners to understand how visitors interact with websites by collecting and reporting information anonymously."
  },
  "Marketing cookies": {
    description:
      "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers."
  },
  "Essential cookies": {
    description:
      "Necessary cookies help make a website usable by enabling basic functions like page navigation and access to secure areas of the website. The website cannot function properly without these cookies."
  }
};
