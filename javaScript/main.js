const $ = (selector) => document.querySelector(selector) 
$('#form').addEventListener('submit', handleSubmit)

function handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(this)

    const subject = `${data.get("names")}, Saludos!`
    const body = `${data.get("names")}:${data.get("email")}\n ${data.get("message")}`

    $("#triggerMail").setAttribute("href", `mailito:studiocaroca@gmail.com?subject${subject}=&body=${body}`)

    console.log(body)
    $("#triggerMail").click()
}
