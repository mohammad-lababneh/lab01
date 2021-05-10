let username = prompt(' what is your name ? ');


customername(username);

function customername(username) {
  alert(' what is your name ? '  + username);

  let userAge = prompt(username + ' please enter your age? ');


  alert(  ' please enter your age? '  +
   userAge + ' , what is your name ? '  + username);


  let watchtype = prompt(' do you like watches ? yes or no ? ')
  if (watchtype === 'yes') {

    alert(' do you like watches ? yes or no ? '+ watchtype + ' , please enter your age? '  +
    userAge + ' , what is your name ? '  + username); 

  }
  else {

    alert(' do you like watches ? yes or no ? '+ watchtype + ' , please enter your age? '  +
    userAge + ' , what is your name ? '  + username)
  }



  let evaluation = prompt(' what is your evaluation for our servise ? ')
  alert(' what is your evaluation for our servise ? '+ evaluation +' , do you like watches ? yes or no ? '+ watchtype + ' , please enter your age? '  +
  userAge + ' , what is your name ? '  + username )

  console.log('  please enter your name  ' + username);
  console.log('  please enter your age?  ' + userAge);
  console.log('  do you like watches ? yes or no  ' + watchtype);
  console.log('  what is your evaluation for our servise ?   ' + evaluation);
}
