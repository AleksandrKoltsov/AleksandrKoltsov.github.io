import { Marker } from "./Marker.js";

export class RefuelingMarker extends Marker{
    constructor(color){
        super(color);
        this.ref = 1;
    }

    addInk(){
            if(this.ink == 0){
                this.ref++;
                this.ink = this.ref * 100;
            }
        }
    
}
