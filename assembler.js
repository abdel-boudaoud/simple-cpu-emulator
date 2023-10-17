let instructions = `
.start
    MOV RA, 10
    MOV RB, 15
    MOV RB, RC
    ADD 50, RA
    JMP, 2
.end
`;

let parser = (code) => {
  let tokens = instructions
    .trim()
    .replace(/\n/g, " ")
    .replace(/,/g, "")
    .split(" ")
    .filter((token) => {
      if (!token == "") {
        return token;
      }
    });

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
              console.log([10, tokens[i + 1], tokens[i + 2]]);
          }
        }
      });
    }
  }
};

parser(instructions);

