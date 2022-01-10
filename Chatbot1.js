const botui= new BotUI("help-bot")

botui.message.bot({
  delay:2000,
  content:"hi I will be your assistant today",
  loading:true,
}).then( () =>{
  return botui.message.bot({
    delay:2000,
    content:"how are you feeling today?",
    loading:true,
  })
}).then( () =>{
  return botui.action.button({
  delay:2000,
  action:[
  {
  text:"good",
  value:"good"
},
        {
  text:"not so well",
  value:"not so well"
},
        {
  text:"great!",
  value:"great!"
}
  ]
})
}).then( (res) =>{
  return botui.message.bot({
    delay:1000,
    loading:true,
    content:"you are feeling "+res.text.toLowerCase()+"!"
  });
}).then( () =>{
  botui.message.bot({
    delay:1000,
    loading:true,
    content:"whats your name"
  }).then(function () {
      return botui.action.text({
        delay: 400,
        action: {
          size: 18,
          icon: 'user-circle-o',
          sub_type: 'text'        
        }
      })
}).then( (res) =>{
    name=res.value;
    return botui.message.bot({
      delay:300,
      loading:true,
      content: 'Nice to meet you ' + name + '! ![hello image](https://media.giphy.com/media/DwXOS8RqHocEM/giphy.gif)'

    })
  })
})
  

                      
