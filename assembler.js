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

let assembleMOV = (tokenizedCode, i, finalInstructions) => {
  let arg1 = tokenizedCode[i + 1];
  let arg2 = tokenizedCode[i + 2];
  if (regs.includes(arg1) && parseInt(arg2, 10)) {
    finalInstructions.push(10, regs.indexOf(arg1), parseInt(arg2, 10));
  } else if (regs.includes(arg1) && regs.includes(arg2)) {
    finalInstructions.push(10, regs.indexOf(arg2), arg1);
  } else {
    finalInstructions.push(10, parseInt(arg1, 10), parseInt(arg2, 10));
  }
};

let assembleADD = (tokenizedCode, i, finalInstructions) => {
  let arg1 = tokenizedCode[i + 1];
  let arg2 = tokenizedCode[i + 2];
  if (regs.includes(arg1) && parseInt(arg2, 10)) {
    finalInstructions.push(20, regs.indexOf(arg1), parseInt(arg2, 10));
  } else if (regs.includes(arg1) && regs.includes(arg2)) {
    finalInstructions.push(20, regs.indexOf(arg1), arg2);
  }
};

let assembleSUB= (tokenizedCode, i, finalInstructions) => {
  let arg1 = tokenizedCode[i + 1];
  let arg2 = tokenizedCode[i + 2];
  if (regs.includes(arg1) && parseInt(arg2, 10)) {
    finalInstructions.push(30, regs.indexOf(arg1), parseInt(arg2, 10));
  } else if (regs.includes(arg1) && regs.includes(arg2)) {
    finalInstructions.push(30, regs.indexOf(arg1), arg2);
  }
};


let assembleMUL= (tokenizedCode, i, finalInstructions) => {
  let arg1 = tokenizedCode[i + 1];
  let arg2 = tokenizedCode[i + 2];
  if (regs.includes(arg1) && parseInt(arg2, 10)) {
    finalInstructions.push(40, regs.indexOf(arg1), parseInt(arg2, 10));
  } else if (regs.includes(arg1) && regs.includes(arg2)) {
    finalInstructions.push(40, regs.indexOf(arg1), arg2);
  }
};
let regs = [`RA`, `RB`, `RC`, `RD`, `ACC`];

let assembler = () => {
  let finalInstructions = [];
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
                assembleMOV(tokenizedCode, i, finalInstructions);
                break;
              case "ADD":
                assembleADD(tokenizedCode, i, finalInstructions);
                break;
              case "SUB":
                assembleSUB(tokenizedCode, i,finalInstructions)
                break
              case "MUL":
                assembleMUL(tokenizedCode, i, finalInstructions)
                break
            }
          }
        });
      }
    }

    console.log(finalInstructions);
    return 0;
  };
  let load = (code) => {
    let tokenizedCode = Codetokenizer(code);
    console.log(tokenizedCode);
    return run(tokenizedCode);
  };

  return { Codetokenizer, load };
};

let assmebleCode = assembler();
//ADD 50 TO RA
let instructions = `
.start
      MOV RA, 50
      MOV RB, 2
      MUL RA, RB
.end
`;

console.log(assmebleCode.load(instructions));
