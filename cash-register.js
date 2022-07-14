function checkCashRegister(price, cash, cid) {
  let change = cash * 100 - price * 100;
  let totalAmount = 0;
  for(let amount of cid){
    totalAmount += amount[1] * 100;
    //console.log(totalAmount);
  }

  if (change > totalAmount) {
    return {status: "INSUFFICIENT_FUNDS", change: []}
  } else if (change === totalAmount) {
    return {status: "CLOSED", change: cid}
  } else {
    let ans = [];
   cid = cid.reverse() ;
   //console.log(cid);
   let m = {"ONE HUNDRED": 10000, "TWENTY": 2000, "TEN": 1000, "FIVE": 500, "ONE": 100, "QUARTER": 25, "DIME": 10, "NICKEL": 5, "PENNY": 1}

   for (let e of cid){
     e[1]=e[1]*100;
     let holder = [e[0], 0]
     

     while (change >= m[e[0]] && e[1] > 0){
       //console.log(m[e[0]])
       //console.log(e[1])

       change -= m[e[0]];
       e[1] -= m[e[0]];       
       holder[1] += m[e[0]] / 100;       
     }
     if (holder[1] > 0){
       ans.push(holder);
     }
   }
   //console.log(change);
   if (change > 0){
     return {status: "INSUFFICIENT_FUNDS", change: []}
   }

   return {status: "OPEN", change: ans}
  }
}

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);