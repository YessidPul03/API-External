export class peticionModel {

    constructor(
        public id_peticion: string,
        public id_usuario: string,
        public tipo_metodo: string,
        public data: string,
        public fecha: string    
    ) {}
}