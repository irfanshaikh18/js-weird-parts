setTimeout(() => {
  console.log('Hey there');
}, 1000);

setInterval(() => {
  const currentTime = new Date();

  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();
  const seconds = currentTime.getSeconds();
  
  console.log(hours + ':' + minutes + ':' + seconds);

}, 1000);

setImmediate(() => {
  console.log('This function will be executed asynchronously');
});
