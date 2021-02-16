let DEFAULTS = [];

const dataInputsConfiguration = document.querySelectorAll(
  "[data-input-configuration]"
);

dataInputsConfiguration.forEach((input) => {
  // const defaultInputValue = {
  //   [input.name]: input.value,
  // };
  // DEFAULTS.push(defaultInputValue);

  DEFAULTS = {
    ...DEFAULTS,
    [input.name]: input.value,
  };

  input.addEventListener("input", inputChanged);
});

document.querySelector("[data-button-reset]").addEventListener("click", reset);

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );
}

function reset() {
  dataInputsConfiguration.forEach((input) => {
    input.value = DEFAULTS[input.name];

    document.documentElement.style.setProperty(
      `--${input.name}`,
      DEFAULTS[input.name]
    );
  });
}
