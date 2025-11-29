function updateTime() {
  //Lilongwe
  let lilongweElement = document.querySelector("#lilongwe");
  let lilongweDateElement = lilongweElement.querySelector(".date");
  let lilongweTimeElement = lilongweElement.querySelector(".time");
  let lilongweTime = moment().tz("Africa/Blantyre");

  lilongweDateElement.innerHTML = lilongweTime.format("MMMM Do YYYY");
  lilongweTimeElement.innerHTML = lilongweTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //London
  let londonElement = document.querySelector("#london");
  let londonDateElement = londonElement.querySelector(".date");
  let londonTimeElement = londonElement.querySelector(".time");
  let londonTime = moment().tz("Europe/London");

  londonDateElement.innerHTML = londonTime.format("MMMM Do YYYY");
  londonTimeElement.innerHTML = londonTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}
updateTime();
setInterval(updateTime, 1000);
