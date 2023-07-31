let log=(param)=> console.log(param)

log("....SPREAD AND REST OPERATOR...")

let studentarr = ["vijay","vipin","sabari","suryaa"]
log("array",...studentarr)

function listit(...all){
    log("rest",all)
}
listit("vijay","ajay","sujay","suryaa",...studentarr)
//////////////////////////////////////////////////////////////////////////////
log(".....Destructuring.....")
log("....object destructuring")
let obj = {
    gender : "male",
    batch : "B$3WE",
    timing : 10
}
let {gender,batch,timing}= obj
log("gender--", gender)
log("batch--", batch)
log("timing--", timing)
//////////////////////////////////////
log(".....array destructuring....")

let boys = ["superman","vendiesel","batman","joker"]
let [namers1,namers2,...namers] = boys
log(namers1)
log(namers2)
log(namers)
///////////////////////////////////////////////
log(".......object short hand property.....")
const marvel=[{
    movie : "thor",
    duration : 2.30

}]
const movie = "shazam"
const duration = 2.40

// const dc = {
//     movie : "shazam",
//     duration: 2.40
// }
///object short hand
const dc = {
    movie ,
    duration,
}
marvel.push(dc)
////////////////////////////////////////////////
log("..........Template literals.............")

const namer = `the marvel movie ${movie} was feel good more than ${movie} movie`