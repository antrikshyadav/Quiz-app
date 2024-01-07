let box = document.getElementById("mainbox");
let btn = document.querySelector("#start");
let que = document.querySelector("#que");
let opt1 = document.querySelector("#opt1");
let opt2 = document.querySelector("#opt2");
let opt3 = document.querySelector("#opt3");
let opt4 = document.querySelector("#opt4");
let quenum = document.querySelector("#quenum");
let btn2 = document.querySelector("#change");
let n = 1;

async function api() {
  let result = await axios
    .get("https://opentdb.com/api.php?amount=10")
    .then((response) => {
      que.innerHTML = response.data.results[1].question;
      opt1.innerHTML = response.data.results[1].incorrect_answers[0];
      opt2.innerHTML = response.data.results[1].incorrect_answers[1];
      opt3.innerHTML = response.data.results[1].incorrect_answers[2];
      opt4.innerHTML = response.data.results[1].correct_answer;
      console.log(response.data.results[1]);
    })
    .catch((err) => {
      console.log(err);
    });
}
btn.addEventListener("click", async () => {
  res = await api();
  quenum.innerHTML = `Q${n}`;
});

btn2.addEventListener("click", async () => {
  n++;
  res2 = await api();
  quenum.innerHTML = `Q${n}`;
  opt4.addEventListener("click", () => {
    let correct = opt4.innerHTML;
    if (correct === opt4.innerHTML) {
      opt4.style.background = "green";
    }
  });
});
