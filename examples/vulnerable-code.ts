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
document.body.innerHTML = safeContent;

