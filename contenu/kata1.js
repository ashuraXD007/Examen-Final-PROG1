export const Clan = (groupementClan) => {
    let lastNonClan; 
    let lastClanTime;
    
    for(const groupementClans of groupementClan ){
        const [name, distance, speed] = groupementClans.split(" ");
        const time = distance / speed; 
        
        if(!lastNonClan || time > lastClanTime){
            lastNonClan = name; 
            lastClanTime = time;
        }
    }   
    
    return lastNonClan;
}
