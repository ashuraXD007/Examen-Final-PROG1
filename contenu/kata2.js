 export function maxPassengers(exiting, entering) {
  if(exiting.length == 0 || entering.length == 0){
    return undefined
  }
  let restant = 0;
  let maxRestant = 0;

  for (let i = 0; i < exiting.length; i++) {
    restant -= (exiting[i]) ;
    restant +=(entering[i]) ;
    maxRestant = Math.max(maxRestant, restant);
    
  }

  return maxRestant;
}