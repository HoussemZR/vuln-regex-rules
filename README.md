# 🔍 Web Vulnerability Regex Rules

A collection of regular expressions to detect common web security vulnerabilities in **JavaScript** and **TypeScript** codebases.

## 📁 Directory Structure

```
.
├── rules/
│   ├── javascript/
│   └── typescript/
├── examples/
└── docs/
```

## 🧠 Supported Vulnerabilities

- 🔐 Authentication Issues
- 💉 Code Injection
- 💻 Remote Code Execution (RCE)
- 🐟 Cross-Site Scripting (XSS)
- 🔄 Cross-Site Request Forgery (CSRF)
- 🌐 Open Redirect
- 🧱 Security Misconfiguration
- 🕵️‍♂️ Insecure Direct Object References (IDOR)
- 🌊 Server-Side Request Forgery (SSRF)

## 🧪 Usage

You can use these regex rules with tools like:
- Custom CLI scanners (Node.js, Python, etc.)
- GitHub Actions
- Static analysis engines (e.g., Semgrep custom rules)

## 🗂 Rules

- [JavaScript Rules](./rules/javascript/README.md)
- [TypeScript Rules](./rules/typescript/README.md)

## 🧬 Example Usage (CLI)

```bash
grep -Erf rules/javascript/injection.regex examples/vulnerable-code.js
```

## 🧠 How Detection Works

See [docs/detection-methodology.md](./docs/detection-methodology.md)

---

## 🤝 Contributing

1. Fork the repo
2. Add a `.regex` file with your pattern
3. Provide a test case in `examples/`
4. Submit a pull request 🚀

