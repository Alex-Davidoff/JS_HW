// #coYydZuaeEB
// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів. Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2. Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
console.log("task 5 :");

let temp_c_arr = [
    {
        morn_t : 10,
        day_t : 20,
        evn_t : 9
    },
    {
        morn_t : 9,
        day_t : 19,
        evn_t : 8
    },
    {
        morn_t : 8,
        day_t : 18,
        evn_t : 7
    },
    {
        morn_t : 7,
        day_t : 17,
        evn_t : 6
    },
    {
        morn_t : 6,
        day_t : 16,
        evn_t : 5
    },
    {
        morn_t : 5,
        day_t : 15,
        evn_t : 4
    },
    {
        morn_t : 4,
        day_t : 14,
        evn_t : 3
    }
];

let temp_c_arr_v2 = [
    [10,20,9],
    [9,19,8],
    [8,18,7],
    [7,17,6],
    [6,16,5],
    [5,15,4],
    [4,14,3]
];

console.log(temp_c_arr);
console.log("el 3 day_t", temp_c_arr[3].day_t);
console.log(temp_c_arr_v2);
console.log("el 3 day_t", temp_c_arr_v2[3][1]);


console.log("-------------------------------");