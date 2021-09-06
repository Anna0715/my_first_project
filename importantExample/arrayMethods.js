function hi(name) {
    console.log(`hello ${name}`)
}

hi('Anna')
hi(123)


// callback argument
function ret1() {
    return 1
}

function ret2() {
    return 2
}

function hiCallback(cb) { // cb = callback
    console.log(`hello ${cb()}`)
}

hiCallback(ret1)
hiCallback(ret2)
hiCallback(function () {
    return 'callback'
})

// forEach
const someArray = ['a', 2, 'd', 4, 3, 6]

for(let i = 0; i < someArray.length; i++) {
    console.log(`item ${someArray[i]} --- index ${i}`)
}

someArray.forEach(function (item, index) {
    console.log(`item ${item} --- index ${index}`)
})