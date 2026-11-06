# Website setup and maintenance guide

## Recommended setup

This website is a lightweight static site (HTML, CSS, and JavaScript). For a personal academic profile, a good low-maintenance option is **GitHub Pages** for hosting, a custom domain registered with a domain registrar, and **Formspree** for contact-form submissions.

- Hosting: GitHub Pages. It supports publishing a site from a repository and custom domains; public repositories can use GitHub Free.
- Domain: register a short name such as `pradyumnapradhan.com` or another available variant. Availability and renewal price must be checked with the registrar before purchase.
- Contact form: the site currently opens the visitor's email application as a fallback. To receive submissions through a web form, create a Formspree form and replace the placeholder endpoint in `index.html`.

## Step-by-step deployment

### 1. Choose and register a domain

1. Search for a memorable domain, ideally based on your full name (for example, `pradyumnapradhan.com`). This is only a suggestion; confirm availability first.
2. Register it with a domain registrar. Enable auto-renewal and two-factor authentication on the registrar account.
3. Keep access to the registrar account and DNS settings secure.

### 2. Create a GitHub repository

1. Sign in to GitHub or create an account.
2. Create a **public** repository named `YOUR-GITHUB-USERNAME.github.io`.
3. Upload the website contents: `index.html`, `styles.css`, `script.js`, `robots.txt`, `assets/`, and this guide.
4. Commit the files to the `main` branch.

### 3. Enable GitHub Pages

1. Open the repository's **Settings → Pages**.
2. Under the build and deployment settings, select **Deploy from a branch**.
3. Choose the `main` branch and `/ (root)` folder, then save.
4. GitHub will publish the site at `https://YOUR-GITHUB-USERNAME.github.io/`.

### 4. Connect the custom domain

1. In repository **Settings → Pages**, enter your custom domain and save it.
2. At your registrar, configure DNS records. For an apex domain (for example, `pradyumnapradhan.com`), GitHub documents these A records:
   - `185.199.108.153`
   - `185.199.109.153`
   - `185.199.110.153`
   - `185.199.111.153`
3. For `www`, add a CNAME record pointing to `YOUR-GITHUB-USERNAME.github.io`.
4. Return to GitHub Pages and enable **Enforce HTTPS** when it becomes available. DNS changes can take up to 24 hours to propagate.
5. Once the domain is final, add the full site URL to the JSON-LD `url` field in `index.html`, and add a canonical URL and sitemap if desired.

Use GitHub's current guide for the exact DNS configuration: https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

### 5. Activate the contact form

1. Create an account at https://formspree.io/ and create a new form.
2. Copy the endpoint Formspree provides (it looks like `https://formspree.io/f/xxxxxxxx`).
3. In `index.html`, replace `https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID` in the contact form's `action` attribute with your actual endpoint.
4. Submit a test message from the deployed site and verify that the notification reaches the intended inbox.
5. Review Formspree's current plan limits, data-retention settings, and privacy terms before publishing the form.

Until an endpoint is configured, the form uses a `mailto:` fallback and opens the visitor's configured email application. This is not a server-side form submission.

## Content to verify before launch

- Confirm that all publication titles, author order, venues, years, and acceptance statuses are current. The publication entries here were transcribed from the supplied CV; the live Google Scholar page is linked for the latest indexed record.
- Confirm the current position title, dates, advisor name, lab affiliation, and official email address.
- Add personal LinkedIn and ResearchGate URLs only if you want them displayed. They were not included in the supplied CV, so no profile links have been guessed.
- The CV PDF is included at `assets/Pradyumna_Pradhan_CV.pdf`. Replace it when the CV changes, keeping the filename or updating the link in `index.html`.
- The current headshot is included at `assets/pradyumna-pradhan.jpg`. Replace it with a new, high-resolution portrait whenever appropriate.
- Review the public visibility of personal contact information before launch. The site currently displays the institutional email and a personal email link, but omits the mobile number.

## Basic SEO checklist

1. Keep the page title and meta description accurate and specific; both are already included in `index.html`.
2. Use descriptive section headings and image alt text; these are already included.
3. Keep the Google Scholar profile and institutional lab links current.
4. After choosing a domain, add a canonical URL, update the JSON-LD `url` field, and create a sitemap containing the final URL.
5. Register the site with Google Search Console and submit the sitemap after the site is public.
6. Use descriptive file names for papers, CVs, and images; compress large images while preserving portrait quality.
7. Add new publications promptly and make the publication date, venue, and status explicit.
8. Avoid keyword stuffing. Use relevant phrases naturally, including:
   - model-based ultrasound imaging
   - quantitative ultrasound imaging
   - deep unfolding networks
   - physics-informed deep learning
   - compressed sensing
   - sparse signal recovery
   - inverse problems
   - signal processing
   - neural network compression
   - coreset generation and data reduction

## Ongoing maintenance

- Review the publication list after each acceptance or publication and update Google Scholar links if the profile changes.
- Update the CV PDF and the education/position dates whenever there is a significant change.
- Add a short research update when a project, preprint, conference presentation, or collaboration becomes public.
- Check the contact form after deployment and periodically thereafter.
- Test the site on a phone and desktop after larger edits; keep the navigation, contrast, and text readable.
- Keep a copy of the source files and the latest CV outside the hosting account.
