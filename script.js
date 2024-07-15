//index:
let input = document.getElementById("user-input"); //DECLARATION VARIABLE USING LET AND ASSIGNING VALUE TO THE VARIABLE
const enterbutton = document.getElementById("enter"); //DECLARATION VARIABLE  USING CONST
const notify = document.getElementById("notify");
let scrnum = document.getElementById("scr-num");
var opt11 = document.getElementById("opt11"); // USAGE OF DOCUMENT.GET ELEMENT BY ID (JAVASSCRIPT DOM)
let opt12 = document.getElementById("opt12");
let opt13 = document.getElementById("opt13");
let opt14 = document.getElementById("opt14");
let ques = document.getElementById("question");
let qnum = document.getElementById("qnum");
let btn21 = document.getElementById("btn21");
let score = document.getElementById("scr");
let sec = document.getElementById("sec");
let startbox = document.getElementById("start-box");
let secs = document.getElementById("secs");
var nameuser = "";
function enterclick() {
  //function definition
  nameuser = input.value;
  if (nameuser != "") {
    localStorage.setItem("user", nameuser);
    notify.innerText = "You'll have 10 seconds to answer each questions";
  } else {
    alert("Please,enter your name");
  }
}
//index:
let btn1 = document.getElementById("1btn"); //javascript dom
const btn2 = document.getElementById("2btn");
const btn3 = document.getElementById("3btn");
const btn4 = document.getElementById("4btn");

function btn1click() {
  nameuser = input.value;
  if (nameuser != "") {
    // CONDITONAL IF-ELSE
    window.location.href = "pc.html";
  } else {
    alert("Please,enter your name");
  }
}
function btn2click() {
  nameuser = input.value;
  if (nameuser != "") {
    window.location.href = "pb.html";
  } else {
    alert("Please,enter your name");
  }
}
function btn3click() {
  nameuser = input.value;
  if (nameuser != "") {
    window.location.href = "pa.html";
  } else {
    alert("Please,enter your name"); // USAGE OF ALERT
  }
}
function btn4click() {
  nameuser = input.value;
  if (nameuser != "") {
    // USAGE OF CONDITONAL IF-ELSE
    window.location.href = "pl.html";
  } else {
    alert("Please,enter your name");
  }
}
var num = 0;
//timer functiom
let timer1 = document.getElementById("timer"); // variable declaration
let x = 100; // variable intialization
function timer() {
  x--; // DECREMENT OF VARIABLE
  timer1.innerText = x;
  if (x <= 10) {
    //conditonal statements
    timer1.style.color = "red";
    timer1.style.fontSize = "25px"; //styling javascript
  }
  if (x === 0) {
    window.location.href = "result.html";
    clearInterval(z);
    localStorage.setItem("timer", 100);
    localStorage.setItem("scr", scrnum.innerText);
    localStorage.setItem("wrong", wrong);
  }
}

