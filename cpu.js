function CPU(){
    //CPU REGISTERS
    // 0=>RA
    // 1=>RB
    // 2=>RC
    // 3=>RD
    // 4=> ACC (accumulator)
    let registers = [0,0,0,0,0]
    
    let halted = false;
    function run(memory){
       
        for(let PC = 0 ;PC < memory.length; PC++){
            if(halted == true){
                break
            }
            switch(memory[PC]){
                case 10:
                    PC++
                        registers[memory[PC]]= parseInt([memory[PC+1]], 10) 
                   
                    PC++
                    
                    break
                case 20:
                    
                    PC++
                    registers[memory[PC]] += memory[PC+1]
                    PC++
                    break

                case 40:
                    halted = true
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

cpu.load([10, 0, 80, 20, 0, 10])


