function solution(rsp) {
    const Win = {
        2: "0",
        0: "5",
        5: "2",
    };
    
    
    let answer = "";
    for(let i=0; i<rsp.length; i++) {
        answer += Win[rsp[i]];
    }
    
    return answer;
}