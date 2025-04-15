# 📜 TypeScript Vulnerability Detection Rules

This folder contains regular expressions for identifying common security vulnerabilities in **TypeScript** codebases.

Since TypeScript introduces static typing and other syntactic features beyond JavaScript, some detection rules here are uniquely suited to the TS ecosystem.

---

## 📂 File Structure

| File                      | Description                                      |
|---------------------------|--------------------------------------------------|
| `injection.regex`         | Detects SQL, command, and code injection risks   |
| `xss.regex`               | Detects cross-site scripting vulnerabilities     |
| `authentication.regex`    | Detects broken or insecure authentication logic  |
| `idor.regex`              | Detects insecure direct object references        |

---

## 🧪 How to Use

These regex rules can be used in combination with:

- `grep`, `egrep`, or `ripgrep`
- Custom Node.js, Python, or Deno scanners
- GitHub Actions or CI pipelines
- Static code analyzers (like Semgrep, with adapters)

### 🔍 Example Usage

To search for XSS vulnerabilities in a `.ts` file:

```bash
grep -Enrf rules/typescript/xss.regex examples/vulnerable-code.ts
```

Or search through your whole project:

```bash
grep -Ernf rules/typescript/ .
```

---

## ⚠️ TypeScript-Specific Considerations

- Use regex patterns that account for **type annotations**, **decorators**, and **async/await** patterns.
- Consider `any`, `unknown`, or `Function` types as red flags in authentication or dynamic execution contexts.
- Watch for misuse of `eval`, dynamic imports, or unsafe template literals.

---

## 📌 Regex Format Guidelines

Each `.regex` file should:
- Have **one pattern per line**
- Include inline **comments** starting with `#` for clarity
- Be optimized for TypeScript syntax, not just plain JS

Example:

```
@Injectable\(\)\s*export\s+class\s+\w+
# Matches Angular-style injectable classes — useful for tracking DI issues
```

---

## 💡 Contributing

1. Add patterns based on real-world vulnerable TypeScript code
2. Include test cases in `examples/`
3. Document any complex patterns with inline comments
4. Submit a PR with your changes

---

For general methodology and philosophy behind these rules, see [../docs/detection-methodology.md](../../docs/detection-methodology.md).
