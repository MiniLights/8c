function pasuser(form) {
    if (form.id.value == "Walker") {
        if (form.pass.value == "2895") {
            location = "Page.html"
        } else {
            alert("Invalid Password, Try Using The Correct Capital Letters OR Numbers")
        }
    } else {
        alert("Invalid UserID, Try Using The Correct Capital Letters OR Numbers")
    }
}
