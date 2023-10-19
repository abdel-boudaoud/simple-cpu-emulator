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

let assembleMOV = (tokenizedCode, i) => {

  let arg1 = tokenizedCode[i + 1];
  let arg2 = tokenizedCode[i + 2];
  if (regs.includes(arg1) && parseInt(arg2, 10)) {
    console.log([10, regs.indexOf(arg1), parseInt(arg2, 10)]);
  } else if (regs.includes(arg1) && regs.includes(arg2)) {
    console.log([10, regs.indexOf(arg2), arg1]);
  } else {
    console.log([10, parseInt(arg1, 10), parseInt(arg2, 10)]);
  }

};

let regs = [`RA`, `RB`, `RC`, `RD`, `ACC`];

let assembler = () => {
  let Codetokenizer = (code) => {
    return (tokens = code
      .trim()
      .replace(/\n/g, " ")
      .replace(/,/g, "")
      .split(" ")
      .filter(Boolean));
  };
  let run = (tokenizedCode) => {
    for (let i = 0; i < tokenizedCode.length; i++) {
      if (tokenizedCode[i] === ".end") {
        break;
      } else {
        tokenArgCount.map((token) => {
          if (token.name === tokenizedCode[i]) {
            switch (token.name) {
              case "MOV":
                assembleMOV(tokenizedCode, i)
            }
          }
        });
      }
    }
    return 0;
  };
  let load = (code) => {
    let tokenizedCode = Codetokenizer(code);

    return run(tokenizedCode);
  };

  return { Codetokenizer, load };
};

let assmebleCode = assembler();

let instructions = `
.start
    MOV RA, 50
    MOV RA, RB
    MOV 0, 50
    MOV ACC, RA
.end
`;

console.log(assmebleCode.load(instructions));
