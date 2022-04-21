

//  name, roll, age, class, gender, location, Admission fees 


// - 
// - Find All Female Students
// - Find class wise student result
// - Location wise student result
// - find student between 10 - 25 age





  const student_call =[


         ['Anisul','12', '15','8','male','Chittagong','1200'],
         ['Asraful','2', '25','8','male','Dhaka','2000'],
         ['Maraful','4', '10','10','male','Chittagong','3000'],
         ['kajol','1', '12','10','male','Joshor','2200'],
         ['Kamorol','20', '30','11','male','Dhaka','100'],
         ['Akib','112', '18','7','male','Chittagong','120'],
         ['Mhiha','12', '20','11','Female','Joshor','1100'],
         ['Nowrin','7', '15','9','Female','Joshor','100'],
         ['Anika','1', '20','11','Female','Chittagong','110']
        
]
console.log(`  Total Admnission fees

`);
let total = 0;

student_call.sort().map((A,b)=>{
   total+=+A[6];
     console.log(`                      NO : ${b+1}      ${A[0]} gave  ${A[6]} tk`)    
})

console.log(`                      -----------------------------------------------
                       total   Amount is     = ${total} TK
 
 
 
 
 
 
 
 
 
 
 `);

  console.log(`   
   All Female Students `);

 student_call.forEach((A,B)=>{

         if (A[4]==='Female'){

      console.log(              `
                      Student Name      :   ${A[0]}
                      Student Gender    :   ${A[4]}
                      Student Class     :   ${A[3]}
                      Student Roll      :   ${A[1]}
                      Student Location  :   ${A[5]}
      `);



}


 })
 console.log(`   





                        Location wise Result    
       `);

       console.log('Students of : Chittagong');

       student_call.forEach((A,B)=>{

               
                 if(A[5]==='Chittagong'){
                    console.log(`
                    Student Name      :   ${A[0]}
                    Student Gender    :   ${A[4]}
                    Student Class     :   ${A[3]}
                    Student Roll      :   ${A[1]}
                    Student Location  :   ${A[5]}`);
                 }

            })



      console.log('Students of : Dhaka');
      student_call.map((A,B)=>{

             if(A[5]==='Dhaka'){
                  console.log(`
                  Student Name      :   ${A[0]}
                  Student Gender    :   ${A[4]}
                  Student Class     :   ${A[3]}
                  Student Roll      :   ${A[1]}
                  Student Location  :   ${A[5]}`);
               } 


      })
      console.log('Students of : Joshor');
      student_call.map((A,B)=>{

             if(A[5]==='Joshor'){
                  console.log(`
                  Student Name      :   ${A[0]}
                  Student Gender    :   ${A[4]}
                  Student Class     :   ${A[3]}
                  Student Roll      :   ${A[1]}
                  Student Location  :   ${A[5]}`);
               } 


      })


    console.log(`






    
student between 10 - 25 age
    `);



        student_call.map((K,L)=>{

         if(K[2]>9 && K[2]<26){

            console.log(`                Name  :  ${K[0]}     Age :   ${K[2]} `);
      
      
           }


        })


         console.log(`
         
         
         
         
         
                      class wise student result

         `);

       console.log('Students of Class :8');
             
        student_call.forEach((A,B)=>{

                
                  if(A[3]==='8'){
                    console.log(` 
                     Student Name      :   ${A[0]}
                     Student Gender    :   ${A[4]}
                     Student Class     :   ${A[3]}
                     Student Roll      :   ${A[1]}
                     Student Location  :   ${A[5]}`);
                  }

             })


        console.log('Students of Class :9');

        student_call.forEach((A,B)=>{

                
                  if(A[3]==='9'){
                     console.log(`
                     Student Name      :   ${A[0]}
                     Student Gender    :   ${A[4]}
                     Student Class     :   ${A[3]}
                     Student Roll      :   ${A[1]}
                     Student Location  :   ${A[5]}`);
                  }

             })
        console.log('Students of Class :10');

        student_call.forEach((A,B)=>{

                
                  if(A[3]==='10'){
                     console.log(`
                     Student Name      :   ${A[0]}
                     Student Gender    :   ${A[4]}
                     Student Class     :   ${A[3]}
                     Student Roll      :   ${A[1]}
                     Student Location  :   ${A[5]}`);
                  }

             })
        console.log('Students of Class :11');

        student_call.forEach((A,B)=>{

                
                  if(A[3]==='11'){
                     console.log(`
                     Student Name      :   ${A[0]}
                     Student Gender    :   ${A[4]}
                     Student Class     :   ${A[3]}
                     Student Roll      :   ${A[1]}
                     Student Location  :   ${A[5]}`);
                  }

             })


                  
   
                 



        