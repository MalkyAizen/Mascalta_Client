import axios from 'axios';
axios.get('http://localhost:16079/api/User/getUser')
  .then(response => {
    // טיפול בתוצאה
    console.log(response.data);
  })
  .catch(error => {
    // טיפול בשגיאה
    console.error('שגיאה בשליחת בקשה:', error);
  });
