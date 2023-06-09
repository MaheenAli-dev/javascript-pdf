
    // 1. document.getElementById('signupForm').addEventListener('submit', function(e) {
    //     e.preventDefault();
  
      
    //     const name = document.getElementById('name').value;
    //     const email = document.getElementById('email').value;
    //     const password = document.getElementById('password').value;
  
   
    //     const formData = { name, email, password };
  
        
    //     displayFormData(formData);
  
        
    //     document.getElementById('name').value = '';
    //     document.getElementById('email').value = '';
    //     document.getElementById('password').value = '';
    //   });
  

    //   function displayFormData(formData) {
    //     const formDataDiv = document.getElementById('formData');
    //     formDataDiv.innerHTML = '';
  
     
    //     const heading = document.createElement('h2');
    //     heading.textContent = 'Form Data:';
    //     formDataDiv.appendChild(heading);
  
    //     const ul = document.createElement('ul');
  
    //     for (const key in formData) {
    //       if (formData.hasOwnProperty(key)) {
    //         const li = document.createElement('li');
    //         li.textContent = `${key}: ${formData[key]}`;
    //         ul.appendChild(li);
    //       }
    //     }
  
    //     formDataDiv.appendChild(ul);
    //   }

   // 2. function myFunction() {
        //     var dots = document.getElementById("dots");
        //     var moreText = document.getElementById("more");
        //     var btnText = document.getElementById("myBtn");
          
        //     if (dots.style.display === "none") {
        //       dots.style.display = "inline";
        //       btnText.innerHTML = "Read more";
        //       moreText.style.display = "none";
        
        //     } else {
        //       dots.style.display = "none";
        //       btnText.innerHTML = "Read less";
        //       moreText.style.display = "inline";
        //     }
        //   }


        // 3. 
        // let students = [];
    
        // document.getElementById('studentForm').addEventListener('submit', function(e) {
        //   e.preventDefault();
    

        //   const name = document.getElementById('name').value;
        //   const age = document.getElementById('age').value;
        //   const grade = document.getElementById('grade').value;
    
        //   const student = { name, age, grade };
    
         
        //   students.push(student);
    
         
        //   document.getElementById('name').value = '';
        //   document.getElementById('age').value = '';
        //   document.getElementById('grade').value = '';
    
        
        //   displayStudents();
    
       
        //   alert('Student added successfully!');
        // });
    
       
        // function displayStudents() {
        //   const tableBody = document.querySelector('#studentTable tbody');
    
         
        //   tableBody.innerHTML = '';
    
          
        //   for (let i = 0; i < students.length; i++) {
        //     const student = students[i];
    
        
        //     const row = document.createElement('tr');
    
  
        //     const nameCell = document.createElement('td');
        //     nameCell}}