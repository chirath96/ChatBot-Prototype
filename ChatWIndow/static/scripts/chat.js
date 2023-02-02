// Collapsible
var coll = document.getElementsByClassName("collapsible");

for (let i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");

    var content = this.nextElementSibling;

    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}

function getDateTime() {
  let currentdate = new Date();
  return (
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    " " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds()
  );
}

function getTime() {
  let today = new Date();
  hours = today.getHours();
  minutes = today.getMinutes();

  if (hours < 10) {
    hours = "0" + hours;
  }

  if (minutes < 10) {
    minutes = "0" + minutes;
  }

  let time = hours + ":" + minutes;
  return time;
}

// Gets the first message
function firstBotMessage() {
  let firstMessage = "Hi There, how may I help you today?";
  
  document.getElementById("botStarterMessage").innerHTML =
    '<p class="botText"><span>' +
    firstMessage +
    "</span></p>";

  let time = getTime();

  $("#chat-timestamp").append(time);
  document.getElementById("userInput").scrollIntoView(false);
}

firstBotMessage();

// Retrieves the response
function getHardResponse(userText) {
    let dateTime = getDateTime();
  let botResponse = getBotResponse(userText);
  let botHtml = '<p class="botText"><span>' + botResponse + "</span></p>"+
  '<p class="mini-text-bot"><span>' +
  dateTime +
  "</span></p>";
  //
  if (document.contains(document.getElementById("loading"))) {
    document.getElementById("loading").remove();
  }

  $("#chatbox").append(botHtml);

  document.getElementById("chat-bar-bottom").scrollIntoView(true);
  console.log("get hard response activated");
}

//Gets the text text from the input box and processes it
function getResponse() {
  let dateTime = getDateTime();
  let userText = $("#textInput").val();

  if (userText == "") {
    userText = "I love Code Palace!";
  }

  let userHtml =
    '<p class="userText"><span>' +
    userText +
    "</span></p>" +
    '<p class="mini-text-user"><span>' +
    dateTime +
    "</span></p>";
  console.log("get user response activated");
  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  let loadHtml =
    '<p id="loading" class="botText"><span>' + "loading..." + "</span></p>";
  $("#chatbox").append(loadHtml);

  setTimeout(() => {
    getHardResponse(userText);
  }, 1000);
}

// Handles sending text via button clicks
function buttonSendText(sampleText) {
  let userHtml = '<p class="userText"><span>' + sampleText + "</span></p>";

  $("#textInput").val("");
  $("#chatbox").append(userHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);

  //Uncomment this if you want the bot to respond to this buttonSendText event
  // setTimeout(() => {
  //     getHardResponse(sampleText);
  // }, 1000)
}

function sendButton() {
  getResponse();
}

/* function heartButton() {
    buttonSendText("Heart clicked!")
} */

// Press enter to send a message
$("#textInput").keypress(function (e) {
  if (e.which == 13) {
    getResponse();
  }
});
