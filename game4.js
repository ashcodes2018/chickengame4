(function() {
    var start = document.getElementById("startbutton");
    var attackButton = document.getElementById("attackButton");
    var healButton = document.getElementById("healbutton");
    var quitButton= document.getElementById("quitbutton");
    var playerHealthBar = document.getElementById("userhealth");
    var playerHealBar=document.getElementById("userheal");
    var playerWinsBar=document.getElementById("userwin");
    var grantHealthBar=document.getElementById("granthealth");
    var nameOfThePlayer =document.getElementById("username");
    var message = document.getElementById("consolemsg");
    var hiddenPage=document.getElementsByClassName("hiddencontentofthepage");
    var theButtons=document.getElementById("gamebuttons");
    //console.log(userObject.heal());
  var userObject={

    userName:null,
    userHealth:40,
    userHealsRemaining:2,
    userWins:0,
    heal:function()
      {
          var rand= Math.floor((Math.random()*10)+1);
          this.userHealth+=rand;
          this.userHealsRemaining--;
      },
   generateAttackDamageForGrant:function()
      {
          return Math.floor((Math.random()*3)+1);

        }
};

    var grantObject=
    {
          grantName:"Grant the Mighty Chicken",
          grantHealth:10,
          generateAttackDamageForUser:function()
          {
            return Math.floor((Math.random()*5)+1);
          }
  };

  start.onclick=function()
    {
        userObject.userName= prompt("Enter your name");
        nameOfThePlayer.textContent = userObject.userName;
        hiddenPage[0].classList.remove("hiddencontentofthepage");

    };

  attackButton.onclick=function()
  {

    if(userObject.userHealth>0 && userObject.userWins<5)
      {
        userObject.userHealth -= grantObject.generateAttackDamageForUser();
        grantObject.grantHealth-=userObject.generateAttackDamageForGrant();
        updateDisplay();
        updateMessage(nameOfThePlayer.innerHTML+" has "+userObject.userHealth+" health left. "+grantObject.grantName+" has "+grantObject.grantHealth+" health left.");
      };
    if(grantObject.grantHealth <= 0)
      {
            userObject.userWins++;
            updateMessage(nameOfThePlayer.innerHTML + " now has " +userObject.userWins+ " wins.");
            grantObject.grantHealth = 10;
            updateDisplay();
      };
    if(userObject.userWins === 5)
        {
            updateMessage(nameOfThePlayer.innerHTML +" has won the game");
            theButtons.style.display = "none";
        };
    if(userObject.userHealth <= 0)
        {
            updateMessage("Sorry you have been defeated");
            theButtons.style.display = "none";
        }
};
function updateDisplay()
  {
      playerHealthBar.value = userObject.userHealth;
      grantHealthBar.value = grantObject.grantHealth;
      playerHealBar.value = userObject.userHealsRemaining;
      playerWinsBar.value = userObject.userWins;
  };
    healButton.onclick = function()
    {
        if(userObject.userHealsRemaining > 0)
        {
            userObject.heal();
            updateMessage(nameOfThePlayer.innerHTML + " has " + userObject.userHealsRemaining + " heals remaining.");
            updateDisplay();
        }
        else if(userObject.userHealsRemaining === 0)
        {
            updateMessage("Sorry!! You have used all your lives");
        }
    };
    quitButton.onclick = function()
    {
        updateMessage("Game over");
        theButtons.style.display = "none";
    };

    function updateMessage(newMessage) {
          message.innerText = newMessage;

      };

 })();
