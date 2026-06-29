let area = 500;
if(area>0 && area<=1000000000){
 // console.log(area= area/2);
}
 
// 2nd problem 
let money =14000;
if(money >= 25000){
 console.log('laptop kine dibo')
 
}
else if(money>= 10000 && money <25000){
 console.log('cycle kine dibo')
}
else{
 console.log('chocolate kine dibo')
}

// 2nd problem 
let lastDay = 6;
let schedule =[];
for(let day = 1; day<=lastDay; day++){
if(day%3===0){
schedule.push(day+ 'medicine')
}
else{
 schedule.push(day + 'rest')
}
}

console.log(schedule)