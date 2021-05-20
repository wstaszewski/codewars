function dirReduc(arr){
    let joinedString = arr.join("")
    let pattern = /NORTHSOUTH|EASTWEST|SOUTHNORTH|WESTEAST/g
    while(pattern.test(joinedString)) {
        joinedString = joinedString.replace(pattern, '')
    }

    return joinedString.match(/(NORTH|SOUTH|EAST|WEST)/g) || []
}