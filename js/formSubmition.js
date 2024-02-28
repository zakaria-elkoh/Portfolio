var form = document.getElementById("my-form");
var formBtn = document.getElementById("form-btn");
var alertWrapper = document.querySelector(".submition-alert");
var closingAlertIcon = document.querySelector(".submition-alert i");


formBtn.addEventListener("click", () => {
  formBtn.innerHTML = `<i class="fa-solid fa-spinner"></i>`;
  formBtn.classList.add("active");
})

closingAlertIcon.addEventListener("click", () => {
  alertWrapper.classList.remove("active");
})

async function handleSubmit(event) {
  event.preventDefault();
  var status = document.getElementById("my-form-status");
  var data = new FormData(event.target);
  fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    formBtn.innerHTML = `Send`
    formBtn.classList.remove("active")
    if (response.ok) {
      alertWrapper.style.borderLeftColor = "#00C851";
      status.style.color = "#00C851";
      alertWrapper.classList.add("active")
      setTimeout(() => {
        alertWrapper.classList.remove("active")
      }, 7000);
      status.innerHTML = "Thank you! Your message has been sent.";
      form.reset()
    } else {
      response.json().then(data => {
        if (Object.hasOwn(data, 'errors')) {
          alertWrapper.style.borderLeftColor = "#ff4444";
          status.style.color = "#ff4444";
          alertWrapper.classList.add("active")
          setTimeout(() => {
            alertWrapper.classList.remove("active")
          }, 7000);
          status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
        } else {
          alertWrapper.style.borderLeftColor = "#ff4444";
          status.style.color = "#ff4444";
          alertWrapper.classList.add("active")
          setTimeout(() => {
            alertWrapper.classList.remove("active")
          }, 7000);
          status.innerHTML = "Oops! There was a problem submitting your form"
        }
      })
    }
  }).catch(error => {
    formBtn.innerHTML = `Send`
    formBtn.classList.remove("active")
    alertWrapper.style.borderLeftColor = "#ff4444";
    status.style.color = "#ff4444";
    alertWrapper.classList.add("active")
    setTimeout(() => {
      alertWrapper.classList.remove("active")
    }, 7000);
    status.innerHTML = "Oops! There was a problem submitting the form, please check your internet"
  });
}
form.addEventListener("submit", handleSubmit)