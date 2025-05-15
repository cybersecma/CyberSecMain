---
title: "🧠 Introduction to Cross-Site Scripting (XSS)"
slug: "introduction-to-xss"
excerpt: "Learn about Cross-Site Scripting (XSS), one of the most common web vulnerabilities listed in the OWASP Top 10, and how to protect against it."
author: "Moroccan Cyber Security Community"
publishedAt: "2024-03-14T10:00:00Z"
coverImage: "https://images.pexels.com/photos/5380664/pexels-photo-5380664.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
categories: ["Web Security", "Vulnerabilities"]
tags: ["XSS", "Security", "OWASP", "JavaScript"]
readingTime: 8
---

# 🧠 Introduction to Cross-Site Scripting (XSS)

**Cross-Site Scripting (XSS)** is one of the most common web vulnerabilities and is listed in the [OWASP Top 10](https://owasp.org/www-project-top-ten/). It allows attackers to inject malicious scripts into content viewed by other users, potentially leading to data theft, session hijacking, or defacement.

## 📖 Types of XSS Attacks

1. **Stored XSS**: The script is permanently stored on the target server (e.g., in a database).
2. **Reflected XSS**: The script comes from the current HTTP request (e.g., in a query parameter).
3. **DOM-based XSS**: The vulnerability exists in client-side JavaScript that processes user input insecurely.

## 💻 Example of a Vulnerable Code

Here's a simple example of insecure code in an Express.js + EJS application:

```javascript
app.get('/profile', (req, res) => {
  const username = req.query.username;
  res.render('profile', { username: username });
});
```

If profile.ejs uses the username like this:

```ejs
<h1>Welcome <%= username %></h1>
```

An attacker could inject malicious JavaScript by accessing:
`/profile?username=<script>alert('XSS')</script>`

## 🛡️ Prevention Techniques

1. **Input Validation**: Validate and sanitize all user input
2. **Output Encoding**: Encode output to prevent script execution
3. **Content Security Policy (CSP)**: Restrict which scripts can execute
4. **HttpOnly Cookies**: Prevent JavaScript access to sensitive cookies
5. **XSS Protection Headers**: Use security headers like X-XSS-Protection

## 🔍 Real-World Impact

XSS vulnerabilities can lead to:
- Theft of user credentials
- Session hijacking
- Defacement of websites
- Distribution of malware
- Data breaches

## 🚀 Best Practices

1. Use modern frameworks that handle XSS protection
2. Implement proper input validation
3. Use security headers
4. Regular security audits
5. Keep dependencies updated 