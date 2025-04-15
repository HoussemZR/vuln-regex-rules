// ✅ document.write — basic XSS
const userInput = "<img src=x onerror=alert(1)>";
document.write(userInput);

// ✅ innerHTML assignment
const content = "<script>alert('XSS');</script>";
document.body.innerHTML = content;

// ✅ setAttribute with unsafe src
const img = document.createElement("img");
img.setAttribute("src", userInput);

// ✅ React-style dangerouslySetInnerHTML
const xssPayload = "<div onclick='stealCookies()'>Click me</div>";
const element = <div dangerouslySetInnerHTML={{ __html: xssPayload }} />;

// ✅ Template string injection
const evil = "<svg/onload=alert(1)>";
const html = `<div>${evil}</div>`;

// ✅ Angular-style innerHTML binding
@Component({
  selector: 'app-bad',
  template: `<div [innerHTML]="evilHTML"></div>`,
})
export class BadComponent {
  evilHTML = '<img src=x onerror=alert(2)>';
}

// ❌ Safe example (should NOT match ideally)
const safeContent = DOMPurify.sanitize(userInput);
const evil = "<svg/onload=alert(1)>";
const html = `<div>${evil}</div>`;


//  OS Command Injection vulnerabilities
import { exec, spawn, execSync } from 'child_process';

function runCommand(cmd: string) {
  // Command injection
  exec(`ls -la ${cmd}`);

  // Another command injection
  const userCommand = req.query.command;
  execSync(`find /var/www -name "${userCommand}"`);

  // Command injection with template literals
  const filename = req.params.filename;
  spawn('sh', ['-c', `grep -r "password" ${filename}`]);
}

// Added SQL Injection vulnerabilities
import { connection, pool } from './database';

async function getUserData(userId: string) {
  // SQL injection
  const query = `SELECT * FROM users WHERE id = ${userId}`;
  return connection.query(query);

  // Another SQL injection
  const username = req.body.username;
  return pool.query(`SELECT * FROM accounts WHERE username = '${username}'`);
}

// NoSQL injection
import mongoose from 'mongoose';

async function findUser(userData: any) {
  const userQuery = `{"username": "${userData.name}"}`;
  return mongoose.model('User').find(JSON.parse(userQuery));
}

// Path traversal vulnerability
import * as fs from 'fs';

function getFile(filename: string) {
  // Path traversal
  const filePath = `./public/${filename}`;
  return fs.readFileSync(filePath);
}

// Dynamic require/import
function loadModule(moduleName: string) {
  // Unsafe dynamic import
  return require(`./modules/${moduleName}`);
}

// Unsafe eval
function processCode(code: string) {
  // Code injection
  return eval(code);
}

// Authentication vulnerabilities
// Plaintext password storage
const password = "super_secure_password123";
const apiKey = "sk_live_a1b2c3d4e5f6g7h8i9j0";

// Weak password hashing
import * as crypto from 'crypto';

function hashPassword(password: string) {
  // MD5 is weak for passwords
  return crypto.createHash('md5').update(password).digest('hex');
}

// Hardcoded credentials in configs
const dbConfig = {
  username: "admin",
  password: "admin123!@#",
  host: "localhost"
};

// JWT with weak secret and long expiration
import jwt from 'jsonwebtoken';

function createToken(user: any) {
  // Weak JWT implementation
  return jwt.sign({ id: user.id, role: user.role }, "weakSecret123", {
    expiresIn: "365d" // Very long expiration
  });
}

// Disabled security features
const sessionConfig = {
  secret: "weak",
  secure: false, // Insecure session config
  httpOnly: false
};

// Direct authentication manipulation
function adminBypass(req: any) {
  // Authentication bypass
  req.user.isAdmin = true;
  return { success: true };
}

// Weak token generation
function generateResetToken() {
  // Weak random token
  return Math.random().toString(36).substring(2);
}

// Credential logging
function debugLogin(username: string, password: string) {
  // Logging credentials
  console.log(`Login attempt: ${username} with password ${password}`);
  return authenticateUser(username, password);
}

// ❌ Safe example (should NOT match ideally)
const safeContent = DOMPurify.sanitize(userInput);
document.body.innerHTML = safeContent;

// Parameterized query (safe)
const safeQuery = await connection.query("SELECT * FROM users WHERE id = ?", [userId]);
