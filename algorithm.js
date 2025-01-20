function x(text,char){
    return 'test'
}

console.log(`x('123','') -> '' / `, x('123', ''))
console.log(`x('','z') -> '' / `, x('', 'z'))
console.log(`x('abc','z') -> 'zzz' / `, x('abc', 'z'))
