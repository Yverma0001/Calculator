const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let expression = "";

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.getAttribute("data-value");

    if (value === "C") {
      expression = "";
    } else if (value === "←") {
      expression = expression.slice(0, -1);
    } else if (value === "=") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else {
      expression += value;
    }

    display.value = expression;
  });
});

// Keyboard support
document.addEventListener("keydown", (event) => {
  const key = event.key;

  if ((/[0-9+\-*/.=]/.test(key)) || key === "Enter" || key === "Backspace" || key === "Escape") {
    event.preventDefault();

    if (key === "Enter") {
      try {
        expression = eval(expression).toString();
      } catch {
        expression = "Error";
      }
    } else if (key === "Backspace") {
      expression = expression.slice(0, -1);
    } else if (key === "Escape") {
      expression = "";
    } else {
      expression += key;
    }

    display.value = expression;
  }
});
