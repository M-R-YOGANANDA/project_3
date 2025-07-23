function myFunction(){
    alert("button clicked");
}
 function menu() {
    const option = document.getElementsByName("menu");
    let sel_url = "";

    for (let i = 0; i < option.length; i++) {
      if (option[i].checked) {
        sel_url = option[i].value;
        break;
      }
    }

    if (sel_url) {
      alert("Selected: " + sel_url);
      window.open(sel_url, "_blank");
        // window.location.href = sel_url;   
    } else {
      alert("Please select an option");
    }
 }