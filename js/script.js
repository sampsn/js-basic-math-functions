const add = (x, y) => {
  return x + y;
};

const mul = (x, y) => {
  return x * y;
};

const div = (x, y) => {
  return x / y;
};

const addSquares = (x, y) => {
  return x * x + y * y;
};

document.getElementById("add").addEventListener("click", () => {
  document.getElementById("result").innerHTML = add(
    Number(document.getElementById("first").value),
    Number(document.getElementById("second").value),
  );
});

document.getElementById("mul").addEventListener("click", () => {
  document.getElementById("result").innerHTML = mul(
    Number(document.getElementById("first").value),
    Number(document.getElementById("second").value),
  );
});

document.getElementById("div").addEventListener("click", () => {
  document.getElementById("result").innerHTML = div(
    Number(document.getElementById("first").value),
    Number(document.getElementById("second").value),
  );
});

document.getElementById("add-squares").addEventListener("click", () => {
  document.getElementById("result").innerHTML = addSquares(
    Number(document.getElementById("first").value),
    Number(document.getElementById("second").value),
  );
});
