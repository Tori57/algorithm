function solution(order) {
   const americano = ["americano", "iceamericano", "americanoice", "hotamericano", "americanohot", "anything"]
   const cafelatte = ["cafelatte" ,"icecafelatte", "cafelatteice", "hotcafelatte", "cafelattehot"]
   let sum = 0
   for(let item of order) {
     if (americano.includes(item)){
          sum +=4500
     } else {
          sum +=5000
     }
   }
    
    return sum
}