let url = "http://universities.hipolabs.com/search?name=";
let btn = document.querySelector("button");
let list = document.querySelector("ul");

btn.addEventListener("click", async () => {
  let country = document.querySelector("input").value;
  let colArr = await getCollage(country);
  show(colArr);
});

function show(colArr) {
  for (col of colArr) {
    let colName = col.name;
    let li = document.createElement("li");
    list.appendChild(li);
    li.innerText = colName;
  }
}
async function getCollage(country) {
  let res = await axios.get(url + country);
  return res.data;
}
