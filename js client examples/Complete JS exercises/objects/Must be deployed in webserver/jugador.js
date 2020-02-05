		//en este archivo esta la clase jugador con sus atributos y un par de metodos que utilizare en el ejemplo
		class jugador{
			constructor(cvelocidad,caltura,cprecision){
				this.cvelocidad=cvelocidad;
				this.caltura=caltura;
				this.cprecision=cprecision;
			}
			get ver(){
				return 'la velocidad del jugador es '+this.cvelocidad +', la altura es '+this.caltura+ ', la precision es '+this.cprecision;
			}
			set cambiar(cprecision){
				this.cprecision=cprecision;
			}

		}
		//con esto lo que hacemos es esportar lo que queremos para luego importarlo en el archivo que lo necesitemos
		export {jugador};