
document.querySelectorAll(".redirect").forEach((element) => {
  element.addEventListener("click", function () {
    console.log(element)
    if (element.id == "redirect-1") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/page1.html"

    }
    if (element.id == "redirect-2") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/page2.html"
      
    }

    if (element.id == "redirect-3") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/page3.html"
      
    }
    
    if (element.id == "redirect-4") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/page4.html"
      
    }
    
    if (element.id == "redirect-5") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/page5.html"
      
    }

    if (element.id == "returnHome") {
      window.location.href = "/Users/DALEMAX000/Library/Mobile Documents/com~apple~CloudDocs/Web Design/Semester 1 Final Project/index.html"
      
    }
/* assistance from wael */
    


  })
});