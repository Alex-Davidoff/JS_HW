let t_arr = [2,17,13,6,22,31,45,66,100,-18];
console.log(t_arr);

//1
let c = 0;
let tempval;
while (c<t_arr.length){
    tempval = t_arr[c]; /// якась дія
    c++;
}

//2
for (c=0; c<t_arr.length; c++){
    tempval = t_arr[c]; /// якась дія
}

//3
console.log('st-3');
c = 0;
while (c<t_arr.length){
    if (c % 2 === 1){
        console.log(t_arr[c]);
    }
    c++;
}

//4
console.log('st-4');
for (c=0; c<t_arr.length; c++){
    if (c % 2 === 1){
        console.log(t_arr[c]);
    }
}

//5
console.log('st-5');
c = 0;
while (c<t_arr.length){
    console.log(t_arr[c]);
    c = c+2;
}

//6
console.log('st-6');
for (c=0; c<t_arr.length; c = c+2){
    console.log(t_arr[c]);
}

//7
for (c=0; c<t_arr.length; c++){
    if (t_arr[c] % 3 === 0){
        t_arr[c] = 'okten';
    }
}

//8
console.log('st-8');
for (c = t_arr.length-1; c>=0; c--){
    console.log(t_arr[c]);
}

//reinit arr
t_arr.length = 0;
t_arr = [2,17,13,6,22,31,45,66,100,-18];
console.log(t_arr);

//9-1
c = t_arr.length-1;
while (c>=0){
    tempval = t_arr[c]; /// якась дія
    c--;
}

//9-2
for (c=t_arr.length-1; c>=0; c--){
    tempval = t_arr[c]; /// якась дія
}

//9-3
console.log('st-9-3');
c = t_arr.length-1;
while (c>=0){
    if (c % 2 === 1){
        console.log(t_arr[c]);
    }
    c--;
}

//9-4
console.log('st-9-4');
for (c=t_arr.length-1; c>=0; c--){
    if (c % 2 === 1){
        console.log(t_arr[c]);
    }
}

//9-5
console.log('st-9-5');
c = t_arr.length-1;
while (c>=0){
    if (c % 2 === 0){
        console.log(t_arr[c]);
    }
    c--;
}

//9-6
console.log('st-9-6');
for (c=t_arr.length-1; c>=0; c--){
    if (c % 2 === 0){
        console.log(t_arr[c]);
    }
}

//9-7
for (c=t_arr.length-1; c>=0; c--){
    if (t_arr[c] % 3 === 0){
        t_arr[c] = 'okten';
    }
}

console.log(t_arr);