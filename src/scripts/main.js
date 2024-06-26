AOS.init();

const dataDovento= new Date("dec 26  , 2024  19:00:00");
const timeStaempDoevento = dataDovento.getTime ();

const contaAsHoras = setInterval( function()  {
    const agora= new Date();
    const timeStaempAtual = agora.getTime();

        const distanciaAteOEvento = timeStaempDoevento - timeStaempAtual;

        const diaEmMS = 1000 * 60 * 60 * 24;
        const horaEmMS = 1000 * 60 * 60 ;
        const minutoEmMS = 1000 * 60 ;


        const diasAteOEvento = Math.floor( distanciaAteOEvento / diaEmMS  );
        const horasAteOEvento =Math.floor((distanciaAteOEvento %diaEmMS) / horaEmMS);
        const minutosAteOEvento =Math.floor((distanciaAteOEvento % horaEmMS) / minutoEmMS   )  ;
        const segundosAteOEvento =Math.floor((distanciaAteOEvento%  minutoEmMS ) / 1000 );

            document.getElementById('contador').innerHTML =`${diasAteOEvento}d  ${horasAteOEvento}h ${minutosAteOEvento}m  ${segundosAteOEvento}s `


            if(distanciaAteOEvento < 0){
                clearInterval(contaAsHoras);
                document.getElementById('contador').innerHTML ='Evento expirado'
            }

}, 1000);