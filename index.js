// shout(string)
// 1) receives one argument and returns it in all caps

function shout(string) {
  return string.toUpperCase();
}

// whisper(string)
//     1) receives one argument and returns it in all lowercase

function whisper(string) {
  return string.toLowerCase();
}

// logShout(string)
// 1) takes a string argument and logs it in all caps using console.log()

function logShout(string) {
  console.log(string.toUpperCase());
}

// ogWhisper(string)
// 1) takes a string argument and logs it in all lowercase using console.log()

function logWhisper(string) {
  console.log(string.toLowerCase());
}

// sayHiToHeadphonedRoommate(string)
//     1) returns "I can't hear you!" if `string` is lowercase
//     2) returns "YES INDEED!" if `string` is uppercase
//     3) returns "I would love to!" if `string` is "Let's have dinner together!"`

function sayHiToHeadphonedRoommate(string) {
  if (string === string.toLowerCase()) {
    return "I can't hear you!";
  } else if (string === string.toUpperCase()) {
    return "YES INDEED!";
  } else if (string === "Let's have dinner together!") {
    return "I would love to!";
  }
}


console.log(sayHiToHeadphonedRoommate("Let's have dinner together!"))