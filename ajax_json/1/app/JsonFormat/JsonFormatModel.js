export class JsonFormatModel{
    
    sendData(data){
        if(data.match(/[{\[]{1}([,:{}\[\]0-9.\-+Eaeflnr-u \n\r\t]|".*?")+[}\]]{1}/) != null){
            let json = JSON.stringify(JSON.parse(data), null, 2);
           return json;
        }else {
            return 'error';
        }        
    }   
}