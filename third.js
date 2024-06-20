function getUserData(id, callback) {
    setTimeout(() => {
      const user = {
        id: id,
        name: 'John Doe',
        email: 'john.doe@example.com'
      };
      
      callback(user);
    }, 2000);
  }
  
  function displayUser(user) {
  
    console.log('User ID:', user.id);
    console.log('Name:', user.name);
    console.log('Email:', user.email);
  }

  getUserData(1, displayUser);