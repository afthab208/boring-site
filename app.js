async function getdata() {
    //fetching the url
    const response = await fetch('https://www.boredapi.com/api/activity');
    //storing the data :0. woah bruh i am kinda sad :(
    const data = await response.json();

    //changing value of activity part :0. its my exams and i didnt even study :|
    document.getElementById("activity").innerHTML = data.activity
    //idk maybe now change the value of like the type part. ngl JS is super easy
    document.getElementById("type").innerHTML = data.type
    // the last one the participants part :0
    document.getElementById("pp").innerHTML = data.participants
    // it sucks to have a white ass scrollbar not gonna lie so lets just umm remove and make it better :0

    const progressBar = document.querySelector("#progressBar");
    let totalPageHeight = document.body.scrollHeight - window.innerHeight;
    window.onscroll = () => {
    let newProgressHeight = (window.pageYOffset / totalPageHeight) * 100;
    progressBar.style.height = `${newProgressHeight}%`;
    progressBar.style.opacity = `${newProgressHeight}%`;
    //Its the End Bruh, Anyway Nice Meeting You :)
};


    
     
}