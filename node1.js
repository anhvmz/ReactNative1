function countDown(count){
   console.log(count);
   if (count > 0) {
   		setTimeout(function() {countDown(count - 1)}, 1000);
   }
}

countDown(6);