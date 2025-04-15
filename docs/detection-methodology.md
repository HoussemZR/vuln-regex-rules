# 🧠 Detection Methodology

This document outlines the approach and philosophy behind the regex-based detection rules found in this repository. These patterns are designed to help developers, security engineers, and automation tools identify common web vulnerabilities in JavaScript and TypeScript codebases.

---

## 🎯 Goal

The primary objective is to provide **lightweight, language-aware regular expressions** that help detect **likely vulnerable code patterns** during static analysis, code review, or automated security scanning.

---

## 🧩 Why Use Regex?

Regex-based detection offers several advantages:

- ✅ **Language-agnostic** and tool-agnostic
- ✅ Easy to integrate with CLI tools and CI/CD pipelines
- ✅ Quick feedback with no compilation or runtime required
- ✅ Transparent — developers can read and understand the detection logic

However, it comes with limitations (covered below).

---

## 🕳 Vulnerability Types Covered

Each `.regex` file focuses on a specific category, such as:

- **Injection** (e.g., SQL, command, template)
- **Cross-Site Scripting (XSS)**
- **Authentication flaws**
- **Insecure Direct Object Reference (IDOR)**
- **Remote Code Execution (RCE)**
- **Cross-Site Request Forgery (CSRF)**
- **Server-Side Request Forgery (SSRF)**
- **Open Redirects**
- **Security Misconfigurations**

---

## ⚙️ How Patterns Are Written

- Each `.regex` file contains **one rule per line**
- Lines starting with `#` are treated as **comments**
- Patterns are designed to balance **false positives and true positives**
- Rules aim to be simple and readable before being clever or exhaustive

---

## 📌 Example Pattern (XSS)

```regex
document\.write\s*\(
# Matches use of document.write(), which can be a vector for XSS
```

This rule will match:

```javascript
document.write(userInput);
```

Which may be safe or unsafe depending on context — so the match is a **warning flag**, not a confirmed vulnerability.

---

## ⚠️ Limitations

Regex is a **static, context-free** tool. This means:

- ❌ It can't follow logic or data flow
- ❌ It can't track tainted input from source to sink
- ❌ It may produce **false positives** (e.g., benign usage)
- ❌ It may produce **false negatives** if a pattern is too specific

That said, regex is fast and useful when:
- Used as a **pre-filter** or signal in CI/CD
- Combined with manual review
- Paired with example test cases to validate findings

---

## 🧪 Testing Rules

Each pattern should be tested against realistic sample code in the [`examples/`](../examples/) folder. Contributions that include both a new regex and a corresponding test case are highly encouraged.

---

## 📬 Contributions Welcome!

To contribute:

1. Fork the repo
2. Add or refine a `.regex` file
3. Include relevant code in `examples/`
4. Document any non-obvious patterns with a `#` comment
5. Submit a pull request 🙌

---

## 📚 Further Reading

- [OWASP Top 10](https://owasp.org/www-project-top-ten/)
- [Common Regex Pitfalls in Static Analysis](https://docs.rs/regex/latest/regex/)
- [Secure Coding Guidelines for JavaScript and TypeScript](https://cheatsheetseries.owasp.org/)

