function dateIndetifier() {
  
    const currentDate = new Date();
    const day = currentDate.getDay();
    const headerPath = document.querySelector(".pancake-day");
  
    if (day == 5) {
        headerPath.innerHTML = "<p>Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.</p>";
    }
    else if (day == 6) {
        headerPath.innerHTML = "<p>Saturday = Preston Pancakes in the Park!  9:00 a.m. Saturday at the city park pavilion.</p>";
    }
    else {
        console.log("We are not close enough for the pancakes D:")
    }
  };

dateIndetifier();