let DEFAULTS = {};

const cssPropertyOutput = document.querySelector("[data-css-property]");
const buttonCopyText = document.querySelector("[data-copy-text]");
const dataInputsConfiguration = document.querySelectorAll(
  "[data-input-configuration]"
);

buttonCopyText.addEventListener("click", copyText);
document.querySelector("[data-button-reset]").addEventListener("click", reset);

dataInputsConfiguration.forEach((input) => {
  DEFAULTS = {
    ...DEFAULTS,
    [input.name]: input.value,
  };

  input.addEventListener("input", inputChanged);
  displayCSSRule();
});

function inputChanged(e) {
  document.documentElement.style.setProperty(
    `--${e.target.name}`,
    e.target.value
  );
  displayCSSRule();
}

function reset() {
  dataInputsConfiguration.forEach((input) => {
    input.value = DEFAULTS[input.name];

    document.documentElement.style.setProperty(
      `--${input.name}`,
      DEFAULTS[input.name]
    );
  });
  displayCSSRule();
}

function displayCSSRule() {
  let rules = {};

  dataInputsConfiguration.forEach((input) => {
    rules = {
      ...rules,
      [input.name]: input.value,
    };
  });

  const rule = `box-shadow: ${rules["x-position"]} ${rules["y-position"]} ${rules["blur"]} ${rules["spread"]} ${rules["shadow-color"]}`;
  cssPropertyOutput.value = rule;
}

function copyText() {
  cssPropertyOutput.select();
  cssPropertyOutput.setSelectionRange(0, 99999);
  document.execCommand("copy");
}
