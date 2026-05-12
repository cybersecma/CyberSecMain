---
title: "Am I Infected? Navigating the Shai-Hulud 2.0 Blast Radius"
publishedAt: "2025-12-02"
author: "Cybersec.ma Research Team"
authorRole: "Abdessamad El Amrani, Adnane T, Karim Boudra"
excerpt: "Our analysis of the Shai-Hulud 2.0 NPM worm, including our lab replication of the kill chain and public indicators gathered from open-source research."
coverImage: "/images/shai-hulud-cover.jpg"
tags: ["Malware Analysis", "Supply Chain", "OSINT", "Threat Intelligence"]
readingTime: 5
pinned: true
---

JS and NPM are used by large scale of developers world wide, and especially in Morocco. The software supply chain is no longer just a vector for opportunistic theft; it is a domain of active, automated warfare. Late November 2025 we noticed the arrival of **Shai-Hulud 2.0** (or "Sha1-Hulud: The Second Coming"), a sophisticated NPM worm that compromised foundational packages used by major platforms like Zapier, Postman, and PostHog.

At **Cybersec.ma**, we didn't just read the reports, made a stream, and talk about it. We also analyzed the whole kill chain in our labs, reproduced it, and particularly focused on executing an OSINT investigation to understand the public impact on GitHub users. We published related public indicators on our community intelligence page: <span style="color: blue;"> https://cybersec.ma/#/public-intelligence</span>.

## The "Shai-Hulud" Mechanism: Why It’s Different

Unlike previous attacks, in our opinion, Shai Hulud 2.0 has a lot of fascinating ideas :
+ Along the self-propagating, it keep expanding its C2 control and solidifying it 
+ The use of github repos as C2, but not just a traditional adversary repos, it makes everyvictim repo as C2
+ The obfuscation of the payload is very heavy, with lot of techniques to evade EDR/FWs/Scanning/SIEM..
+ The use of a fairly unkown runtime Bun , instead of JS, by using `preinstall` hook to execute malicious code before a package is even fully installed, creating a race condition against security scanners.
+ The exfiltration and presistance using Github 'Runner' Concept, where it adds victim machine as a runner in github, allowing it to RCE without being exposed.

Crucially, it employs an evasion technique using the **Bun** runtime. By downloading and executing its payload via `bun` instead of the standard `node` process, it bypasses many standard EDR detection rules that only monitor `nodejs` daemons.

There has been already several analysis on internet, the one by WIZ is fairly good,  in our report,  we will hint at 2 things :

+ How to reproduce and analyse in the lab
+ Sharing public indicators to help users check whether a GitHub identifier appears in known Shai-Hulud records



## Inside the Cybersec.ma Research

To fully grasp the threat, our team replicated the attack chain in a strictly isolated environment. Using simulated network services (Verdaccio for NPM, and a mock GitHub API), we reconstructed the full kill chain:

1.  **The Infection:** The malware executes immediately upon `npm install`.
2.  **The Heist:** It aggressively scans the filesystem for `.npmrc` tokens, AWS keys, and `id_rsa` files.
3.  **The Exfiltration:** The malware creates public GitHub repositories on the victim's own account (e.g., `github.com/victim-user/random-name`) and pushes the stolen secrets there.

We also in our labs tried to deobfuscate part of the code , which was very heavy to  reverse due to the huge number of techniques/encryption/padding used,
Dev.run has a dynamic analysis ready to check, but in our lab we did that with the full attack chain and victim, for better illustration.

Snapshot from our reproduction/analysis:

![](/images/repos.jpeg)

Our lab results confirmed the presence of a **"Dead Man's Switch"** code designed to wipe the victim's `$HOME` directory if the malware fails to connect to its C2 servers.

## Our OSINT & our Intelligence Attack Checker

The malware relies on creating public repositories tagged with the description *"Sha1-Hulud: The Second Coming"*. While this makes the data publicly accessible, the sheer volume of infection—thousands of repositories, most of which are already deleted—makes it hard for individual developers to know if their GitHub identifiers appeared in public traces of the campaign.

We noticed a gap: **No major security vendor has provided a simple, searchable database for the community.**

Using OSINT data gathered from our analysis, we have managed to identify and recover a large part of the impacted GitHub accounts since Patient 0. We are making this hash dataset available to the public as a community resource.

Our research has identified and recovered over 15k repos, and related users 


![](/images/repos.jpeg)

<br><br>



We recovered info to almost to patient 0, which maps with the timing of very first reporting of the attack 

![](/images/patient0.jpeg)

<br><br>

Sample of the check for a compromised user

![](/images/shaicheck.jpeg)

<br><br>


## Our intelligence checker


Finally, we are glad to provide a public checker that lets users see whether a GitHub identifier appears in the records we collected.

Sample of few compromised users

![](/images/fewusersexample.png)

<br><br>

Following is our tool. You can also find it on the public intelligence page: https://cybersec.ma/#/public-intelligence

shaihulud:tool


*   **Status: CLEAN** - Your username does not appear in the known infection list, but care is still required. Due to the nature of cross-repo exfiltration, a 100% confirmation is never possible.
*   **Status: POTENTIALLY COMPROMISED** - Your account was linked to a Shai-Hulud repository. You should revoke all secrets immediately.

## More details

If you want more details about this attack, we discussed it in Moroccan Darija during this stream:

youtube:ZwcZbqi9ZE8

<b><b>
You can also find more streams here:<span style="color: blue;">  https://cybersec.ma/#/streams </span>

<b><b>
Stay safe, and keep your `npm ignore-scripts` flag on 😊
