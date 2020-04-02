# CHECKLIST

## Priorities

![High][high] means that the item **can't be omitted** by any reason. You may cause a dysfunction in your page or have accessibility or SEO issues. The testing priority needs to be on these elements first.

![Medium][medium] means that the item is **highly recommended** and can eventually be omitted in some really particular cases. Some elements, if omitted, can have bad repercussions in terms of performance or SEO.

![Low][low] means that the item is **recommended** but can be omitted in some particular situations.

## Content

-   [CHECKLIST](#checklist)
    -   [Project](#project)
    -   [Head](#head)
    -   [HTML](#html)
    -   [Styles](#styles)
    -   [Scripts](#scripts)
    -   [Fonts](#fonts)
    -   [Images](#images)
    -   [Server](#server)
    -   [Security](#security)
    -   [Performance](#performance)
    -   [Accessibility](#accessibility)
    -   [SEO](#seo)
    -   [Test](#test)
    -   [Others](#others)

## Project

[x] **Git repository:** ![High][high] Repository is created with all actions and settings

[x] **README.md:** ![High][high] Project contains README.md file with project descriptions and specifications

[ ] **Sentry.io:** ![High][high] Project is created in sentry to get future errors

-   [sentry.io](https://sentry.io/organizations/zdenekd/projects/)

[x] **Snyk.io** ![Medium][medium] Project is added to Snyk to catch some vulnerabilities

-   [snyk.io](https://app.snyk.io/org/zdenekd)

[x] **Freshping** ![Medium][medium] Project is added to Freshping to catch some network problems

[x] **Clean up comments:** ![Low][low] Unnecessary code needs to be removed before sending the page to production.

---

## Head

[x] **Charset:** ![High][high] The charset (UTF-8) is declared correctly.

```html
<meta charset="utf-8" />
```

[x] **Viewport:** ![High][high] The viewport is declared correctly.

```html
<meta name="viewport" content="width=device-width, initial-scale=1.0, shrink-to-fit=no" />
```

[x] **Title:** ![High][high] A title is used on all pages (SEO: Google calculates the pixel width of the characters used in the title, and it cuts off between 472 and 482 pixels. The average character limit would be around 55-characters).

```html
<title>Title</title>
```

[ ] **Description:** ![High][high] A meta description is provided, it is unique and doesn't possess more than 150 characters.

```html
<meta name="description" content="Description content" />
```

[x] **Favicons:** ![High][high] Each favicon has been created and displays correctly. If you have only a `favicon.ico`, put it at the root of your site. Normally you won't need to use any markup. However, it's still good practice to link to it using the example below. Today, **PNG format is recommended** over `.ico` format. You can use builder task or online tool.

-   [FaviconGenerator](https://realfavicongenerator.net/)

```html
<link rel="icon" href="https://example.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="https://example.com/favicon.png" type="image/png" />
<link rel="apple-touch-icon" sizes="57x57" href="https://example.com/apple-touch-icon-57x57.png" />
<link rel="apple-touch-icon" sizes="60x60" href="https://example.com/apple-touch-icon-60x60.png" />
<link rel="apple-touch-icon" sizes="72x72" href="https://example.com/apple-touch-icon-72x72.png" />
<link rel="apple-touch-icon" sizes="76x76" href="https://example.com/apple-touch-icon-76x76.png" />
<link rel="apple-touch-icon" sizes="114x114" href="https://example.com/apple-touch-icon-114x114.png" />
<link rel="apple-touch-icon" sizes="120x120" href="https://example.com/apple-touch-icon-120x120.png" />
<link rel="apple-touch-icon" sizes="144x144" href="https://example.com/apple-touch-icon-144x144.png" />
<link rel="apple-touch-icon" sizes="152x152" href="https://example.com/apple-touch-icon-152x152.png" />
<link rel="apple-touch-icon" sizes="180x180" href="https://example.com/apple-touch-icon-180x180.png" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-36x36.png" sizes="36x36" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-48x48.png" sizes="48x48" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-72x72.png" sizes="72x72" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-96x96.png" sizes="96x96" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-144x144.png" sizes="144x144" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-192x192.png" sizes="192x192" />
<link rel="icon" type="image/png" href="https://example.com/android-chrome-256x256.png" sizes="256x256" />
<link rel="icon" type="image/png" href="https://example.com/favicon-16x16.png" sizes="16x16" />
<link rel="icon" type="image/png" href="https://example.com/favicon-32x32.png" sizes="32x32" />
<link rel="icon" type="image/png" href="https://example.com/favicon-194x194.png" sizes="194x194" />
<link rel="mask-icon" href="https://example.com/safari-pinned-tab.svg" />
```

[ ] **Canonical:** ![Medium][medium] Use `rel="canonical"` to avoid duplicate content.

```html
<link rel="canonical" href="http://example.com/2017/09/a-new-article-to-read.html" />
```

[ ] **Apple Web App Meta:** ![Low][low] Apple meta-tags are present.

```html
<meta name="apple-mobile-web-app-capable" content="yes" /> <meta name="apple-mobile-web-app-status-bar-style" content="black" />
```

[ ] **Windows Tiles:** ![Low][low] Windows tiles are present and linked.

```html
<meta name="msapplication-config" content="browserconfig.xml" />
```

Minimum required xml markup for the `browserconfig.xml` file is as follows:

```xml
<?xml version="1.0" encoding="utf-8"?>
<browserconfig>
   <msapplication>
     <tile>
        <square70x70logo src="small.png"/>
        <square150x150logo src="medium.png"/>
        <wide310x150logo src="wide.png"/>
        <square310x310logo src="large.png"/>
     </tile>
   </msapplication>
</browserconfig>
```

[ ] **Facebook Open Graph:** ![Low][low] All Facebook Open Graph (OG) are tested and no one is missing or with a false information. Images need to be at least 600 x 315 pixels, although 1200 x 630 pixels is recommended.

-   [OpenGraph](http://ogp.me/)

```html
<meta property="og:type" content="website" />
<meta property="og:url" content="https://example.com/page.html" />
<meta property="og:title" content="Content Title" />
<meta property="og:image" content="https://example.com/image.jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:description" content="Description Here" />
<meta property="og:site_name" content="Site Name" />
<meta property="og:locale" content="en_US" />
```

[ ] **Twitter Card:** ![Low][low]

-   [TwitterCards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

```html
<meta name="twitter:card" content="summary" />
<meta name="twitter:site" content="@site_account" />
<meta name="twitter:creator" content="@individual_account" />
<meta name="twitter:url" content="https://example.com/page.html" />
<meta name="twitter:title" content="Content Title" />
<meta name="twitter:description" content="Content description less than 200 characters" />
<meta name="twitter:image" content="https://example.com/image.jpg" />
```

---

## HTML

[x] **Validate HTML:** ![High][high] All pages need to be validated with validate builder task or with online tool.

-   [HTML5 Validator](https://html5.validator.nu/)
-   [Webhint](https://webhint.io)

[x] **HTML5 Semantic Elements:** ![High][high] HTML5 Semantic Elements are used appropriately (header, section, footer, main...).

[x] **Language attribute:** ![High][high] The `lang` attribute of your website is specified and related to the language of the current page.

```html
<html lang="en"></html>
```

[x] **Error pages:** ![High][high] Error 404 page and 5xx exist. Remember that the 5xx error pages need to have their CSS integrated (no external call on the current server).

[x] **Link check:** ![High][high] There are no broken links in the page, verify that you don't have any 404 error.

[x] **Noopener:** ![High][high] In case you are using external links with `target="_blank"`, your link should have a `rel="noopener noreferrer"` attribute to prevent tab nabbing.

[x] **Remove unnecessary attributes:** ![Medium][medium] Type attributes like type="text/javascript" or type="text/css" are not required anymore and should be removed.

```html
<script>
    // Javascript code
</script>
```

[ ] **Adblockers test:** ![Low][low] Your website shows your content correctly with adblockers enabled (You can provide a message encouraging people to disable their adblocker).

---

## Styles

[x] **Reset CSS:** ![High][high] A CSS reset and normalize ([reset.css](https://meyerweb.com/eric/tools/css/reset/) and [normalize.css](https://necolas.github.io/normalize.css/)) is used and up to date.

-   [reset.css](https://meyerweb.com/eric/tools/css/reset/)
-   [normalize.css](https://necolas.github.io/normalize.css/)

[ ] **Analyse stylesheets complexity:** ![Medium][medium] Analyzing your stylesheets can help you to flag issues, redundancies and duplicate CSS selectors.

-   [CSSstats](https://cssstats.com)

[ ] **CSS Print:** ![Medium][medium] A print stylesheet is provided and is correct on each page.

[ ] **Unused CSS:** ![Low][low] Remove unused CSS.

---

## Scripts

[ ] **Javascript security:** ![High][high]

-   [Guidelines for Developing Secure Applications Utilizing Javascript](https://www.owasp.org/index.php/DOM_based_XSS_Prevention_Cheat_Sheet#Guidelines_for_Developing_Secure_Applications_Utilizing_Javascript)

[ ] **Noscript tag:** ![Medium][medium] Use `<noscript>` tag in the HTML body if a script type on the page is unsupported or if scripting is currently turned off in the browser.

```html
<noscript>
    You need to enable Javascript to run this app.
</noscript>
```

[ ] **Non-blocking:** ![Medium][medium] Javascript files are loaded asynchronously using `async` or deferred using `defer` attribute.

-   [JS defer loading](https://varvy.com/pagespeed/defer-loading-javascript.html)

[x] **Optimized and updated JS libraries:** ![Medium][medium] All Javascript libraries used in your project are necessary (prefer Vanilla Javascript for simple functionalities), updated to their latest version and don't overwhelm your Javascript with unnecessary methods.

```
yarn outdated
```

[ ] **Javascript profiling:** ![Medium][medium] Check for performance problems in your Javascript files.

-   [JS execution](https://developers.google.com/web/tools/chrome-devtools/rendering-tools/js-execution)
-   [JS performance tips](http://www.monitis.com/blog/30-tips-to-improve-javascript-performance/)

[ ] **Check dependencies size limit:** ![Low][low] Ensure to use wisely external libraries, most of the time, you can use a lighter library for a same functionality.

-   [Size limit](https://evilmartians.com/chronicles/size-limit-make-the-web-lighter)

---

## Fonts

[ ] **Webfont size:** ![High][high] Webfont sizes don't exceed 300kb (all variants included).

[x] **Webfont formats:** ![High][high] You are using WOFF2 on your web project or application. It's then good to use WOFF 2.0, WOFF 1.0 as a fallback.

[x] **Use preconnect to load your fonts faster:** ![Medium][medium]

```html
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
```

[ ] **Prevent flash or invisible text:** ![Medium][medium] Avoid transparent text until the Webfont is loaded

-   [CSS font-display](https://www.sitepoint.com/css-font-display-future-font-rendering-web/)
-   [FOUT|FOIT|FOFT](https://css-tricks.com/fout-foit-foft/)

---

## Images

[ ] **Optimization:** ![High][high] All images are optimized to be rendered in the browser (png, jpg, svg etc.). Use loseless image optimization (it's a part of builder task for assets images)

-   [Imagemin](https://github.com/imagemin/imagemin)
-   [SVGO](https://github.com/svg/svgo)

[x] **Alternative text:** ![High][high] All `<img>` have an alternative text which describe the image visually.

[ ] **Lazy loading:** ![High][high] Images are lazyloaded (A noscript fallback is always provided).

-   [Lazysizes](https://github.com/aFarkas/lazysizes)
-   [Lazyload](https://github.com/verlok/lazyload)

[ ] **Responsive images:** ![Medium][medium] You use picture/srcset to provide the most appropriate image for the current viewport of the user.

-   [How to Build Responsive Images with srcset](https://www.sitepoint.com/how-to-build-responsive-images-with-srcset/)

[ ] **Images dimensions:** ![Medium][medium] Set width and height attributes on <img> if the final rendered image size is known.

[ ] **Retina:** ![Low][low] You provide layout images 2x or 3x, support retina display.

---

## Server

[x] **Website is using HTTPS:** ![High][high]

[x] **Serve files from the same protocol:** ![High][high] Avoid having your website serving files coming from source using HTTP on your website which is using HTTPS for example. If your website is using HTTPS, external files should come from the same protocol.

[ ] **Set HTTP cache headers properly:** ![High][high] Set HTTP headers to avoid expensive number of roundtrips between your browser and the server.

-   [HTTP caching](https://developers.google.com/web/fundamentals/performance/optimizing-content-efficiency/http-caching)

[x] **GZIP / Brotli compression is enabled:** ![High][high] Use a compression method such as Gzip or Brotli to reduce the size of your Javascript files. With a smaller sizes file, users will be able to download the asset faster, resulting in improved performance.

[ ] **Time To First Byte < 1.3 seconds:** ![High][high] Reduce as much as you can the time your browser waits before receiving data.

---

## Security

-   [securityheaders.io](https://securityheaders.io/)
-   [Observatory by Mozilla](https://observatory.mozilla.org/)

[ ] **Cross Site Request Forgery (CSRF):** ![High][high] You ensure that requests made to your server-side are legitimate and originate from your website / app to prevent CSRF attacks.

[ ] **Cross Site Scripting (XSS):** ![High][high] Your page or website is free from XSS possible issues.

[ ] **HTTP Strict Transport Security (HSTS):** ![Medium][medium] The HTTP header is set to 'Strict-Transport-Security'.

[ ] **Content Type Options:** ![Medium][medium] Prevents Google Chrome and Internet Explorer from trying to mime-sniff the content-type of a response away from the one being declared by the server.

[ ] **X-Frame-Options (XFO):** ![Medium][medium] Protects your visitors against clickjacking attacks.

[ ] **Content Security Policy:** ![Medium][medium] Defines how content is loaded on your site and from where it is permitted to be loaded. Can also be used to protect against clickjacking attacks.

---

## Performance

[ ] **PageSpeed:** ![High][high] All your pages were tested (not only the homepage) and have a score of at least 90/100 (you can use Audits in google chrome)).

-   [Google PageSpeed](https://developers.google.com/speed/pagespeed/insights/)
-   [Test your mobile speed with Google](https://testmysite.withgoogle.com)
-   [WebPageTest - Website Performance and Optimization Test](https://www.webpagetest.org/)
-   [GTmetrix - Website speed and performance optimization](https://gtmetrix.com/)

[ ] **Page load times < 3 seconds:** ![High][high] Reduce as much as possible your page load times to quickly deliver your content to your users.

-   [Website Page Analysis](https://tools.pingdom.com)
-   [WebPageTest](https://www.webpagetest.org/)

[ ] **Minimizing HTTP requests:** ![High][high] Always ensure that every file requested are essential for your website or application.

[x] **Minified HTML:** ![Medium][medium] Your HTML is minified.

[ ] **Cookie size:** ![Medium][medium] If you are using cookies be sure each cookie doesn't exceed 4096 bytes and your domain name doesn't have more than 20 cookies.

[x] **DNS resolution:** ![Low][low] DNS of third-party services that may be needed are resolved in advance during idle time using `dns-prefetch`.

```html
<link rel="dns-prefetch" href="https://example.com" />
```

[x] **Preconnection:** ![Low][low] DNS lookup, TCP handshake and TLS negotiation with services that will be needed soon is done in advance during idle time using `preconnect`.

```html
<link rel="preconnect" href="https://example.com" />
```

[ ] **Prefetching:** ![Low][low] Resources that will be needed soon (e.g. lazy loaded images) are requested in advance during idle time using `prefetch`.

-   [Prefetch|Preload](https://medium.com/reloading/preload-prefetch-and-priorities-in-chrome-776165961bbf)

```html
<link rel="prefetch" href="image.png" />
```

[ ] **Preloading:** ![Low][low] Resources needed in the current page (e.g. scripts placed at the end of `<body>`) in advance using `preload`.

```html
<link rel="preload" href="app.js" />
```

---

## Accessibility

[x] **H1:** ![High][high] All pages have an H1 which is not the title of the website.

[x] **Headings:** ![High][high] Headings should be used properly and in the right order (H1 to H6).

[x] **Label:** ![High][high] A label is associated with each input form element. In case a label can't be displayed, use `aria-label` instead.

[x] **Focus style:** ![High][high] If the focus is disabled, it is replaced by visible state in CSS.

[x] **Accessibility standards testing:** ![High][high] Use the WAVE tool to test if your page respects the accessibility standards.

-   [Wave](http://wave.webaim.org/)

[x] **Keyboard navigation:** ![Medium][medium] Test your website using only your keyboard in a previsible order. All interactive elements are reachable and usable.

[ ] **Progressive enhancement:** ![Medium][medium] Major functionality like main navigation and search should work without Javascript enabled.

[ ] **Color contrast:** ![Medium][medium] Color contrast should at least pass WCAG AA (AAA for mobile).

[x] **Specific HTML5 input types are used:** ![Medium][medium] This is especially important for mobile devices that show customized keypads and widgets for different types.

[ ] **Screen-reader:** ![Medium][medium] All pages were tested in a screen-reader (VoiceOver, ChromeVox, NVDA or Lynx).

---

## SEO

-   [SEO checklist](https://docs.google.com/document/d/18XiX5GMufiEnHKBezUvpGX6i7QZ04xWggGLlXEm9aXI/mobilebasic)

[ ] **Google Analytics:** ![High][high] Google Analytics is installed and correctly configured.

[ ] **sitemap.xml:** ![High][high] A sitemap.xml exists and was submitted to Google Search Console (previously Google Webmaster Tools).

[ ] **robots.txt:** ![High][high] The robots.txt is not blocking webpages.

[ ] **Structured Data:** ![High][high] Pages using structured data are tested and are without errors. Structured data helps crawlers understand the content in the current page.

-   [Introduction to Structured Data - Search - Google Developers](https://developers.google.com/search/docs/guides/intro-structured-data)
-   [RDFa - Linked Data in HTML](https://rdfa.info/)
-   [JSON-LD](https://json-ld.org/)
-   [Microdata](https://www.w3.org/TR/microdata/)
-   Test your page with the [Structured Data Testing Tool](https://developers.google.com/structured-data/testing-tool/)
-   Complete list of vocabularies that can be used as structured data. [Schema.org Full Hierarchy](http://schema.org/docs/full.html)

[ ] **Headings logic:** ![Medium][medium] Heading text helps to understand the content in the current page.

[ ] **Pagination link tags:** ![Medium][medium] Provide `rel="prev"` and `rel="next"` to indicate paginated content.

```html
<!-- Example: Pagination link tags for page 2 of a paginated list -->
<link rel="prev" href="https://example.com/?page=1" />
<link rel="next" href="https://example.com/?page=3" />
```

---

## Test

[ ] **Desktop Browsers:** ![High][high] All pages were tested on all current desktop browsers (Safari, Firefox, Chrome, Internet Explorer, EDGE...).

[ ] **Mobile Browsers:** ![High][high] All pages were tested on all current mobile browsers (Native browser, Chrome, Safari...).

[ ] **OS:** ![High][high] All pages were tested on all current OS (Windows, Android, iOS, Mac...).

## Others

-   [awwwards guideline](https://www.awwwards.com/mobile-excellence-guidelines.pdf)

[low]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAARVBMVEUAAAA0mNo0mNszmNo0l9s0mNs1mNs0mNs0mNs0mNs0mNs0mNs1mNs0mNs0mNs0mNs0mNwzl9ozmNs0mNs1mNs2mdv////c175KAAAAEXRSTlMAISEiIiIiZWZnhYaGh5+goI5OdJoAAABLSURBVHjaTYyDAcAwEEV/3dj7jxrrnYnMS5QiDyrCVcTMTTYO3LUdintA3OSHWoXeC4l/FR+eEnwtjvba2uwoMiwnNa9cv5LfCSABYYkHvkO2qcwAAAAASUVORK5CYII=
[medium]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAXVBMVEUAAADwwxDwxRDwxBDxxA/xxBDxxRDxxA7xxA/xxA/xxBDxxA/yxA/xxA/xxBDxww/xxA/xww/xxA/yxA/xxA/xxA/xwgnxww7xxA7xxA/xxBDxxBHxxRPxxxv///864uuLAAAAFnRSTlMAISEiIiIiZWVmZmdnhYWGhoeHh5+gz4Lo1gAAAFVJREFUeNpFjQMCxDAQRf8adWPd/5odFC8ZC8Srd657QViTsLBvyPGB1Ew9ks6sHujSyR9ObGXlNCiSsfhdbR+82TQJbnomRlIDiEmbRgjPn7PfOzkbIFgKMPrkKmsAAAAASUVORK5CYII=
[high]: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAMCAMAAABhq6zVAAAAUVBMVEUAAADnTDznTD3mSzznTDznTTznTT3oTDznTDvnTDznTDznTTznTDznTDzmTDznTDznTDznTDvoTDznTDznTD3mSjrnSzvnTDznTD3nTT3////+8uz5AAAAFXRSTlMAISEiIiIiImVlZmZnhYaGh5+foKBsjPqCAAAATUlEQVR42kWMAwIAIRAA52yz/z80186aWLr5uuYaz/559pQ/rtqg/TI1sxQTl4/KucsViZPRhd8XA41MyvD6fa1bsKw28bmnGu+jLwAD5NMJaWsfl5MAAAAASUVORK5CYII=
