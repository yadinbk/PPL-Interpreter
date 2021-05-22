
function* braid(generator1:()=>Generator, generator2: ()=>Generator){ //Gen<any>
    let curr1 = generator1(); 
    let next1 = curr1.next();
    let curr2 = generator2();
    let next2 = curr2.next();

    while(1){
        if(!next1.done){
            yield next1.value;
            next1 = curr1.next();
        }
        if(!next2.done){
            yield next2.value;
            next2 = curr2.next();
        }
        if(next1.done && next2.done){
            console.log("both Generators are done");            
            return;
        }
        
    }
}

function* biased(generator1:()=>Generator, generator2: ()=>Generator){ //Gen<any>
    let curr1 = generator1(); 
    let next1 = curr1.next();
    let curr2 = generator2();
    let next2 = curr2.next();

    while(1){
        if(!next1.done){
            yield next1.value;
            next1 = curr1.next();
        }
        if(!next1.done){
            yield next1.value;
            next1 = curr1.next();
        }
        if(!next2.done){
            yield next2.value;
            next2 = curr2.next();
        }
        if(next1.done && next2.done){
            console.log("Note: both Generators are done");            
            return;
        }
        
    }
}

//for your testing
/*
function* gen1() {
    yield 3;
    yield 6;
    yield 9;
    yield 12;
    yield 15;
    yield 18;
    yield 21;
}

function* gen2() {
    yield 8;
    yield 10;
}

function* take(n: number, gen: Generator<any>) {
    for (let x of gen){
        if (n <= 0){
            return;
        }
        n--;
        yield x;
    }
}

for (let n of take(20, braid(gen1,gen2))) {
    console.log(n);
}

*/