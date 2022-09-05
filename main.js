let arr = ["john", "smit", "josh", "drake"];

for (let i = 0; i < arr.length; i++) {
  const node = document.createElement("p");
  const textnode = document.createTextNode(`Hello ${arr[i]}`);
  node.appendChild(textnode);
  document.getElementById("result").appendChild(node);
}
