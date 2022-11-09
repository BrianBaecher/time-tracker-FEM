document.querySelector(".dailyButton").addEventListener("click", buttonActions);
document
  .querySelector(".weeklyButton")
  .addEventListener("click", buttonActions);
document
  .querySelector(".monthlyButton")
  .addEventListener("click", buttonActions);

function buttonActions(e) {
  const dailies = document.querySelectorAll(".timeframeDaily");
  const weeklies = document.querySelectorAll(".timeframeWeekly");
  const monthlies = document.querySelectorAll(".timeframeMonthly");
  const dailyStyle = document.querySelector(".dailyButton").style;
  const weeklyStyle = document.querySelector(".weeklyButton").style;
  const monthlyStyle = document.querySelector(".monthlyButton").style;
  const prevText = document.querySelectorAll(".prevText");
  if (e.target.classList.contains("dailyButton")) {
    dailyStyle.color = "whitesmoke";
    weeklyStyle.color = "hsl(236, 100%, 87%)";
    monthlyStyle.color = "hsl(236, 100%, 87%)";
    dailies.forEach((e) => e.classList.remove("none"));
    weeklies.forEach((e) => e.classList.add("none"));
    monthlies.forEach((e) => e.classList.add("none"));
    prevText.forEach((e) => (e.textContent = "Yesterday"));
  }
  if (e.target.classList.contains("weeklyButton")) {
    dailyStyle.color = "hsl(236, 100%, 87%)";
    weeklyStyle.color = "whitesmoke";
    monthlyStyle.color = "hsl(236, 100%, 87%)";
    dailies.forEach((e) => e.classList.add("none"));
    weeklies.forEach((e) => e.classList.remove("none"));
    monthlies.forEach((e) => e.classList.add("none"));
    prevText.forEach((e) => (e.textContent = "Last Week"));

  }
  if (e.target.classList.contains("monthlyButton")) {
    dailyStyle.color = "hsl(236, 100%, 87%)";
    weeklyStyle.color = "hsl(236, 100%, 87%)";
    monthlyStyle.color = "whitesmoke";
    dailies.forEach((e) => e.classList.add("none"));
    weeklies.forEach((e) => e.classList.add("none"));
    monthlies.forEach((e) => e.classList.remove("none"));
    prevText.forEach((e) => (e.textContent = "Last Month"));
  }
}
