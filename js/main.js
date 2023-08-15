$(".openNav").click(function(){
    $(".open").css("width","250px")
    $(".home-content").css("margin-left","250px")

})
$(".closebtn").click(function(){
    $(".open").css("width","0%")
    $(".home-content").css("margin-left","0px")

})
$(".open a").click(function () {
    let hrref = $(this).attr("href");
    let sectionTop = $(hrref).offset().top;
    $("html,body").animate({ scrollTop: sectionTop }, { duration: 2000, queue: false })
})

$(".singer").click(function () {
    let a=$(this).next().css("display")
    if(a=="block"){
        $(this).next().slideUp(500)
    }
    else{
    $(".singer-content").slideUp(500)
    $(this).next().slideDown(500)
}

})
/
$(window).on("load", function() {
   
    countTime();
  })
  function countTime(){
    var futureDate = new Date('02-october-2023 09:56:00');
    var todayDate = new Date();
    var milliseconds = (futureDate.getTime()/1000) - (todayDate.getTime()/1000);
    let days = Math.floor( milliseconds / (24*60*60));
    let hours = Math.floor((milliseconds - (days * (24*60*60))) / 3600);
    let mins = Math.floor((milliseconds - (days * (24*60*60)) - (hours * 3600 )) / 60);
    let secs = Math.floor((milliseconds - (days * (24*60*60)) - (hours * 3600) - (mins * 60)))

    console.log(days);

    console.log(hours);

    console.log(mins);

    console.log(secs);
$("#days").text(days +"D")
$("#hour").text(hours +"H")
$("#minute").text(mins +"M")
$("#second").text(secs+ "S")
setInterval(function() {  countTime(); }, 1000);
  }
  $("#Textarea1").keyup(function(){
    let textareaVal =$(this).val().length
    console.log(textareaVal)
    let currentLen=100-textareaVal
    console.log(currentLen)
if (currentLen<=0){
    $("#chars").text("your available character finished");
}
else{
    $("#chars").text(currentLen);
}

  })