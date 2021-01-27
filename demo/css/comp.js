function timeOfDay() {
    let hour = new Date().getHours();

      let leftFlower = [" left-flower-01", " left-flower-02", " left-flower-03"];
      let rightFlower = [" right-flower-01", " right-flower-02", " right-flower-03"];
      let leftPlant = [" left-plant-01", " left-plant-02", " left-plant-03"];
      let rightPlant = [" right-plant-01", " right-plant-02", " right-plant-03"];
      let leftGrass = [" left-grass-01", " left-grass-02", " left-grass-03", " left-grass-04", " left-grass-05"];
      let rightGrass = [" right-grass-01", " right-grass-02", " right-grass-03", " right-grass-04", " right-grass-05"];

      let leftShroom = [" left-shroom-01", " left-shroom-02"];
      let rightShroom = [" right-shroom-01", " right-shroom-02"];
      let leftFungi = [" left-fungus-01", " left-fungus-02"];
      let rightFungi = [" right-fungus-01", " right-fungus-02"];
      let leftNightGrass = [" left-night-grass-01", " left-night-grass-02"];
      let rightNightGrass = [" right-night-grass-01", " right-night-grass-02"];
      
      let randomLeftFlower = leftFlower[Math.floor(Math.random()*leftFlower.length)];
      let randomRightFlower = rightFlower[Math.floor(Math.random()*rightFlower.length)];
      let randomLeftPlant = leftPlant[Math.floor(Math.random()*leftPlant.length)];
      let randomRightPlant = rightPlant[Math.floor(Math.random()*rightPlant.length)];
      let randomLeftGrass = leftGrass[Math.floor(Math.random()*leftGrass.length)];
      let randomRightGrass = rightGrass[Math.floor(Math.random()*rightGrass.length)];

      let randomLeftShroom = leftShroom[Math.floor(Math.random()*leftShroom.length)];
      let randomRightShroom = rightShroom[Math.floor(Math.random()*rightShroom.length)];
      let randomLeftFungi = leftFungi[Math.floor(Math.random()*leftFungi.length)];
      let randomRightFungi = rightFungi[Math.floor(Math.random()*rightFungi.length)];
      let randomLeftNightGrass = leftNightGrass[Math.floor(Math.random()*leftNightGrass.length)];
      let randomRightNightGrass = rightNightGrass[Math.floor(Math.random()*rightNightGrass.length)];

    if (hour >= 6 && hour <= 20) {

      document.getElementById("graphic").className = "morning";
      document.getElementById("leftFlower").className += randomLeftFlower;
      document.getElementById("rightFlower").className += randomRightFlower;
      document.getElementById("leftPlant").className += randomLeftPlant;
      document.getElementById("rightPlant").className += randomRightPlant;
      document.getElementById("leftGrass").className += randomLeftGrass;
      document.getElementById("rightGrass").className += randomRightGrass;
      console.log('load morning graphics');
    }
    else if (hour >= 21 || hour <= 5) {

      document.getElementById("graphic").className = "night";
      document.getElementById("leftFlower").className += randomLeftShroom;
      document.getElementById("rightFlower").className += randomRightShroom;
      document.getElementById("leftPlant").className += randomLeftFungi;
      document.getElementById("rightPlant").className += randomRightFungi;
      document.getElementById("leftGrass").className += randomLeftNightGrass;
      document.getElementById("rightGrass").className += randomRightNightGrass;
      console.log('load night graphics');
    };
  }