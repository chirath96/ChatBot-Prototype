function getBotResponse(input) {
  //rock paper scissors
  if (input == "rock") {
    return "paper";
  } else if (input == "paper") {
    return "scissors";
  } else if (input == "scissors") {
    return "rock";
  }

  // Simple responses
  if (input == "hello") {
    return "Hello there!";
  } else if (input == "goodbye") {
    return "Talk to you later!";
  } else if (input == "btn") {
    return "<button onclick='btnResponse(\"https://www.google.com/\")'>Google</button><br><button onclick='btnResponse(\"https://sg.yahoo.com/\")'>Yahoo</button>";
  } else {
    return "Try asking something else!";
  }
}

function btnResponse(input) {
  
  let botHtml = '<p class="botText"><span><a href="'+ input +'">' + `${input}` + "</a></span></p>";
  $("#chatbox").append(botHtml);
  document.getElementById("chat-bar-bottom").scrollIntoView(true);
}
