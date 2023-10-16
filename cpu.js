function x(){
    //CPU REGISTERS
    let registers = [{RA:0},{RB:0}, {RC:0}, {RD:0} ]
    function run(instructions){
        let PC = 0
        
        switch(instructions[PC]){
            case 10:

                break
        }
        
    }

    function print(){
        console.log(registers)
    }
    function load(memory){
        let instructions = [...memory]

        run(instructions)
    }
    return {run, print, load};
}


let cpu = x();

cpu.load([10, 50, 30])


