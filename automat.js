//https://docs.google.com/spreadsheets/d/1s2KxbExLUw1iKdjMaZB0OKKGYutjDS0avP3GGguVd1c/edit#gid=674560359
const {google} = require('googleapis');
const keys = require('./keys.json');
 
const client = new google.auth.JWT(
    keys.client_email, 
    null, 
    keys.private_key,
    ['https://www.googleapis.com/auth/spreadsheets']
);

client.authorize(function(err, tokens){
    if(err){
        console.log(err);
        return;
    }else{
        console.log('Всё супер!');
        gsrun(client);
    }
});

async function gsrun(cl){
    const gsapi = google.sheets({version: 'v4', auth: cl});
    const opt = {
        spreadsheetId: '1s2KxbExLUw1iKdjMaZB0OKKGYutjDS0avP3GGguVd1c',
        range: 'people!A2:J23'
    };
    let people = await gsapi.spreadsheets.values.get(opt);
    let peopleArr = people.data.values;
    let list = peopleArr.map(function(peopleArr){
        let obj = peopleArr.reduce(function(acc, cur, i){
            acc[i] = cur;    
            return acc;
        },{}) 
        let {
            0: ID,
            1: firstName,
            2: paternalName,
            3: lastName,
            4: mother,
            5: father,
            6: gender,
            7: spouse,
            8: birthDate,
            9: deathDate,
        } = {...obj}
        const newobj = Object.assign(
            {},
            {
            ID,
            firstName,
            paternalName,
            lastName,
            mother,
            father,
            gender,
            spouse,
            birthDate,
            deathDate,
            }
        );
        if(newobj.deathDate === undefined){
            newobj.deathDate = '';
        }
        return newobj;               
    },{})
    //console.log(list);
    let a /* Фамилия (lastName) */ = process.argv[4],
        b /* Имя (firstName) */ = process.argv[2],
        c /* Отчество (paternalName) */ = process.argv[3];

    if(a === undefined){
        a = '';
    }
    if(b === undefined){
        b = '';
    }
    if(c === undefined){
        c = '';
    }
    console.log(a,b,c);

    let res = [];
    for(let i = 0; i < list.length; i++){
        if(a === list[i].lastName && b === list[i].firstName && c === list[i].paternalName){           
            console.log('Человек найден!'); 
            for(let j = 0; j < list.length; j++){
                if(list[i].mother === list[j].ID || list[i].father === list[j].ID){
                    res.push(list[j].firstName + ' ' + list[j].paternalName + ' ' + list[j].lastName); 
                }
                if(list[i].ID === list[j].mother || list[i].ID === list[j].father){
                    res.push(list[j].firstName + ' ' + list[j].paternalName + ' ' + list[j].lastName);
                    for(let k = 0; k < list.length; k++){
                        if(list[j].ID === list[k].mother || list[j].ID  === list[k].father){
                            res.push(list[k].firstName + ' ' + list[k].paternalName + ' ' + list[k].lastName);
                            for(let p = 0; p < list.length; p++){
                                if(list[k].ID === list[p].mother || list[k].ID === list[p].father){
                                    res.push(list[p].firstName + ' ' + list[p].paternalName + ' ' + list[p].lastName);
                                }
                            } 
                        }
                    }
                }            
                if(list[i].mother || list[i].father === Number){
                    for(let j = 0; j < list.length; j++){                       
                        if(list[j].ID === list[i].mother || list[j].ID === list[i].father){
                            res.push (list[j].firstName + ' ' + list[j].paternalName + ' ' + list[j].lastName);
                            for(let k = 0; k < list.length; k++){
                                if(list[j].ID === list[k].mother || list[j].ID === list[k].father){
                                    res.push(list[k].firstName + ' ' + list[k].paternalName + ' ' + list[k].lastName);
                                    for(let p = 0; p < list.length; p++){
                                        if(list[k].ID === list[p].mother || list[k].ID === list[p].father){
                                            res.push(list[p].firstName + ' ' + list[p].paternalName + ' ' + list[p].lastName);
                                            for(let n = 0; n < list.length; n++){
                                                if(list[p].ID === list[n].father){
                                                    res.push(list[n].firstName + ' ' + list[n].paternalName + ' ' + list[n].lastName); 
                                                }
                                            } 
                                        }                                
                                    }
                                }
                            }                                           
                            if(list[j].mother || list[j].father === Number){                               
                                for(let k = 0; k < list.length; k++){                                   
                                    if(list[j].mother === list[k].ID || list[j].father === list[k].ID){
                                        res.push(list[k].firstName + ' ' + list[k].paternalName + ' ' + list[k].lastName);    
                                        for(let p = 0; p < list.length; p++){
                                            if(list[k].mother === list[p].ID){
                                                res.push(list[p].firstName + ' ' + list[p].paternalName + ' ' + list[p].lastName );
                                                for(let n = 0; n < list.length; n++){
                                                    if(list[p].ID === list[n].mother){
                                                        res.push(list[n].firstName + ' ' + list[n].paternalName + ' ' + list[n].lastName );
                                                        
                                                    }
                                                }
                                            }        
                                            if(list[p].mother === list[k].ID || list[p].father === list[k].ID){
                                                res.push(list[p].firstName + ' ' + list[p].paternalName + ' ' + list[p].lastName );  
                                                for(let n = 0; n < list.length; n++){
                                                    if(list[p].ID === list[n].mother || list[p].ID === list[n].father){
                                                        res.push(list[n].firstName + ' ' + list[n].paternalName + ' ' + list[n].lastName );
                                                    }
                                                } 
                                            }
                                        }                                   
                                    }
                                }
                            }
                        }                          
                    }
                }
            }
            res = res.filter((n) => {return n != list[i].firstName + ' ' + list[i].paternalName + ' ' + list[i].lastName});
        }
    }       
                        
                        
                        
    res = res.filter((e, i, a) => a.indexOf(e) == i);
    res = Object.entries(res);
    console.log(res);
    
    
    
    const update = {
        spreadsheetId: '1s2KxbExLUw1iKdjMaZB0OKKGYutjDS0avP3GGguVd1c',
        range: 'people!M2',
        valueInputOption: 'USER_ENTERED',
        resource: {values: res}
    }
    let resup = await gsapi.spreadsheets.values.update(update);
    console.log(resup);                      
}





   
       









          
