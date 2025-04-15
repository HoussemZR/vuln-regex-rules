# 📜 JavaScript Vulnerability Detection Rules

This folder contains regular expressions designed to detect common web security vulnerabilities in JavaScript codebases.

Each `.regex` file focuses on a specific vulnerability type and includes one or more patterns that can help identify insecure code patterns or suspicious logic during static analysis.

---

## 📂 File Structure

| File                      | Description                                      |
|---------------------------|--------------------------------------------------|
| `injection.regex`         | Detects SQL, command, and other code injections  |
| `xss.regex`               | Detects cross-site scripting vulnerabilities     |
| `authentication.regex`    | Detects weak or broken authentication logic      |
| `idor.regex`              | Detects insecure direct object references       |

---

## 🧪 How to Use

These regex patterns can be used with tools like:

- `grep`, `egrep`, `ripgrep`
- Custom Node.js or Python scanners
- GitHub Actions / CI tools
- Integration with static analysis platforms

### 🔍 Example (command-line)

```bash
grep -Enrf . rules/javascript/xss.regex
```

Or to scan a specific file:

```bash
grep -Enrf rules/javascript/injection.regex examples/vulnerable-code.js
```

---

## 📌 Regex Format Guidelines

Each regex rule should:
- Be written on a **separate line**
- Include **comments** (if needed) starting with `#`
- Focus on detecting real-world patterns that are *likely* insecure, not just generic keywords

Example:

```
document\.write\s*\(
# Matches potentially dangerous dynamic HTML injection
```

---

## 💡 Contributing

1. Add a new `.regex` file for any additional vulnerability type
2. Include **comments** to explain complex patterns
3. Test against sample code in `/examples`
4. Open a pull request

---

## 🛠 Recommended Next Step

Check out [../typescript/README.md](../typescript/README.md) for the TypeScript rules, or head over to `/examples` to test the patterns in action.

