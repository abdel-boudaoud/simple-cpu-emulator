let instructions = `
.start
    MOV RA, 20
    MOV 2, 50
.end
`;
let regs = [`RA`, `RB`, `RC`, `RD`, `ACC`];

let parser = (code) => {
  let tokens = instructions
    .trim()
    .replace(/\n/g, " ")
    .replace(/,/g, "")
    .split(" ")
    .filter(Boolean);

  let tokenArgCount = [
    { name: ".start", args: 0 },
    { name: ".end", args: 0 },
    { name: "MOV", args: 2 },
    { name: "LOAD", args: 2 },
    { name: "HALT", args: 0 },
    { name: "NOP", args: 0 },
    { name: "JMP", args: 1 },
    { name: "ADD", args: 2 },
    { name: "SUB", args: 2 },
    { name: "MUL", args: 2 },
    { name: "DIV", args: 2 },
    { name: "PUSH", args: 1 },
    { name: "POP", args: 1 },
  ];
  for (let i = 0; i < tokens.length; i++) {
    if (tokens[i] === ".end") {
      break;
    } else {
      tokenArgCount.map((token) => {
        if (token.name === tokens[i]) {
          switch (token.name) {
            case "MOV":
              let arg1 = tokens[i + 1];
              let arg2 = tokens[i + 2];
              if (regs.includes(arg1) && parseInt(arg2, 10)) {
                console.log([10, regs.indexOf(arg1), parseInt(arg2, 10)]);
              } else {
                console.log([10, parseInt(arg1, 10), parseInt(arg2, 10)]);
              }
          }
        }
      });
    }
  }
};

parser(instructions);
