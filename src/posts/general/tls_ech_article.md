---
title: "🔐 TLS/SSL Advancements: The Privacy vs. Security Dilemma"
slug: "tls-ssl-privacy-security-dilemma"
excerpt: "Exploring TLS 1.3, ESNI, ECH, and DoH - how modern encryption improvements strengthen privacy while creating new challenges for network security monitoring."
author: "Abdessamad EL AMRANI"
authorAvatar: "/images/authors/abdo.jpeg"
authorRole: "Senior Cloud Security Engineer"
authorBio: "CyberSec Tiger Team @ Fortinet (CSE) [ cybersec / cloud / AI / ML], CCIE #40273, JNCIE #2360, CKA, CKS (K8S Sec) , NSE4/5/7, AWS Sec Architect | humbled & proud of our 10k+ top-notch community"
publishedAt: "2024-02-26T10:00:00Z"
coverImage: "/videos/cryptography-compressed.mp4"
thumbnail: "/videos/cryptography-compressed.mp4"
categories: ["Network Security", "Encryption"]
tags: ["TLS", "SSL", "ECH", "ESNI", "DoH", "Privacy", "Network Security", "Encryption"]
readingTime: 12
pinned: true

---

# TLS/SSL Advancements: The Privacy vs. Security Dilemma

In today's cybersecurity landscape, we've seen big improvements in web encryption. From the broad adoption of TLS 1.3 to the evolution from Encrypted Server Name Indication (ESNI) to Encrypted Client Hello (ECH), plus the rollout of HTTP/3, these advancements have greatly strengthened online data protection. At the same time, they introduce challenges for network security monitoring and web filtering.

![TLS and ECH Overview](/images/TLS-and-ECH.png)

> **Note**: This document highlights the changes that most impact network security and filtering---covering SNI, CN, key-shares, ESNI/ECH DNS records, DoH, and how to decrypt TLS.

---

## TLS 1.2 vs. TLS 1.3 and Web Filtering

### Web Filtering in TLS 1.2

#### TLS 1.2 Exchange and Interesting Fields

TLS 1.2 (Transport Layer Security) ensures secure communication but keeps some fields in cleartext:

- **SNI**: Server Name Indication
- **CN**: Common Name in the server certificate

These fields can be scanned by network devices for filtering decisions.

![TLS 1.2 with DH exchange](/images/TLS-11.2-with-DH.png)

Key points:

- Two round trips happen before encryption is fully established.
- **SNI** and **CN** remain clear, letting traditional filters work.

#### A Look Inside TLS 1.2 Packet Capture

Below is an example of a typical TLS 1.2 exchange where the **SNI** is visible (in cleartext):

![TLS 1.2 SNI in cleartext](/images/TLS1.2-SNI-cleartext-wireshark.png)

---

### TLS 1.3: A Major Step Forward

#### TLS 1.3 Exchange and Key Changes

TLS 1.3 improves upon TLS 1.2 by encrypting data sooner and reducing round trips:

![TLS 1.3 Exchange](/images/TLS1.3-exchange.png)

- The client sends a keyshare immediately (ClientHello).
- The server responds with its keyshare, allowing earlier encryption.
- **CN** generally gets protected faster in TLS 1.3.
- **SNI** is still in cleartext without ESNI/ECH.

---

## ESNI, ECH, and DoH: Locking Down the Remaining Gaps

### ESNI (Encrypted SNI)

ESNI was an initial method to hide the SNI in the TLS 1.3 handshake. A special DNS record (`_esni`) let the client fetch a public key to encrypt the SNI before sending its ClientHello. However, ESNI didn't cover other fields (like ALPN), and compatibility issues arose. It's largely been replaced by ECH.

![TLS 1.3 with ESNI Extension](/images/TLS1.3-with-ESNI.png)

### DoH (DNS over HTTPS)

Even if the SNI is encrypted, the domain might still be seen in DNS queries. DNS over HTTPS (DoH) fixes this by encrypting DNS requests---often enabled in modern browsers---making on-path domain snooping harder.

### Encrypted Client Hello (ECH)

ECH encrypts the entire ClientHello (including SNI, ALPN, and other fields), so it's a more complete privacy solution than ESNI. It uses a new HTTPS record type (65) to get the server's public key for encryption and typically works together with DoH.

![ECH Exchange](/images/ECH-exchange.png)

Key points:

- Two ClientHello messages ("outer" is cleartext, "inner" is encrypted).
- The "outer SNI" can be a CDN or generic hostname, while the real SNI is in the "inner" message.
- Most next-gen firewalls can't inspect the true SNI without decryption.

---

## QUIC and HTTP/3

HTTP/3 uses QUIC, which also aims to encrypt most data. ECH can be applied to QUIC/HTTP/3 just like TLS 1.3, hiding the real SNI and other details from any on-path traffic analysis.

---

## Raising Awareness and Looking Ahead

- **Machine Learning**: Some solutions use ML-based traffic identification without relying on the SNI.
- **Man-in-the-Middle (MitM) Decryption**: Organizations may consider deeper TLS decryption for better visibility, but it's more intrusive.
- **Ongoing Changes**: The ECH specification is still evolving, meaning new capabilities and techniques for defense may emerge swiftly.

Balancing user privacy with crucial security monitoring remains a key challenge.

---

## Annexe: Useful Info and Tools

### Pcaps / Keys Used in This Document

Find the pcaps and TLS keys showcased here: https://github.com/abdessamad-elamrani/New-TLS-and-Web-security-advancements

![PCAPs GitHub Repository](/images/pcaps-github.png)

### How to Decrypt TLS for Analysis

**1. Obtain Session Keys:**
```bash
export SSLKEYLOGFILE=/path/to/sslkeys.txt
```

**2. Configure Wireshark:**
- Go to Preferences → Protocols → TLS
- Set (Pre)-Master-Secret log filename
- Point to your key log file

**3. Capture and Analyze:**
- Perform packet capture with key logging enabled
- Load the session keys in Wireshark
- Traffic will be decrypted automatically

**Note**: This approach works for both TLS 1.2 and TLS 1.3, though certain limitations may affect early data or other advanced features.
