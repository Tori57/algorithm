function solution(l, r) {
    var answer = [];
    for(let i = l; i <= r; i++) {
        let validation = true;
        const formatInt = String(i).split("");
        for(let j = 0; j < formatInt.length; j++) {
            if(formatInt[j] !== "0" && formatInt[j] !== "5") {
                validation = false;
                break;
            }
        }
        
        if (validation) {
            answer.push(i);
        }   
    }
    return answer.length === 0 ? [-1] : answer;
}