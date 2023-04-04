function LIB(options) {
  let text = document.getElementById("text");

  //   if (options.color === "blue") {
  //     text.style.color = "blue";
  //   } else {
  //     options.color = "red";
  //   }

  options.color;
  options.size;

  text.style.color = options.color;
  text.style.fontSize = options.size;
}

module.exports.LIB = LIB;
