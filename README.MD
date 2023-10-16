# Basic CPU Emulator Opcodes

This README provides explanations for the opcodes used in the basic CPU emulator implemented in JavaScript. Each opcode corresponds to a specific operation that the CPU can perform. The emulator uses numerical opcodes to represent these operations. Here is a list of the opcodes and their descriptions:

## Opcodes

1. **Opcode 10: MOV (Move)**
   - Description: Copies data from one location to another. Used for loading values into registers, transferring data between memory and registers, and performing simple data copies.

2. **Opcode 20: ADD (Addition)**
   - Description: Adds the values in two registers or memory locations and stores the result in a destination register. A fundamental arithmetic operation.

3. **Opcode 30: SUB (Subtraction)**
   - Description: Subtracts the value of one register from another and stores the result in a destination register.

4. **Opcode 40: MUL (Multiplication)**
   - Description: Multiplies the values in two registers or memory locations and stores the result in a destination register.

5. **Opcode 50: DIV (Division)**
   - Description: Divides the value of one register by another and stores the result in a destination register.

6. **Opcode 60: JMP (Jump)**
   - Description: Transfers control to another location in memory. Conditional and unconditional jump instructions are often available to change the program's flow.

7. **Opcode 70: CMP (Compare)**
   - Description: Compares two values, typically setting flags in the process, which can be used for conditional branching.

8. **Opcode 80: BRANCH (Conditional Branch)**
   - Description: Based on the result of a comparison or a condition, a branch instruction can jump to different parts of the program.

9. **Opcode 90: LOAD (Load from Memory)**
   - Description: Loads a value from memory into a register.

10. **Opcode 100: STORE (Store to Memory)**
    - Description: Stores a value from a register into a memory location.

11. **Opcode 110: PUSH (Push onto Stack)**
    - Description: Pushes a value onto a stack. Used for function call management, local variable storage, and control flow handling.

12. **Opcode 120: POP (Pop from Stack)**
    - Description: Pops the top value from a stack and stores it in a register. Often used in function return operations.

13. **Opcode 130: CALL (Call Subroutine)**
    - Description: Calls a subroutine, pushing the return address onto the stack. Used for function calls and creating nested execution contexts.

14. **Opcode 140: RET (Return from Subroutine)**
    - Description: Returns from a subroutine, popping the return address from the stack and resuming execution from that address.

15. **Opcode 150: HALT (Halt Execution)**
    - Description: Stops the CPU's execution.

16. **Opcode 160: NOP (No Operation)**
    - Description: A "do nothing" instruction, often used for padding or alignment.

17. **Opcode 170: AND (Bitwise AND)**
    - Description: Performs a bitwise AND operation on the bits of two values.

18. **Opcode 180: OR (Bitwise OR)**
    - Description: Performs a bitwise OR operation on the bits of two values.

19. **Opcode 190: XOR (Bitwise XOR)**
    - Description: Performs a bitwise XOR operation on the bits of two values.

20. **Opcode 200: SHL (Shift Left)**
    - Description: Shifts the bits of a value to the left.

21. **Opcode 210: SHR (Shift Right)**
    - Description: Shifts the bits of a value to the right.

22. **Opcode 220: LOAD IMMEDIATE (Load Immediate Value)**
    - Description: Loads a constant value directly into a register.

