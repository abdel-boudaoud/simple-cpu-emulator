function CPU() {
  //CPU REGISTERS
  // 0=>RA
  // 1=>RB
  // 2=>RC
  // 3=>RD
  // 4=> ACC (accumulator)
  let registers = [0, 0, 0, 0, 0];
  let regs = [`RA`, `RB`, `RC`, `RD`, `ACC`];
  let stack = [];
  let halted = false;
  function run(memory) {
    for (let PC = 0; PC < memory.length; PC++) {
      if (halted == true) {
        break;
      }
      switch (memory[PC]) {
        case 10:
          //MOV
          PC++;
          if (parseInt([memory[PC + 1]], 10)) {
            registers[memory[PC]] = parseInt([memory[PC + 1]], 10);
          } else if (regs.includes(memory[PC + 1])) {
            registers[memory[PC]] = registers[regs.indexOf(memory[PC + 1])];
          }

          PC++;

          break;
        case 20:
          //ADD
          PC++;
          if (regs.includes(memory[PC + 1])) {
            registers[memory[PC]] += registers[regs.indexOf(memory[PC + 1])];
          } else {
            registers[memory[PC]] += memory[PC + 1];
          }

          PC++;
          break;

        case 30:
          //SUB
          PC++;
          if (regs.includes(memory[PC + 1])) {
            registers[memory[PC]] -= registers[regs.indexOf(memory[PC + 1])];
          } else {
            registers[memory[PC]] -= memory[PC + 1];
          }

          PC++;
          break;
        case 40:
          //MUL
          PC++;
          if (regs.includes(memory[PC + 1])) {
            registers[memory[PC]] *= registers[regs.indexOf(memory[PC + 1])];
          } else {
            registers[memory[PC]] *= memory[PC + 1];
          }

          PC++;
          break;
        case 50:
          //DIV
          PC++;

          if (regs.includes(memory[PC + 1])) {
            registers[memory[PC]] /= registers[regs.indexOf(memory[PC + 1])];
          } else {
            registers[memory[PC]] /= memory[PC + 1];
          }

          PC++;
          break;
        case 60:
          //JUMP
          PC++;
          PC += memory[PC];
          PC++;
          break;
        case 90:
          //LOAD
          PC++;
          registers[memory[PC]] = parseInt([memory[PC + 1]], 10);
          PC++;
          break;
        case 110:
          //PUSH TO STACK
          PC++;
          stack.push(memory[PC]);
          PC++;
          break;
        case 120:
          //POP from stack
          PC++;
          stack.pop();
          PC++;
          break;
        case 150:
            //HALT
            halted = true;
            break
        case 160:
          //DO NOTHING
          PC++;
          break;
        
      }
    }
  }

  function print() {
    console.log(registers);
    console.log(`the stack => `, stack);
  }
  function load(instructions) {
    let memory = [...instructions];

    run(memory);

    print();
  }
  return { run, print, load };
}

let cpu = CPU();

cpu.load([
  90, 1, 50,  10, 0, 80, 110, 50, 160, 10, 0, 50, 10, 0, 250, 110, 90, 160, 120,
  160, 160, 10, 4, 200,
]);
