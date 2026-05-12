import { Post } from '../types';

const mockPosts: Post[] = [
  {
    id: '2',
    title: 'Am I Infected? Navigating the Shai-Hulud 2.0 Blast Radius',
    slug: 'shai-hulud-analysis',
    excerpt: 'Our analysis of the Shai-Hulud 2.0 NPM worm, including our lab replication of the kill chain and public indicators gathered from open-source research.',
    author: 'Cybersec.ma Research Team',
    publishedAt: '2025-12-02T10:00:00Z',
    coverImage: '/images/shai-hulud-cover.jpg',
    categories: ['Malware Analysis', 'Threat Intelligence'],
    tags: ['Malware Analysis', 'Supply Chain', 'OSINT', 'Threat Intelligence'],
    readingTime: 5,
    content: `---
title: "Am I Infected? Navigating the Shai-Hulud 2.0 Blast Radius"
publishedAt: "2025-12-02"
author: "Cybersec.ma Research Team"
authorRole: "Research Team"
excerpt: "Our analysis of the Shai-Hulud 2.0 NPM worm, including our lab replication of the kill chain and public indicators gathered from open-source research."
coverImage: "/images/shai-hulud-cover.jpg"
tags: ["Malware Analysis", "Supply Chain", "OSINT", "Threat Intelligence"]
readingTime: 5
---

The software supply chain is no longer just a vector for opportunistic theft; it is a domain of active, automated warfare. Late November 2025 marked the arrival of **Shai-Hulud 2.0** (or "Sha1-Hulud: The Second Coming"), a sophisticated NPM worm that has already compromised foundational packages used by major platforms like Zapier, Postman, and PostHog.

At **Cybersec.ma**, we didn't just read the reports, make a stream, and talk about it. We also analyzed the whole kill chain in our labs, reproduced it, and executed an OSINT investigation to understand the public impact on GitHub users. We published related public indicators on our community intelligence page.

## The "Shai-Hulud" Mechanism: Why It’s Different

Unlike previous attacks that relied on manual updates, Shai-Hulud 2.0 is a self-propagating worm. It utilizes a \`preinstall\` hook to execute malicious code before a package is even fully installed, creating a race condition against security scanners.

Crucially, it employs an evasion technique using the **Bun** runtime. By downloading and executing its payload via \`bun\` instead of the standard \`node\` process, it bypasses many standard EDR detection rules that only monitor \`nodejs\` daemons.

## Inside the Cybersec.ma Lab

To fully grasp the threat, our team replicated the attack chain in a strictly isolated environment. Using simulated network services (Verdaccio for NPM, and a mock GitHub API), we reconstructed the full kill chain:

1.  **The Infection:** The malware executes immediately upon \`npm install\`.
2.  **The Heist:** It aggressively scans the filesystem for \`.npmrc\` tokens, AWS keys, and \`id_rsa\` files.
3.  **The Exfiltration:** The malware creates public GitHub repositories on the victim's own account (e.g., \`github.com/victim-user/random-name\`) and pushes the stolen secrets there.

Our lab results confirmed the presence of a **"Dead Man's Switch"** code designed to wipe the victim's \`$HOME\` directory if the malware fails to connect to its C2 servers.

## The Shai-Hulud Victim Check

The malware relies on creating public repositories tagged with the description *"Sha1-Hulud: The Second Coming"*. While this makes the data publicly accessible, the sheer volume of infection—thousands of repositories, most of which are already deleted—makes it hard for individual developers to know if their GitHub identifiers appeared in public traces of the campaign.

We noticed a gap: **No major security vendor has provided a simple, searchable database for the community.**

Using OSINT data gathered from our analysis, we have managed to identify and recover a large part of the impacted GitHub accounts since Patient 0. We are making this hash dataset available to the public as a community resource.

shaihulud:tool

### How it works

*   **Status: CLEAN** - Your username does not appear in the known infection list, but care is still required. Due to the nature of cross-repo exfiltration, a 100% confirmation is never possible.
*   **Status: POTENTIALLY COMPROMISED** - Your account was linked to a Shai-Hulud repository. You should revoke all secrets immediately.

## For the Community

As a non-profit community, our goal is digital sovereignty and shared defense. This tool is our contribution to the global cleanup effort.

Stay safe, and keep your \`npm ignore-scripts\` flag on 😊`
  },
  {
    id: '1',
    title: '🧠 Introduction to Cross-Site Scripting (XSS)',
    slug: 'introduction-to-xss',
    excerpt: 'Learn about Cross-Site Scripting (XSS), one of the most common web vulnerabilities listed in the OWASP Top 10, and how to protect against it.',
    author: 'Taylor Frost',
    publishedAt: '2025-05-14T10:00:00Z',
    coverImage: 'https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    categories: ['Web Security', 'Vulnerabilities'],
    tags: ['XSS', 'Security', 'OWASP', 'JavaScript'],
    readingTime: 8,
    content: `# 🧠 Introduction to Cross-Site Scripting (XSS)

**Cross-Site Scripting (XSS)** is one of the most common web vulnerabilities and is listed in the [OWASP Top 10](https://owasp.org/www-project-top-ten/). It allows attackers to inject malicious scripts into content viewed by other users, potentially leading to data theft, session hijacking, or defacement.

## 📖 Types of XSS Attacks

1. **Stored XSS**: The script is permanently stored on the target server (e.g., in a database).
2. **Reflected XSS**: The script comes from the current HTTP request (e.g., in a query parameter).
3. **DOM-based XSS**: The vulnerability exists in client-side JavaScript that processes user input insecurely.

## 💻 Example of a Vulnerable Code

Here's a simple example of insecure code in an Express.js + EJS application:

\`\`\`javascript
app.get('/profile', (req, res) => {
  const username = req.query.username;
  res.render('profile', { username: username });
});
\`\`\`

If profile.ejs uses the username like this:

\`\`\`ejs
<h1>Welcome <%= username %></h1>
\`\`\`

Then visiting /profile?username=<script>alert('XSS')</script> will trigger an alert box in the browser , a basic reflected XSS attack.

## ✅ How to Fix It

To prevent XSS in a Node.js/Express app:

1. **Escape User Input (Server-Side)**
Use a templating engine that auto-escapes (e.g., EJS, Pug) and never use raw HTML injection.

2. **Sanitize Input (If Rendering HTML)**
If you must allow HTML (e.g., in a Markdown blog), sanitize it:

\`\`\`bash
npm install dompurify jsdom
\`\`\`

\`\`\`javascript
const DOMPurify = require('dompurify');
const { JSDOM } = require('jsdom');
const window = new JSDOM('').window;
const purify = DOMPurify(window);

const cleanHTML = purify.sanitize(userInput);
\`\`\`

3. **Set Secure HTTP Headers**
Use the helmet middleware in Express:

\`\`\`bash
npm install helmet
\`\`\`

\`\`\`javascript
const helmet = require('helmet');
app.use(helmet());
\`\`\`

## 🔒 Bonus: Use Content Security Policy (CSP)

CSP prevents most XSS attacks by telling the browser what scripts are allowed:

\`\`\`http
Content-Security-Policy: default-src 'self';
\`\`\`

This can also be set using Helmet:

\`\`\`javascript
app.use(
  helmet.contentSecurityPolicy({
    directives: {
      defaultSrc: ["'self'"],
      scriptSrc: ["'self'"],
    },
  })
);
\`\`\`

## 📚 Final Thoughts

XSS is dangerous but preventable. Always sanitize input, escape output, and configure your server securely. Don't forget to test using tools like:

- XSS Hunter
- Burp Suite

🖋️ Written by: Taylor Frost
📅 Published: May 14, 2025`
  }
];

export default mockPosts;
