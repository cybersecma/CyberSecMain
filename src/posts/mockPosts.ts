import { Post } from '../types';

const mockPosts: Post[] = [
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