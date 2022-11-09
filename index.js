function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
saturdayFun("play with cat")

function mondayWork(chore = "go to the office"){
    return `This Monday, I will ${chore}.`
}
mondayWork("clean the bathroom")

function wrapAdjective(init = "*"){
    return function(adj = "special") {
        return `You are ${init}${adj}${init}!`
    }
}
