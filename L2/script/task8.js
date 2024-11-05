// #UMoNq4biWGe
// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

console.log("task 8 :");

let t_day = 15;
console.log("t_day =",t_day);

if ((t_day>=1) && (t_day<=10)){
    console.log("t_day in first decade"); 
} else if ((t_day>=11) && (t_day<=20)){
    console.log("t_day in second decade"); 
} else if ((t_day>=21) && (t_day<=31)){
    console.log("t_day in third decade"); 
} else {
    console.log("t_day out of range"); 
}

console.log("-------------------------------");