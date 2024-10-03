function solution(dots) {
    const [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = dots;
    const width = x1 === x2 ? Math.abs(y1 - y2) : x1 === x3 ? Math.abs(y1 - y3) : Math.abs(y1 - y4);  
    const height = y1 === y2 ? Math.abs(x1 - x2) : y1 === y3 ? Math.abs(x1 - x3) : Math.abs(x1 -x4);

    return width * height
}