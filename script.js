/**
 * Question 1
 */
document.addEventListener("DOMContentLoaded", (event) => {
const question1 = () => document.getElementById("sidebar");
    const button = document.getElementById("sidebar-button");

    button.addEventListener("click", () => {
        sidebar.classList.toggle("opened");

        if (sidebar.classList.contains("opened")){
            button.textContent = "<";
        } else {
            button.textContent = ">";
        }
    });

});

/**
 * Question 2
 */
const question2 = () => {
    const addButton = document.getElementById("add-todo");
    const input = document.getElementById("task-name");
    const list = document.getElementById("todo-list");

    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();

        if (taskText === "") return;
        
        const li = document.createElement("li");
        li.textContent = taskText;
        
        list.append(li);
        
        input.value = "";
    });
};


/**
 * Question 3
 */

const question3 = () => {
    const firstName = document.getElementById("first-name");
    const lastName = document.getElementById("last-name");
    const message = document.getElementById("message");

    const updateGreeting = () => {
        const first = firstName.value;
        const last = lastName.value;

        message.textContent = `Hello ${first} ${last}!`;
    };

    firstName.addEventListener("input", updateGreeting);
    lastName.addEventListener("input", updateGreeting);
};

document.addEventListener("DOMContentLoaded", (event) => {
    question1();
    question2();
    question3();
});


/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
