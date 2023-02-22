const Keyboard = {
  elements: {
    main: null,
    heading: null,
    headingMobile: null,
    keysContainer: null,
    keys: [],
  },

  init() {
    // Create main elements
    this.elements.main = document.createElement("div");
    this.elements.heading = document.createElement("h3");
    this.elements.headingMobile = document.createElement("h3");
    this.elements.keysContainer = document.createElement("div");

    // Setup main elements
    this.elements.main.classList.add("keyboard");

    this.elements.heading.innerHTML = "Press a key on your keyboard";
    this.elements.headingMobile.innerHTML = "Touch a key";
    this.elements.heading.classList.add("heading");
    this.elements.headingMobile.classList.add("headingMobile");
    this.elements.keysContainer.classList.add("keyboard__keys");
    this.elements.keysContainer.appendChild(this._createKeys());

    // Add to DOM
    this.elements.main.appendChild(this.elements.heading);
    this.elements.main.appendChild(this.elements.headingMobile);
    this.elements.main.appendChild(this.elements.keysContainer);
    document.body.appendChild(this.elements.main);
  },

  _createKeys() {
    const fragment = document.createDocumentFragment();
    const keyLayout = {
      "1": 49,
      "2": 50,
      "3": 51,
      "4": 52,
      "5": 53,
      "6": 54,
      "7": 55,
      "8": 56,
      "9": 57,
      "0": 48,
      backspace: 8,
      tab: 9,
      q: 81,
      w: 87,
      e: 69,
      r: 82,
      t: 84,
      y: 89,
      u: 85,
      i: 73,
      o: 79,
      p: 80,
      caps: 20,
      a: 65,
      s: 83,
      d: 68,
      f: 70,
      g: 71,
      h: 72,
      j: 74,
      k: 75,
      l: 76,
      enter: 13,
      shift: 16,
      z: 90,
      x: 88,
      c: 67,
      v: 86,
      b: 66,
      n: 78,
      m: 77,
      ",": 188,
      ".": 190,
      "?": 191,
      space: 32,
    };

    // Creates HTML for an icon
    const createIconHTML = (icon_name) => {
      return `<i class="material-icons">${icon_name}</i>`;
    };

    Object.keys(keyLayout).forEach((key) => {
      const keyElement = document.createElement("button");
      const insertLineBreak =
        ["backspace", "p", "enter", "?"].indexOf(key) !== -1;

      // Add attributes/classes
      keyElement.setAttribute("type", "button");
      keyElement.classList.add("keyboard__key");
      keyElement.id = keyLayout[key];

      switch (key) {
        case "backspace":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("backspace");
          break;

        case "caps":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_capslock");
          break;

        case "enter":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = createIconHTML("keyboard_return");
          break;

        case "space":
          keyElement.classList.add("keyboard__key--extra-wide");
          keyElement.innerHTML = createIconHTML("space_bar");
          break;

        case "shift":
          keyElement.classList.add("keyboard__key--wide");
          keyElement.innerHTML = "shift";
          break;

        default:
          keyElement.textContent = key.toLowerCase();
          break;
      }

      fragment.appendChild(keyElement);

      if (insertLineBreak) {
        fragment.appendChild(document.createElement("br"));
      }
    });

    document.addEventListener("keydown", (event) => {
      document.getElementById(event.keyCode).classList.add("glow");
    });

    document.addEventListener("keyup", (event) => {
      document.getElementById(event.keyCode).classList.remove("glow");
    });

    return fragment;
  },
};

window.addEventListener("DOMContentLoaded", function () {
  Keyboard.init();
});
