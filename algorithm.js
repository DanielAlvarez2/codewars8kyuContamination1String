function x(text,char){
    let answer = ''
    if (text == '' || char == '') {
        return ''
    }else{
        for (let i=0;i<text.length;i++){
            answer = answer.concat(char)
        }
    }
    return answer
}

console.log(`x('123','') -> '' / `, x('123', ''))
console.log(`x('','z') -> '' / `, x('', 'z'))
console.log(`x('abc','z') -> 'zzz' / `, x('abc', 'z'))
