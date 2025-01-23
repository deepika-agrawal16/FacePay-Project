const sign_in_btn = document.querySelector("#sign-in-btn");
    const sign_up_btn = document.querySelector("#sign-up-btn");
    const container = document.querySelector(".container");

    sign_up_btn.addEventListener("click", () => {
      container.classList.add("sign-up-mode");
    });

    sign_in_btn.addEventListener("click", () => {
      container.classList.remove("sign-up-mode");
    });

    // Handle Sign-Up
    const signUpForm = document.querySelector(".sign-up-form");
    signUpForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const username = signUpForm.querySelector('input[type="text"]').value;
      const email = signUpForm.querySelector('input[type="email"]').value;
      const password = signUpForm.querySelector('input[type="password"]').value;

      try {
        const response = await fetch("http://localhost:5000/signup", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, email, password }),
        });
        const data = await response.json();
        
        if (response.ok) {
          alert(data.message);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error during sign-up:", error);
      }
    });

    // Handle Sign-In
    const signInForm = document.querySelector(".sign-in-form");
    signInForm.addEventListener("submit", async (e) => {
      e.preventDefault();

      const email = signInForm.querySelector('input[type="email"]').value;
      const password = signInForm.querySelector('input[type="password"]').value;

      try {
        const response = await fetch("http://localhost:5000/login", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();

        if (response.ok) {
          window.location.href = "../Welcome/index.html";
          alert(data.message);
        } else {
          alert(data.error);
        }
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    });