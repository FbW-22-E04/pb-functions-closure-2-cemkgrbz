//1

// function test() {
    
//     let a;
//     console.log(a);
//     console.log(foo());
     
//     a = 1;
//     function foo() {
//        return 2;
//     }
//   }
  
//   test();

  /**
   * undefined and 2. 
   * 
   * a is defined after console.log. So there s no value in the beginning. 
   * 
   * foo function is also defined after console.log but it gets 2 value since the function continues to run 
   */

  //2

//   console.log("------------")

//   let a = 1; 
  
//   function someFunction(number) {
//     function otherFunction(input) {
//       return a;
//     }
    
//     a = 5;
    
//     return otherFunction;
//   }
  
//   const firstResult = someFunction(9);
//   const result = firstResult(2);

//   console.log(result)

  /**
   * When we console.log the result, it s 5 since a variable changes with 5 and the functions don't make any other calculation it returns a. 
   */

  //3

  let fullname = 'John Doe';
  const obj = {
     fullname: 'Colin Ihrig',
     prop: {
        fullname: 'Aurelio De Rosa',
        getFullname: function() {
           return this.fullname;
        }
     }
  };
  
  console.log(obj.prop.getFullname());

  const test = obj.prop.getFullname;
  
  console.log(test());

  /**
   * Undefined.
   */

  //4

  let a = 1; 
  function b() { 
      a = 10; 
      return; 
      function a() {} 
      
  } 
  b(); 
  console.log(a);  //1