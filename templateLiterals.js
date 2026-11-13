// Nested template literals

const user = { name: "Alice", isVIP: true, points: 150 };

const greeting = `Welcome back, ${user.name}! ${
  user.isVIP
    ? `[VIP Status Active - Points: ${user.points}]`
    : "[Upgrade to VIP today]"
}`;

console.log(greeting);
// "Welcome back, Alice! [VIP Status Active - Points: 150]"

//-------------------------------------------------------------------------------------------------------------------------
// Escaping backticks and literal ${} syntax
const codeExample = `Use the \`template literal\` syntax like this: \${expression}`;

console.log(codeExample);
// Output: Use the `template literal` syntax like this: ${expression}
//-------------------------------------------------------------------------------------------------------------------------
//Tagged template functions
function myTag(strings, ...values) {
    console.log("String chunks :", strings);
    console.log("Evaluated Values : ",values);
}

const name = "Alice";
const role = "Admin";

myTag`User: ${name} has assigned  a role: ${role}`

//-------------------------------------------------------------------------------------------------------------------------

