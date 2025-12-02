---
title: "Am I Infected? Navigating the Shai-Hulud 2.0 Blast Radius"
publishedAt: "2025-12-02"
author: "Cybersec.ma Research Team"
authorRole: "Abdessamad El Amrani, Adnane T, Karim Boudra"
excerpt: "Our analysis of the Shai-Hulud 2.0 NPM worm, including our lab replication of the kill chain and the release of a public intelligence tool to check for compromised accounts."
coverImage: "/images/shai-hulud-cover.jpg"
tags: ["Malware Analysis", "Supply Chain", "OSINT", "Threat Intelligence"]
readingTime: 5
pinned: true
---

JS and NPM are used by large scale of developers world wide, and especially in Morocco. The software supply chain is no longer just a vector for opportunistic theft; it is a domain of active, automated warfare. Late November 2025 marked the arrival of **Shai-Hulud 2.0** (or "Sha1-Hulud: The Second Coming"), a sophisticated NPM worm that has already compromised foundational packages used by major platforms like Zapier, Postman, and PostHog.

At **Cybersec.ma**, we didn't just read the reports, make a stream, and talk about it. We also analyzed the whole kill chain in our labs, reproduced it, and executed an OSINT investigation to figure out the impact on compromised companies and GitHub users. We have published this data as part of our **community free intelligence services** on our website.

## The "Shai-Hulud" Mechanism: Why It’s Different

Unlike previous attacks that relied on manual updates, Shai-Hulud 2.0 is a self-propagating worm. It utilizes a `preinstall` hook to execute malicious code before a package is even fully installed, creating a race condition against security scanners.

Crucially, it employs an evasion technique using the **Bun** runtime. By downloading and executing its payload via `bun` instead of the standard `node` process, it bypasses many standard EDR detection rules that only monitor `nodejs` daemons.

There has been already several analysis on internet, in our report, but rather we will hint at 2 things :
+ How to reproduce and analyse in the lab
+ Sharing our inteligence to help users and companies identify if they were compromised, which none of the companies as far as we know provided (at least as a free service)



## Inside the Cybersec.ma Research

To fully grasp the threat, our team replicated the attack chain in a strictly isolated environment. Using simulated network services (Verdaccio for NPM, and a mock GitHub API), we reconstructed the full kill chain:

1.  **The Infection:** The malware executes immediately upon `npm install`.
2.  **The Heist:** It aggressively scans the filesystem for `.npmrc` tokens, AWS keys, and `id_rsa` files.
3.  **The Exfiltration:** The malware creates public GitHub repositories on the victim's own account (e.g., `github.com/victim-user/random-name`) and pushes the stolen secrets there.

Snapshot from our reproduction/analysis:

![](/images/repos.jpeg)

Our lab results confirmed the presence of a **"Dead Man's Switch"** code designed to wipe the victim's `$HOME` directory if the malware fails to connect to its C2 servers.

## Our OSINT & our Inteligence Attack Checker

The malware relies on creating public repositories tagged with the description *"Sha1-Hulud: The Second Coming"*. While this makes the data publicly accessible, the sheer volume of infection—thousands of repositories, most of which are already deleted—makes it impossible for individual developers or companies to know if they were compromised.

We noticed a gap: **No major security vendor has provided a simple, searchable database for the community.**

Using OSINT data gathered from our analysis, we have managed to identify and recover a large part of the impacted GitHub accounts since Patient 0. We are making this Hash DB available to the public for free.

Our research has identified and recovered over 15k repos, and related users 


![](/images/repos.jpeg)

<br><br>



We recovered info to almost to patient 0, which maps with the timing of very first reporting of the attack 

![](/images/patient0.jpeg)

<br><br>

Sample of the check for a compromised user

![](/images/shaicheck.jpeg)

<br><br>


## Our inteligence checker


Finally, we are glad to provide an access to our DB to allow you check if one of your developers was compromised by the attak,

Sample of few compromised users

![](/images/fewusersexample.png)

<br><br>

Following is our tool, you an also find it as well as other inteligence services in : https://cybersec.ma/#/public-intelligence

shaihulud:tool


*   **Status: CLEAN** - Your username does not appear in the known infection list, but care is still required. Due to the nature of cross-repo exfiltration, a 100% confirmation is never possible.
*   **Status: POTENTIALLY COMPROMISED** - Your account was linked to a Shai-Hulud repository. You should revoke all secrets immediately.

## More details

If you want more details about this attack, we discussed this already on a Stream on Sunday, its in moroccan darija :) , but if you want an english version or discussion, please reach out:

youtube:ZwcZbqi9ZE8

<b><b>
You can also find more streams here: https://cybersec.ma/#/streams

<b><b>
If you need further help, feel free to find us here : https://cybersec.ma/#/community 

<b><b>
Stay safe, and keep your `npm ignore-scripts` flag on 😊

