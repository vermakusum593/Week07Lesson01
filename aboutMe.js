const displayName = (callback) => {
    setTimeout(() => {
        console.log("My name is Kusum");
        callback();
      },2000);
};


const displayAge = (callback) => {
    setTimeout(() => {
        console.log("I am 29 years old.");
        callback();
      },3000);
    };

const displayLocation = (callback) => {
    setTimeout(() => {
        console.log("I am originally from India and now reside in Sweden.");
        callback();
      },4000);
};    

const displayHobbies = (callback) => {
    setTimeout(() => {
        console.log(" Gardening, meditation, cooking, watching movies");
        callback();
      },5000);
    };



    const startDisplaying = () => {
        displayName(() =>{
            displayAge(() => {
                displayLocation(() => {
                    displayHobbies(() => {
                        console.log("That's a little about me!");
                        
                    });
                });
            });
        });
    };


    startDisplaying();