const botui= new BotUI("help-bot")

botui.message.bot({
  delay:2000,
  content:"hi I will be your assistant today",
  loading:true,
}).then( () =>{
  return botui.message.bot({
    delay:2000,
    content:"what do you need help with?",
    loading:true,
  })
}).then( () =>{
  return botui.action.button({
  delay:2000,
  action:[
  {
  text:"how can i press a button?",
  value:"button"
},
        {
  text:"how to copy and paste",
  value:"paste"
}

  ]
});
}).then(function(res){
  let message;
  if(res.value==="button"){
    message="go to button and click it";
  }
  else if(res.value==="paste"){
    message="copy and paste it";
  }
  return botui.message.add({
    type:"html",
    delay:1000,
    loading:true,
    content:message
    
  });
}).then(function (index) {
  return botui.action.button({
    action: [
      {
        text: 'Thanks',
        value: 'thanks'
      }
    ]
  });
}).then(function (index) {
  return botui.message.add({
    delay: 1000,
    loading: true,
    content: 'you are welcome.'
  });
});


