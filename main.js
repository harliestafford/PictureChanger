function royal(){
  if (royalBird.style.display === "none") {
    royalBird.style.display = "block";
  } else {
    royalBird.style.display = "none";
  }
  if (kickinBird.style.display != "none") {
    kickinBird.style.display = "none";
  }
  if (sadBird.style.display != "none") {
    sadBird.style.display = "none";
  }
}

function kick(){
    if (kickinBird.style.display === "none") {
        kickinBird.style.display = "block";
    } else {
        kickinBird.style.display = "none";
    }
    if (royalBird.style.display != "none") {
        royalBird.style.display = "none";
    }
    if (sadBird.style.display != "none") {
        sadBird.style.display = "none";
    }
  }


function sad(){
    if (sadBird.style.display === "none") {
        sadBird.style.display = "block";
    } else {
        sadBird.style.display = "none";
    }
    if (royalBird.style.display != "none") {
        royalBird.style.display = "none";
      }
    if (kickinBird.style.display != "none") {
        kickinBird.style.display = "none";
    }
}
