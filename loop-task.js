// Task 1
let point = 1 ;

while(point <= 60){
    console.log("I will invest at least 6 hrs every single day for next 60 days!",point);
    if( point % 10 === 0){
        console.log('your task complete')
    }
    point++;
}
// Task 2

// Subtask 1

let obb = 61 ;

while(obb <= 100){
    console.log('obb no - ', obb);
    if(obb % 2 != 0 && obb == 99){
        console.log('your subtask completed')
    }
    obb += 2 ;
}

// Subtask 2

let even = 78 ;

while(even <=98){
    console.log('even no - ',even);
    if(even % 2 ==0 && even == 98){
        console.log('Your subtask completed')
    }
    even += 2;
}

// Task 3

// Subtask 1

let obbnum = 81;
let sumobb = 0;

while(obbnum <= 131){
    console.log(obbnum);
    sumobb = sumobb + obbnum;
    console.log('present sumobb' ,sumobb)
    obbnum += 2;
}

console.log('total sumobb',sumobb)

// Subtask 2

let evernum = 206 ;
let sumeven = 0;

while(evernum <= 311){
    console.log(evernum);
    sumeven = sumeven + evernum;
    console.log('present sumeven' ,sumeven);
    evernum += 2 ;
}
console.log('total even - ',sumeven);

// Task 4

let get = 1 ;

while(get <= 10){
    let multiple = 5 * get;
    console.log("5 * "+ get +" = " , multiple);
    get++;
}

// Task 5

let count = 21 ;

while(count >= 15){
    console.log(count);
    count--;
}