// //pc.html:
var z = "";
let i = 0;
function nxt() {
  //FUNCTION USING SWITCH AND CASES
  i++;
  switch (
    i // switch case usage
  ) {
    case 1: {
      sec.style.display = "block";
      startbox.style.display = "none";
      var z = setInterval(timer, 1000);
      localStorage.setItem("filename", "pc.html");
      ques.innerText = `An electric pump can fill a tank in 3hours.because of a leak in the tank
      if t took 3.5hours to fill the tank.if the tank is full,how much time
      will the leak take to empty it?`;
      opt11.innerText = "21hrs";
      opt12.innerText = "24hrs";
      opt13.innerText = "19hrs";
      opt14.innerText = "25hrs";
      qnum.innerText = "1/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";

      break;
    }
    case 2: {
      ques.innerText =
        "In 1 minute,3/7 of a bucket is filled.The rest of the bucket can be filled in?";
      opt11.innerText = "7/3 minutes";
      opt12.innerText = "7/4 minutes";
      opt13.innerText = "4/3 minutes";
      opt14.innerText = "None of these";
      qnum.innerText = "2/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt13.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 3: {
      ques.innerText =
        " Pipe A can fill a tank in 30 hours and pipe B in 45 hours.If both the pipes are opened in an empty tank how much time will they take to fill it?";
      opt11.innerText = "17 hours";
      opt12.innerText = "16 hours";
      opt13.innerText = "20 hours";
      opt14.innerText = "18 hours";
      qnum.innerText = "3/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt14.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 4: {
      ques.innerText =
        "A pipe can empty a tank in 40 minutes.A second pipe with diameter twice as much as that of the first is also attached with the tank to empty it.How much time will the two pipes together take to empty the tank?";
      opt11.innerText = "5 minutes";
      opt12.innerText = "6 minutes";
      opt13.innerText = "8 minutes";
      opt14.innerText = "10 minutes";
      qnum.innerText = "4/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt13.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 5: {
      ques.innerText =
        "If two pipes function simultaneously, the reservior will be filled in 12 hours.The second pipe fills the reservior 10 hours faster than the first.How many hours does it take the second pipe to fill the reservior?";
      opt11.innerText = "20 hours";
      opt12.innerText = "40 hours";
      opt13.innerText = "50 hours ";
      opt14.innerText = "30 hours";
      qnum.innerText = "5/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt14.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 6: {
      ques.innerText =
        "A cistern has three pipes A,B and C.A and B can fill it in 3 hours and 4 hours respectively while C can empty the completely filled cistern un 1 hour.If the pipes are opened in order at 3,4 and 5 p.m.respectively,at what time will the cistern be empty? ";
      opt11.innerText = "7:00 pm";
      opt12.innerText = "7:12 pm";
      opt13.innerText = "7:18 pm";
      opt14.innerText = "7:24 pm";
      qnum.innerText = "6/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt12.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 7: {
      ques.innerText =
        "Three pipes A,B and C are attached to a tank.A and B can fill it in 20 and 30 minutes respectively while C can empty it in 15 minutes.If A,B and C are kept open successively for 1 minute each,how soon will the tank be filled?";
      opt11.innerText = "167 minutes";
      opt12.innerText = "180 minutes";
      opt13.innerText = "136 minutes";
      opt14.innerText = "143 minutes";
      qnum.innerText = "7/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 8: {
      ques.innerText =
        "Two pipes A and B can fill a tank in 24 minutes and 32 minutes respectively. If both the pipes are opened  simultaneously,after how much time B should be closed so that the tank is full in 18 minutes?";
      opt11.innerText = "5 minutes";
      opt12.innerText = "4 minutes";
      opt13.innerText = "10 minutes";
      opt14.innerText = "8 minutes";
      qnum.innerText = "8/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt14.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 9: {
      ques.innerText =
        "Two pipes A and B can fill a tank in 20 and 30 minutes respectively.If both the pipes are used together,how long  will it take to fill the tank?";
      opt11.innerText = "12 minutes";
      opt12.innerText = "15 minutes";
      opt13.innerText = "25 minutes";
      opt14.innerText = "50 minutes";
      qnum.innerText = "9/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      break;
    }
    case 10: {
      ques.innerText =
        "A pump can fill tank with water in 2hours.Beacuse of a leak,it took 7/2 hours to fill the tank.The leak can drain all the water of the tank in?";
      opt11.innerText = "13/3 hours";
      opt12.innerText = "7 hours";
      opt13.innerText = "8 hours";
      opt14.innerText = "14 hours";
      qnum.innerText = "10/10";
      btn21.innerText = "RESULT";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 11: {
      clearInterval(z);
      localStorage.setItem("timer", timer1.innerText);
      localStorage.setItem("scr", scrnum.innerText);
      localStorage.setItem("wrong", wrong);

      window.location.href = "result.html"; //SHIFTING FROM 1 FILE TO ANOTHER FILE
    }
  }
}
//pb.html:
let a = 0;
function nxt1() {
  a++; //variable increment
  switch (
    a //SWITCH CASE USAGE
  ) {
    case 1: {
      sec.style.display = "block";
      startbox.style.display = "none";
      let z = setInterval(timer, 1000);
      localStorage.setItem("filename", "pb.html");
      ques.innerText = `In a single throw of a die, what is the probability of getting a number
      greater than 4?`;
      opt11.innerText = "1/2";
      opt12.innerText = "1/3";
      opt13.innerText = "2/3";
      opt14.innerText = "1/4";
      qnum.innerText = "1/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";

      break;
    }
    case 2: {
      ques.innerText =
        "In a simultaneous throw of two coins, the probability of getting at least one head is?";
      opt11.innerText = "1/2";
      opt12.innerText = "1/3";
      opt13.innerText = "2/3";
      opt14.innerText = "3/4";
      qnum.innerText = "2/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 3: {
      ques.innerText =
        "Three unbiased coins are tossed. What is the probability of getting at least 2 heads?";
      opt11.innerText = "1/4";
      opt12.innerText = "1/2";
      opt13.innerText = "1/3";
      opt14.innerText = "1/8";
      qnum.innerText = "3/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 4: {
      ques.innerText =
        "Three unbiased coins are tossed. What is the  probability of getting at most two heads?";
      opt11.innerText = "3/4";
      opt12.innerText = "1/4";
      opt13.innerText = "3/8";
      opt14.innerText = "7/8";
      qnum.innerText = "4/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 5: {
      ques.innerText =
        "In a simultaneous throw of two dice, what is the probability of getting a total of 7 ?";
      opt11.innerText = "1/6";
      opt12.innerText = "1/4";
      opt13.innerText = "2/3";
      opt14.innerText = "3/4";
      qnum.innerText = "5/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt11.innerText;
      break;
    }
    case 6: {
      ques.innerText =
        " What is the probability of getting a sum 9 from two throws of a dice?";
      opt11.innerText = "1/6";
      opt12.innerText = "1/8";
      opt13.innerText = "1/9";
      opt14.innerText = "1/12";
      qnum.innerText = "6/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 7: {
      ques.innerText =
        "In a simultaneous throw of two dice, what is the probability of getting a doublet?";
      opt11.innerText = "1/6";
      opt12.innerText = "1/4";
      opt13.innerText = "2/3";
      opt14.innerText = "3/7";
      qnum.innerText = "7/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt11.innerText;
      break;
    }
    case 8: {
      ques.innerText =
        "In a simultaneous throw of two dice, what is the probability of getting a total of 10 or 11?";
      opt11.innerText = "1/4";
      opt12.innerText = "1/6";
      opt13.innerText = "7/12";
      opt14.innerText = "5/36";
      qnum.innerText = "8/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 9: {
      ques.innerText =
        "Two dice are thrown simultaneously. What is the probability of getting two numbers whose product is even?";
      opt11.innerText = "1/2";
      opt12.innerText = "3/4";
      opt13.innerText = "3/8";
      opt14.innerText = "5/16";
      qnum.innerText = "9/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 10: {
      ques.innerText =
        "Tickets numbered 1 to 20 are mixed up and then a ticket is drawn at random. What is the probability that the ticket drawn bears a number which is a multiple of 3?";
      opt11.innerText = "3/10";
      opt12.innerText = "3/20";
      opt13.innerText = "2/5";
      opt14.innerText = "1/2";
      qnum.innerText = "10/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt11.innerText;
      btn21.innerText = "RESULT";
      break;
    }
    case 11: {
      clearInterval(z);
      localStorage.setItem("timer", timer1.innerText);
      localStorage.setItem("scr", scrnum.innerText);
      localStorage.setItem("wrong", wrong);
      localStorage.setItem("filename", "pb.html");
      window.location.href = "result.html";
    }
  }
}
//pa.html:
let j = 0; //VARIABLE INTIALIZATION

function nxt2() {
  j++;
  switch (j) {
    case 1: {
      sec.style.display = "block";
      startbox.style.display = "none";
      let z = setInterval(timer, 1000);
      localStorage.setItem("filename", "pa.html");
      ques.innerText = ` The ages of Nishi and Vinnee are in the ratio 6 : 5 respectively. After
      9 years, the ratio of their ages will be 9 : 8. What is the difference
      in their ages now ?`;
      opt11.innerText = "3 years";
      opt12.innerText = "5 years";
      opt13.innerText = "7 years";
      opt14.innerText = "9 years";
      qnum.innerText = "1/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";

      break;
    }
    case 2: {
      ques.innerText =
        "The ratio of the present ages of a mother and her daughter is 7 : 1. Four years ago, the ratio of their ages was 19 : 1. What will be the mother’s age four years from now";
      opt11.innerText = "42 years";
      opt12.innerText = "38 years";
      opt13.innerText = "46 years";
      opt14.innerText = "36 years";
      qnum.innerText = "2/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 3: {
      ques.innerText =
        " The present ages of Amit and his father are in the ratio 2 : 5 respectively. Four years hence, the ratio of their ages becomes 5 : 11 respectively. What was the father's age five years ago? ";
      opt11.innerText = "30 years";
      opt12.innerText = "35 years";
      opt13.innerText = "40 years";
      opt14.innerText = "45 years";
      qnum.innerText = "3/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 4: {
      ques.innerText =
        "The ratio of the ages of a father and his son is 17 : 7 respectively. Six years ago, the ratio of their ages was 3 : 1 respectively. What is the father's present age?";
      opt11.innerText = "64 years";
      opt12.innerText = "51 years";
      opt13.innerText = "48 years";
      opt14.innerText = "50 years";
      qnum.innerText = "4/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 5: {
      ques.innerText =
        " The ages of Shakti and Kanti are in the ratio of 8 : 7 respectively. After 10 years, the ratio of their ages will be 13 : 12. What is the difference between their ages?";
      opt11.innerText = "2 years";
      opt12.innerText = "4 years";
      opt13.innerText = "8 years";
      opt14.innerText = "6 years";
      qnum.innerText = "5/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt11.innerText;
      break;
    }
    case 6: {
      ques.innerText =
        "The ages of A and B are in the ratio 6 : 5 and the sum of their ages is 44 years. What will be the ratio of their ages after 8 years?";
      opt11.innerText = "7:6";
      opt12.innerText = "8:7";
      opt13.innerText = "9:8";
      opt14.innerText = "3:4";
      qnum.innerText = "6/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 7: {
      ques.innerText =
        "Farah got married 8 years ago. Today her age is 9/7 times her age at the time of her marriage. At present her daughter's age is one-sixth of her age. What was her daughter's age 3 years ago?";
      opt11.innerText = "4 years";
      opt12.innerText = "3 years";
      opt13.innerText = "6 years";
      opt14.innerText = "None of these ";
      qnum.innerText = "7/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 8: {
      ques.innerText =
        " The age of a mother today is thrice that of her daughter. After 12 years, the age of the mother will be twice that of her daughter. The present age of the daughter is?";
      opt11.innerText = "12 years";
      opt12.innerText = "14 years";
      opt13.innerText = "16 years";
      opt14.innerText = "18 years";
      qnum.innerText = "8/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt11.innerText;
      break;
    }
    case 9: {
      ques.innerText =
        "The present age of Mr. Sanyal is three times the age of his son. Six years hence, the ratio of their ages will be 5 : 2. What is the present age of Mr. Sanyal?";
      opt11.innerText = "48 years";
      opt12.innerText = "50 years";
      opt13.innerText = "54 years";
      opt14.innerText = "60 years";
      qnum.innerText = "9/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 10: {
      ques.innerText =
        "The average of the ages of a man and his daughter is 34 years. If the respective ratio of their ages four years from now is 14 : 5, what is daughter's present age?";
      opt11.innerText = "10 years";
      opt12.innerText = "12 years";
      opt13.innerText = "18 years";
      opt14.innerText = "None of these";
      qnum.innerText = "10/10";
      btn21.innerText = "RESULT";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 11: {
      clearInterval(z);
      localStorage.setItem("timer", timer1.innerText);
      localStorage.setItem("scr", scrnum.innerText);
      localStorage.setItem("wrong", wrong);
      localStorage.setItem("filename", "pa.html");
      window.location.href = "result.html";
    }
  }
}
//pl.html:
let k = 0;
function nxt3() {
  k++;
  switch (k) {
    case 1: {
      sec.style.display = "block";
      startbox.style.display = "none";
      let z = setInterval(timer, 1000);
      localStorage.setItem("filename", "pl.html");
      ques.innerText = `  Mr Kashyap purchased an airconditioner for Rs.12000 and sold it for
      Rs.15000. What was the profit percentage?`;
      opt11.innerText = "15";
      opt12.innerText = "20";
      opt13.innerText = "25";
      opt14.innerText = "35";
      qnum.innerText = "1/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      ans = opt11.innerText;
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";

      break;
    }
    case 2: {
      ques.innerText =
        "If an article is sold at 200 percent profit,then the ratio of its cost price to its selling price will be?";
      opt11.innerText = "1:2";
      opt12.innerText = "2:1";
      opt13.innerText = "1:3";
      opt14.innerText = "3:1";
      qnum.innerText = "2/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 2: {
      ques.innerText =
        "If books bought at prices ranging from ` 200 to Rs.350 are sold at prices ranging from Rs.300 to Rs.425, what is the greatest possible profit that might be made in selling eight books?";
      opt11.innerText = "Rs.400";
      opt12.innerText = "Rs.600";
      opt13.innerText = "Rs.500";
      opt14.innerText = "None of these";
      qnum.innerText = "3/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 3: {
      ques.innerText =
        "A shopkeeper bought an article for Rs.2090.42. Approximately, what will be the percentage profit if he sold that article for Rs.2602.58?";
      opt11.innerText = "15%";
      opt12.innerText = "20%";
      opt13.innerText = "25%";
      opt14.innerText = "30%";
      qnum.innerText = "4/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 4: {
      ques.innerText =
        "The cost price of an article is Rs.7840. What should be the selling price of the article so that there is a profit of 7%?";
      opt11.innerText = "Rs.8000";
      opt12.innerText = "Rs.8300";
      opt13.innerText = "Rs.8388.80";
      opt14.innerText = "Rs.8500.50";
      qnum.innerText = "5/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 5: {
      ques.innerText =
        "Rakesh purchased a mobile phone for Rs.5400 and a refrigerator for Rs.9600. He sold the mobile phone at three-fourths of its cost price and the refrigerator at 4/3 of its cost price. What was the profit/loss??";
      opt11.innerText = "Rs.1580";
      opt12.innerText = "Rs.1750";
      opt13.innerText = "Rs.1850";
      opt14.innerText = "Rs.1870";
      qnum.innerText = "6/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt13.innerText;
      break;
    }
    case 6: {
      ques.innerText =
        "Rajni purchased a mobile phone and a refrigerator for Rs.12000 and Rs.10000 respectively. She sold the refrigerator at a loss of 12 percent and the mobile phone at a profit of 8 percent. What is her overall loss/profit?";
      opt11.innerText = "Loss of Rs.280";
      opt12.innerText = "Loss of Rs.240";
      opt13.innerText = "Profit of Rs.2060";
      opt14.innerText = "None of these";
      qnum.innerText = "7/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 7: {
      ques.innerText =
        "Mohanlal purchased a TV set for Rs.12500 and spent Rs.300 on transportation and Rs.800 on installation. At what price should he sell it so as to earn an overall profit of 15%?";
      opt11.innerText = "Rs.14375";
      opt12.innerText = "Rs.14560";
      opt13.innerText = "Rs.15375";
      opt14.innerText = "None of these";
      qnum.innerText = "8/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt14.innerText;
      break;
    }
    case 8: {
      ques.innerText =
        " Harshad bought 15 pieces of DVD players @ Rs.4500 each and sold all of them at the total price of Rs.81000. What is the percent profit earned in the dea";
      opt11.innerText = "50/3";
      opt12.innerText = "20";
      opt13.innerText = "41/2";
      opt14.innerText = "25";
      qnum.innerText = "9/10";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 9: {
      ques.innerText =
        "Alfred buys an old scooter for Rs.4700 and spends Rs.800 on its repairs. If he sells the scooter for Rs.5800, his gain percent is ?";
      opt11.innerText = "32/7 %";
      opt12.innerText = "60/11 %";
      opt13.innerText = "10 %";
      opt14.innerText = "12 %";
      qnum.innerText = "10/10";
      btn21.innerText = "RESULT";
      opt11.style.backgroundColor = "white";
      opt12.style.backgroundColor = "white";
      opt13.style.backgroundColor = "white";
      opt14.style.backgroundColor = "white";
      opt11.style.color = "#059ac4";
      opt12.style.color = "#059ac4";
      opt13.style.color = "#059ac4";
      opt14.style.color = "#059ac4";
      ans = opt12.innerText;
      break;
    }
    case 10: {
      clearInterval(z);
      localStorage.setItem("timer", timer1.innerText);
      localStorage.setItem("scr", scrnum.innerText);
      localStorage.setItem("wrong", wrong);
      localStorage.setItem("filename", "pl.html");
      window.location.href = "result.html";
    }
  }
}
//  evalution function for option choosed
var ans = "";
var wrong = 0;
function btnclicked1() {
  if (
    opt11.style.backgroundColor === "white" &&
    opt12.style.backgroundColor === "white" &&
    opt13.style.backgroundColor === "white" &&
    opt14.style.backgroundColor === "white"
  ) {
    if (ans === opt11.innerText && opt11.style.backgroundColor == "white") {
      opt11.style.backgroundColor = "#059ac4";
      opt11.style.color = "white";
      num++;
      scrnum.innerText = num;
      return;
    }
    wrong++;
    opt11.style.backgroundColor = "red";
    if (opt12.innerText === ans) {
      opt12.style.backgroundColor = "#059ac4";
      opt12.style.color = "white";
      return;
    }
    if (opt13.innerText === ans) {
      opt13.style.backgroundColor = "#059ac4";
      opt13.style.color = "white";
      return;
    }
    if (opt14.innerText === ans) {
      opt14.style.backgroundColor = "#059ac4";
      opt14.style.color = "white";
      return;
    }
  }
}
function btnclicked2() {
  if (
    opt11.style.backgroundColor === "white" &&
    opt12.style.backgroundColor === "white" &&
    opt13.style.backgroundColor === "white" &&
    opt14.style.backgroundColor === "white"
  ) {
    if (ans === opt12.innerText && opt12.style.backgroundColor == "white") {
      opt12.style.backgroundColor = "#059ac4";
      opt12.style.color = "white";
      opt12.style.color = "white";
      num++;
      scrnum.innerText = num;
      return;
    }
    wrong++;
    opt12.style.backgroundColor = "red";
    if (opt11.innerText === ans) {
      opt11.style.backgroundColor = "#059ac4";
      opt11.style.color = "white";
      return;
    }
    if (opt13.innerText === ans) {
      opt13.style.backgroundColor = "#059ac4";
      opt13.style.color = "white";
      return;
    }
    if (opt14.innerText === ans) {
      opt14.style.backgroundColor = "#059ac4";
      opt14.style.color = "white";
      return;
    }
  }
}
function btnclicked3() {
  if (
    opt11.style.backgroundColor === "white" &&
    opt12.style.backgroundColor === "white" &&
    opt13.style.backgroundColor === "white" &&
    opt14.style.backgroundColor === "white"
  ) {
    if (opt13.style.backgroundColor == "white") {
      if (ans === opt13.innerText) {
        opt13.style.backgroundColor = "#059ac4";
        opt13.style.color = "white";
        num++;
        scrnum.innerText = num;
        return;
      }
      wrong++;
      opt13.style.backgroundColor = "red";
    }
    if (opt12.innerText === ans) {
      opt12.style.backgroundColor = "#059ac4";
      opt12.style.color = "white";
      return;
    }
    if (opt11.innerText === ans) {
      opt11.style.backgroundColor = "#059ac4";
      opt11.style.color = "white";
      return;
    }
    if (opt14.innerText === ans) {
      opt14.style.backgroundColor = "#059ac4";
      opt14.style.color = "white";
      return;
    }
  }
}
function btnclicked4() {
  if (
    opt11.style.backgroundColor === "white" &&
    opt12.style.backgroundColor === "white" &&
    opt13.style.backgroundColor === "white" &&
    opt14.style.backgroundColor === "white"
  ) {
    if (ans === opt14.innerText && opt14.style.backgroundColor == "white") {
      opt14.style.backgroundColor = "#059ac4";
      opt14.style.color = "white";
      num++;
      scrnum.innerText = num;
      return;
    }
    wrong++;
    opt14.style.backgroundColor = "red";
    if (opt12.innerText === ans) {
      opt12.style.backgroundColor = "#059ac4";
      opt12.style.color = "white";
      return;
    }
    if (opt13.innerText === ans) {
      opt13.style.backgroundColor = "#059ac4";
      opt13.style.color = "white";
      return;
    }
    if (opt11.innerText === ans) {
      opt11.style.backgroundColor = "#059ac4";
      opt11.style.color = "white";
      return;
    }
  }
}
// navigating user to requested page
function navigatepc() {
  window.location.href = "pc.html";
}
function navigatepa() {
  window.location.href = "pa.html";
}
function navigatepl() {
  window.location.href = "pl.html";
}
function navigatepb() {
  window.location.href = "pb.html";
}
//result:

const score1 = localStorage.getItem("scr");
const timeStop = localStorage.getItem("timer");
const seconds = document.getElementById("secs");
const username = document.getElementById("username");
const user = localStorage.getItem("user");
const qunum = document.getElementById("qunum");
const attemptnum = document.getElementById("attemptnum");
const percentage = document.getElementById("percentage");
percentage.innerText = score1 * 10 + " " + "%";
const wrongtag = document.getElementById("wrongnum");
const startagain = document.getElementById("startagain");
seconds.innerText = timeStop;
username.innerText = user;
const wrongnum = localStorage.getItem("wrong");
wrongtag.innerText = wrongnum;
attemptnum.innerText = parseInt(wrongnum) + parseInt(score1);
const crtnum = document.getElementById("correctnum");
crtnum.innerText = score1;
function home() {
  window.location.href = "index.html";
}
function startagain1() {
  const curr_file = localStorage.getItem("filename");
  window.location.href = curr_file;
}
