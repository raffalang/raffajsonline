var readTextFile = require('read-text-file');
var contents = readTextFile.readSync('./script.bro');

var fs = require('fs');

code = contents.split('\r\n');
console.log(code);

console.log("OK!");
var http = require('http');
var https = require("https");

resultado = "";


func = "";
value = "";
casa = '';

language = {
    vars_int: {names:[],values:[]},
}

ignore = 0;

function clear_(){func = ""; value = "";}

execute= (f,v) => {
        switch(f){
            case "TODO MUNDO FALA DE MIM ":
                console.log(v);
                resultado = resultado + "<br>" + v;
            break;
        }
        clear_();
};

function LoadCode(code){
for(i=0;i<code.length;i++){
    if(ignore == 0){
    //console.log(code[i].split('&'));
    if(code[i].split('&')[0] == "MAIS CASH NA MINHA CONTA "){
        value = code[i].split('&')[1].split(' ')[0];
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = language.vars_int.values[pointer] + 1;
        //console.log(language.vars_int);
    }

    if(code[i].split('&')[0] == "SE "){
        value = code[i].split('&')[1].split(' ')[0];
        op = code[i].split('&')[1].split(' ')[1];
        def = code[i].split('&')[1].split(' ')[2];
        //console.log(value);
        //console.log(def);
        //console.log(op);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        if(op == "=="){
            if(language.vars_int.values[pointer] == def){
                ignore = 0;
            }else{
                ignore = 1;
            }
        }
        if(op == "<="){
            if(language.vars_int.values[pointer] <= def){
                ignore = 0;
            }else{
                ignore = 1;
            }
        }
        if(op == ">="){
            if(language.vars_int.values[pointer] >= def){
                ignore = 0;
            }else{
                ignore = 1;
            }
        }
        if(op == "!="){
            if(language.vars_int.values[pointer] != def){
                ignore = 0;
            }else{
                ignore = 1;
            }
        }
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
       //language.vars_int.values[pointer] = language.vars_int.values[pointer] - 1;
        //console.log(language.vars_int);
    }

    if(code[i].split('&')[0] == "PAGA OQ SE ME DEVE "){
        value = code[i].split('&')[1].split(' ')[0];
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = language.vars_int.values[pointer] - 1;
        //console.log(language.vars_int);
    }

    if(code[i].split('&')[0] == "SETAR "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[2].substr(0,code[i].split('&')[1].split(' ')[2].length-1);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = set;
        //console.log(language.vars_int);*/
    }

    if(code[i].split('&')[0] == "EU TENHO MACONHA AGR SOMA AE "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = (parseInt(language.vars_int.values[pointer]) + parseInt(set));
        //console.log(language.vars_int);*/
    }

    if(code[i].split('&')[0] == "EU TENHO MACONHA AGR RETIRA AE "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }   
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = (parseInt(language.vars_int.values[pointer]) - parseInt(set));
        //console.log(language.vars_int);*/
    }

    if(code[i].split('&')[0] == "EU TENHO MACONHA AGR MULTIPLICA AE "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = (parseInt(language.vars_int.values[pointer]) * parseInt(set));
        //console.log(language.vars_int);*/
    }

    if(code[i].split('&')[0] == "EU TENHO MACONHA AGR DIVIDE AE "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = (parseInt(language.vars_int.values[pointer]) / parseInt(set));
        //console.log(language.vars_int);*/
    }
        
      if(code[i].split('&')[0] == "SUBO NAS COISAS PORQUE EU POSSO "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = (parseInt(language.vars_int.values[pointer]) ^ parseInt(set));
        //console.log(language.vars_int);*/
    }

    if(code[i].split('&')[0] == "NUMERO ALEATORIO "){
        value = code[i].split('&')[1].split(' ')[0];
        set = code[i].split('&')[1].split(' ')[1].substr(0,code[i].split('&')[1].split(' ')[1].length);
        //console.log("value:" + value);
        //console.log("set" + set);
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(value == language.vars_int.names[x]){
                pointer = x;
            }
        }
        
        
        //console.log(language.vars_int.values[pointer]);
       // console.log(pointer);
        language.vars_int.values[pointer] = Math.floor(Math.random() * parseInt(set));
        //console.log(language.vars_int);*/
    }


    if(code[i].split('BRO;')[0] == "MINHA CASA "){
        casa = i;
    }
    if(code[i].split('BRO;')[0] == "ACHO QUE EU DEI UM TIRO NO CONSOLE "){
        console.clear();
    }
    if(code[i].split('BRO;')[0] == "MEU MANO VOLTA PRA SUA CASA SE NAO VOU ATIRAR NA SUA CARA E VOU RIR "){
        i = casa;
    }
    
   // try {
    if(code[i].split(' ')[0] == "VARIAVEL"){
        switch(code[i].split(' ')[3]){
            case "FERNVNDXCLOTHING":
            language.vars_int.values.push(0);
            language.vars_int.names.push(code[i].split(' ')[1]);
            //console.log(language);
            break;
        }
    }else{
        if(code[i].split(' ')[0] == "TODO"|| code[i].split(' ')[0] == "MAIS" || code[i].split(' ')[0] == "PAGA" ){

        
        
            if(code[i].split(' ')[5][0] == '&'){
        pointer = 0;
        for(x=0;x<language.vars_int.names.length;x++){
            if(code[i].split(' ')[5].substr(1,code[i].split(' ')[5].length) == language.vars_int.names[x]){
                pointer = x;
            }
        }
        func = code[i].split('&')[0];
        //console.log(func);
       
        value = code[i].split(' ')[5].replace(code[i].split(' ')[5],language.vars_int.values[pointer]);
        execute(func,value);
        //console.log(value);
    }else{
    func = code[i].split('"')[0];
    value = code[i].split('"')[1];
    execute(func,value);
    }
    }
}
    }
    if(code[i].split('BRO;')[0] == "FIM "){
        ignore = 0;
    }
}
}

http.createServer(function(req, res){
    console.log(req.url.substr(0,6));

    if(req.url.substr(0,6) == '/code/'){
        code = [decodeURI(req.url.substr(6,req.url.length))];
        toLoad = []
        console.log(code[0].split('BRO;'));
        for(i=0;i<code[0].split('BRO;').length;i++){
            if(code[0].split('BRO;')[i] != "" || code[0].split('BRO;')[i] != ''){
                toLoad.push(code[0].split('BRO;')[i] + "BRO;");
            }
        }
        resultado = "";
        LoadCode(toLoad);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end("Debug:<br><br> " + resultado);
        
        
    }
    if (req.url === '/') {
        res.writeHead(200, {'Content-Type': 'text/html'});
        fs.createReadStream('index.html').pipe(res);
    }

}).listen(80);
