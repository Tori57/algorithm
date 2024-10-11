function solution(ineq, eq, n, m) {
    
 return(n>m && ineq===">" && eq==="!") || (n>=m && ineq===">" && eq==="=") || (n<m && ineq==="<" && eq==="!") ||(n<=m && ineq==="<" && eq==="=") ? 1: 0
}