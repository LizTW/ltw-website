var time = new Date().getHours();
var messageText;
var morning = 12;
var evening = 18;
var partyTime = 17;
var napTime = 14;
var lunchTime = 13;
var wakeUpTime = 7;
var isPartyTime = false;
var partyEvent = function() {
  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
  } else {
    isPartyTime = false;
    time = new Date().getHours();
  }
};

var message = document.getElementById("timeEvent");
var lolcat = document.getElementById("lolcat");
var image = "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/08/wakeUpTime.jpg";

var updateClock = function() {
  if (time < morning) {
    messageText = "Good time for another cup of coffee!";
    image = "http://www.lifewithcats.tv/wp-content/uploads/2015/11/cat-with-coffee.jpg"
  } else if (time == wakeUpTime) {
    messageText = "Good MORNING Sunshine!  This is not a recording, this is real rock n roll!"
    image = "https://i.ytimg.com/vi/JqkocnYYgOM/hqdefault.jpg"
  } else if (time == lunchTime) {
    messageText = "FEED ME NOW!"
    image = "https://s-media-cache-ak0.pinimg.com/736x/98/6b/b6/986bb6ec6b45cf53ccd49587cfa5ce04--funny-cats-funny-animals.jpg"
  } else if (time == napTime) {
    messageText = "Sleep or get cranky!"
    image = "http://cdn.attackofthecute.com/September-21-2011-22-10-40-tumblrlhbb3lsoNe1qzjc9co1500.jpeg"
  } else if (time > evening) {
    messageText = "Good evening time for a story!";
    image = "https://dakiniland.files.wordpress.com/2012/02/cat-reading-to-kill-a-mockingbird.jpg"
  } else if (time == partyTime) {
    messageText = "Let's rock n roll party people!"
    image = "https://onespoiledcat.files.wordpress.com/2013/12/sambirthday1.jpg"
  } else {
    messageText = "Happy afternoon it's naptime!";
    image = "http://www.shared.com/content/images/2017/03/635976501537309894-255998075_cat-napping-on-a-keyboard.jpg";
  };


timeEvent.innerText = messageText;
lolcat.src = image;
}
var showCurrentTime = function() {
  var clock = document.getElementById('clock');
  var currentTime = new Date();

  var hours = currentTime.getHours();
  var minutes = currentTime.getMinutes();
  var seconds = currentTime.getSeconds();
  var meridian = 'AM';

  if (hours >= morning) {
    meridian = 'PM';
  }
  if (minutes < 10) {
    minutes = '0' + minutes;
  }
  if (seconds < 10) {
    seconds = '0' + seconds;
  }
  var clockTime = hours + ':' + minutes + ':' + seconds + meridian + '!';
  clock.innerText = clockTime;
};

updateClock();
var oneSecond = 1000;
setInterval(updateClock, oneSecond);

showCurrentTime();

var partyTimeButton = document.getElementById('partyTimeButton');
var isPartyTime = false;

var partyEvent = function() {
  if (isPartyTime == false) {
    isPartyTime = true;
    time = partyTime;
    partyTimeButton.innerText = "PARTY TIME!!"
    partyTimeButton.style.backgroundColor = '#222';
  } else {
    isPartyTime = false;
    time = new Date.getHours();
    partyTimeButton.innerText = "PARTY OVER!!";
    partyTimeButton.style.backgroundColor = '#0A8DAB';
  }
};

partyTimeButton.addEventListener('click', partyEvent);

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');
var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

wakeUpTimeSelector.addEventListener('click', wakeUpEvent);

var napTimeSelector = document.getElementById('napTimeSelector');

var lunchTimeSelector = document.getElementById('lunchTimeSelector');

var wakeUpTimeSelector = document.getElementById('wakeUpTimeSelector');

var lunchEvent = function() {
  lunchTime = lunchTimeSelector.value;
};

var wakeUpEvent = function() {
  wakeUpTime = wakeUpTimeSelector.value;
};

var napEvent = function() {
  napTime = napTimeSelector.value;
};

napTimeSelector.addEventListener('change', napEvent);

lunchTimeSelector.addEventListener('change', lunchEvent);

wakeUpTimeSelector.addEventListener('change', wakeUpEvent);
