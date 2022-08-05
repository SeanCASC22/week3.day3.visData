// console.log(data[0]);
// console.log(data[3]);
 let randomButton = document.querySelector("#random_btn"); 
 randomButton.onclick = Randomization;

 function Randomization(){
    let randomIndex = Math.random();
    randomIndex *= data.length;
    randomIndex = Math.floor(randomIndex);
    let randomResult = data[randomIndex];

    let randomIndex2 = Math.random();
    randomIndex2 *= data.length;
    randomIndex2 = Math.floor(randomIndex2);
    let randomResult2 = data[randomIndex2];
    console.log(randomResult2);

    let randomIndex3 = Math.random();
    randomIndex3 *= data.length;
    randomIndex3 = Math.floor(randomIndex3);
    let randomResult3 = data[randomIndex3];
    console.log(randomResult3);

    let randomIndex4 = Math.random();
    randomIndex4 *= data.length;
    randomIndex4 = Math.floor(randomIndex4);
    let randomResult4 = data[randomIndex4];
    console.log(randomResult4);

    let randomIndex5 = Math.random();
    randomIndex5 *= data.length;
    randomIndex5 = Math.floor(randomIndex5);
    let randomResult5 = data[randomIndex5];
    console.log(randomResult5);

    let randomIndex6 = Math.random();
    randomIndex6 *= data.length;
    randomIndex6 = Math.floor(randomIndex6);
    let randomResult6 = data[randomIndex6];
    console.log(randomResult6);
    // console.log(randomResult.name);

    let pictureHeading = document.getElementById("Picture");
    let pictureRandom = randomResult.picture.medium;
    let img = document.createElement("img");
    img.src = pictureRandom;
    pictureHeading.innerHTML = "";
    pictureHeading.appendChild(img);

    let genderHeading = document.getElementById("Gender");
    let genderRandom = randomResult.gender;
    genderHeading.innerHTML = `${genderRandom}`;
    
    let nameHeading = document.getElementById("Name");
    let nameRandom = randomResult.name;
    nameHeading.innerHTML = `Name: ${nameRandom.title} ${nameRandom.first} ${nameRandom.last}`;

    let locationHeading = document.getElementById("Location");
    let locationRandom = randomResult.location;
    locationHeading.innerHTML = `----Location---- <br> Street: ${locationRandom.street.number} ${locationRandom.street.name}. <br> City: ${locationRandom.city}. <br> State: ${locationRandom.state}. <br> Country: ${locationRandom.country}. <br> Postcode: ${locationRandom.postcode}. <br> Latitude/longtitude: ${locationRandom.coordinates.latitude}, ${locationRandom.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom.timezone.offset} [${locationRandom.timezone.description}]. <br> ------------------`;

    let emailHeading = document.getElementById("Email");
    let emailRandom = randomResult.email;
    emailHeading.innerHTML = `v Email! v <br>${emailRandom}<br> ~~~~~~~~~~`;

    let birthdayHeading = document.getElementById("Birthday");
    let birthdayRandom = randomResult.dob;
    birthdayHeading.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom.date}. <br> Age: ${birthdayRandom.age}`

    let secondPictureHeading = document.getElementById("Picture2");
    let secondPictureRandom = randomResult2.picture.medium;
    let secondImg = document.createElement("img");
    secondImg.src = secondPictureRandom;
    secondPictureHeading.innerHTML = "";
    secondPictureHeading.appendChild(secondImg);
    
    let genderHeading2 = document.getElementById("Gender2");
    let genderRandom2 = randomResult2.gender;
    genderHeading2.innerHTML = `${genderRandom2}`;

    let nameHeading2 = document.getElementById("Name2");
    let nameRandom2 = randomResult2.name;
    nameHeading2.innerHTML = `Name: ${nameRandom2.title} ${nameRandom2.first} ${nameRandom2.last}`;

    let locationHeading2 = document.getElementById("Location2");
    let locationRandom2 = randomResult2.location;
    locationHeading2.innerHTML = `----Location---- <br> Street: ${locationRandom2.street.number} ${locationRandom2.street.name}. <br> City: ${locationRandom2.city}. <br> State: ${locationRandom2.state}. <br> Country: ${locationRandom2.country}. <br> Postcode: ${locationRandom2.postcode}. <br> Latitude/longtitude: ${locationRandom2.coordinates.latitude}, ${locationRandom2.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom2.timezone.offset} [${locationRandom2.timezone.description}]. <br> ------------------`;

    let email2Heading = document.getElementById("Email2");
    let email2Random = randomResult2.email;
    email2Heading.innerHTML = `v Email! v <br>${email2Random}<br> ~~~~~~~~~~`;

    let birthdayHeading2 = document.getElementById("Birthday2");
    let birthdayRandom2 = randomResult2.dob;
    birthdayHeading2.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom2.date}. <br> Age: ${birthdayRandom2.age}`

    let thirdPictureHeading = document.getElementById("Picture3");
    let thirdPictureRandom = randomResult3.picture.medium;
    let thirdImg = document.createElement("img");
    thirdImg.src = thirdPictureRandom;
    thirdPictureHeading.innerHTML = "";
    thirdPictureHeading.appendChild(thirdImg);

    let genderHeading3 = document.getElementById("Gender3");
    let genderRandom3 = randomResult3.gender;
    genderHeading3.innerHTML = `${genderRandom3}`;

    let nameHeading3 = document.getElementById("Name3");
    let nameRandom3 = randomResult3.name;
    nameHeading3.innerHTML = `Name: ${nameRandom3.title} ${nameRandom3.first} ${nameRandom3.last}`;

    let locationHeading3 = document.getElementById("Location3");
    let locationRandom3 = randomResult3.location;
    locationHeading3.innerHTML = `----Location---- <br> Street: ${locationRandom3.street.number} ${locationRandom3.street.name}. <br> City: ${locationRandom3.city}. <br> State: ${locationRandom3.state}. <br> Country: ${locationRandom3.country}. <br> Postcode: ${locationRandom3.postcode}. <br> Latitude/longtitude: ${locationRandom3.coordinates.latitude}, ${locationRandom3.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom3.timezone.offset} [${locationRandom3.timezone.description}]. <br> ------------------`;

    let email3Heading = document.getElementById("Email3");
    let email3Random = randomResult3.email;
    email3Heading.innerHTML = `v Email! v <br>${email3Random}<br> ~~~~~~~~~~`;

    let birthdayHeading3 = document.getElementById("Birthday3");
    let birthdayRandom3 = randomResult3.dob;
    birthdayHeading3.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom3.date}. <br> Age: ${birthdayRandom3.age}`

    let PictureHeading4 = document.getElementById("Picture4");
    let PictureRandom4 = randomResult4.picture.medium;
    let Img4 = document.createElement("img");
    Img4.src = PictureRandom4;
    PictureHeading4.innerHTML = "";
    PictureHeading4.appendChild(Img4);

    let genderHeading4 = document.getElementById("Gender4");
    let genderRandom4 = randomResult4.gender;
    genderHeading4.innerHTML = `${genderRandom4}`;

    let nameHeading4 = document.getElementById("Name4");
    let nameRandom4 = randomResult4.name;
    nameHeading4.innerHTML = `Name: ${nameRandom4.title} ${nameRandom4.first} ${nameRandom4.last}`;

    let locationHeading4 = document.getElementById("Location4");
    let locationRandom4 = randomResult4.location;
    locationHeading4.innerHTML = `----Location---- <br> Street: ${locationRandom4.street.number} ${locationRandom4.street.name}. <br> City: ${locationRandom4.city}. <br> State: ${locationRandom4.state}. <br> Country: ${locationRandom4.country}. <br> Postcode: ${locationRandom4.postcode}. <br> Latitude/longtitude: ${locationRandom4.coordinates.latitude}, ${locationRandom4.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom4.timezone.offset} [${locationRandom4.timezone.description}]. <br> ------------------`;

    let email4Heading = document.getElementById("Email4");
    let email4Random = randomResult4.email;
    email4Heading.innerHTML = `v Email! v <br>${email4Random}<br> ~~~~~~~~~~`;

    let birthdayHeading4 = document.getElementById("Birthday4");
    let birthdayRandom4 = randomResult4.dob;
    birthdayHeading4.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom4.date}. <br> Age: ${birthdayRandom4.age}`

    let PictureHeading5 = document.getElementById("Picture5");
    let PictureRandom5 = randomResult5.picture.medium;
    let Img5 = document.createElement("img");
    Img5.src = PictureRandom5;
    PictureHeading5.innerHTML = "";
    PictureHeading5.appendChild(Img5);

    let genderHeading5 = document.getElementById("Gender5");
    let genderRandom5 = randomResult5.gender;
    genderHeading5.innerHTML = `${genderRandom5}`;

    let nameHeading5 = document.getElementById("Name5");
    let nameRandom5 = randomResult5.name;
    nameHeading5.innerHTML = `Name: ${nameRandom5.title} ${nameRandom5.first} ${nameRandom5.last}`;

    let locationHeading5 = document.getElementById("Location5");
    let locationRandom5 = randomResult5.location;
    locationHeading5.innerHTML = `----Location---- <br> Street: ${locationRandom5.street.number} ${locationRandom5.street.name}. <br> City: ${locationRandom5.city}. <br> State: ${locationRandom5.state}. <br> Country: ${locationRandom5.country}. <br> Postcode: ${locationRandom5.postcode}. <br> Latitude/longtitude: ${locationRandom5.coordinates.latitude}, ${locationRandom5.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom5.timezone.offset} [${locationRandom5.timezone.description}]. <br> ------------------`;

    let email5Heading = document.getElementById("Email5");
    let email5Random = randomResult5.email;
    email5Heading.innerHTML = `v Email! v <br>${email5Random}<br> ~~~~~~~~~~`;

    let birthdayHeading5 = document.getElementById("Birthday5");
    let birthdayRandom5 = randomResult5.dob;
    birthdayHeading5.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom5.date}. <br> Age: ${birthdayRandom5.age}`

    let PictureHeading6 = document.getElementById("Picture6");
    let PictureRandom6 = randomResult6.picture.medium;
    let Img6 = document.createElement("img");
    Img6.src = PictureRandom6;
    PictureHeading6.innerHTML = "";
    PictureHeading6.appendChild(Img6);

    let genderHeading6 = document.getElementById("Gender6");
    let genderRandom6 = randomResult6.gender;
    genderHeading6.innerHTML = `${genderRandom6}`;

    let nameHeading6 = document.getElementById("Name6");
    let nameRandom6 = randomResult6.name;
    nameHeading6.innerHTML = `Name: ${nameRandom6.title} ${nameRandom6.first} ${nameRandom6.last}`;

    let locationHeading6 = document.getElementById("Location6");
    let locationRandom6 = randomResult6.location;
    locationHeading6.innerHTML = `----Location---- <br> Street: ${locationRandom6.street.number} ${locationRandom6.street.name}. <br> City: ${locationRandom5.city}. <br> State: ${locationRandom6.state}. <br> Country: ${locationRandom6.country}. <br> Postcode: ${locationRandom6.postcode}. <br> Latitude/longtitude: ${locationRandom6.coordinates.latitude}, ${locationRandom6.coordinates.longitude}. <br> ------------------ <br> Timezone offset: ${locationRandom6.timezone.offset} [${locationRandom6.timezone.description}]. <br> ------------------`;

    let email6Heading = document.getElementById("Email6");
    let email6Random = randomResult6.email;
    email6Heading.innerHTML = `v Email! v <br>${email6Random}<br> ~~~~~~~~~~`;

    let birthdayHeading6 = document.getElementById("Birthday6");
    let birthdayRandom6 = randomResult6.dob;
    birthdayHeading6.innerHTML = `>Birthday!< <br> Day of birth: ${birthdayRandom6.date}. <br> Age: ${birthdayRandom6.age}`
 }