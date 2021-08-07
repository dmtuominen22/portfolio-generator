const profileDataArgs = process.argv.slice(2, process.argv.length);
console.log(profileDataArgs);

const printProfileData = profileDataArr => {
    // This...
    profileDataArr.forEach(profileItem => console.log(profileItem));
  
    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
      console.log(profileItem)
    });
  };