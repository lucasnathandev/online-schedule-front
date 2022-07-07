const schedules = ["13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];

const select = document.querySelector("select#time");

schedules.forEach((e) => {
  select.appendChild(createOption(e));
});

function createOption(value) {
  const opt = document.createElement("option");
  opt.classList.add("time-option");
  opt.textContent = value;
  return opt;
}

async function createConfirmation() {
  const div = document.createElement("div");
  div.classList.add("grid-item", "confirmation");
  const { name, date, time } = await fetch("http://localhost:5000").then((r) =>
    r.json()
  );
  div.appendChild(createP("Dados cadastrados"));
  div.appendChild(createP().appendChild(name));
  div.appendChild(createP().appendChild(date));
  div.appendChild(createP().appendChild(time));

  function createP(data) {
    const p = document.createElement("p");
    p.textContent = data || "";
    return p;
  }
}
