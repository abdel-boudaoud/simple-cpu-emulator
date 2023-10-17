let instructions = `
.start
MOV RA, 10
MOV RB, 15
MOV RB, RC
JMP, 2
.end
`;

let parser = (code) => {
  let tokens = instructions.trim().replace(/\n/g, " ").split(" ");

  let tokenCount = [
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

  console.log(tokens);

  tokenCount.map((token) => {
    if (token.name === "LOAD") {
      console.log(token.name);
    }
  });
};

parser(instructions);
