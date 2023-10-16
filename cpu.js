function CPU(){
    //CPU REGISTERS
    // 0=>RA
    // 1=>RB
    // 2=>RC
    // 3=>RD
    // 4=> ACC (accumulator)
    let registers = [0,0,0,0,0]
    let regs = [`RA`, `RB`, `RC`, `RD`, `ACC`]
    let halted = false;
    function run(memory){
       
        for(let PC = 0 ;PC < memory.length; PC++){
            if(halted == true){
                break
            }
            switch(memory[PC]){
                case 10:
                    PC++
                    if(parseInt([memory[PC+1]], 10)){
                        registers[memory[PC]]= parseInt([memory[PC+1]], 10)
                    }else if(regs.includes(memory[PC+1])){
                        registers[memory[PC]] =  registers[regs.indexOf(memory[PC+1])]
                    }
                         
                   
                    PC++
                    
                    break
                case 20:
                    
                    PC++
                    if(regs.includes(memory[PC+1])){
                        registers[memory[PC]] +=  registers[regs.indexOf(memory[PC+1])]
                    }else{
                        registers[memory[PC]] += memory[PC+1]
                    }
                    
                    PC++
                    break

                case 30:
                    PC++
                    registers[memory[PC]] -= memory[PC+1]
                    PC++
                    break
                    
            }
        }
        
       
        
    }

    function print(){
        console.log(registers)
    }
    function load(instructions){
        let memory = [...instructions]

        run(memory)

        print()
    }
    return {run, print, load};
}


let cpu = CPU();

cpu.load([10, 0, 80])




let x = "15"; 