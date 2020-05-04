let controller = new ScrollMagic.Controller();

new ScrollMagic.Scene({
        triggerElement: "#quart",
        triggerHook: 0,
        duration: "800%"
    })
    .on("progress", actualitzaProgres)
    .setPin("#quart")
    //        .addIndicators({
    //            name: "scarlett"
    //        })
    .addTo(controller);

function actualitzaProgres(event) {
    //console.log(event.progress); 

    //Pixel sorting
    //  Li passem per paràmetre el nombre de passos a fer del processament de la imatge
    //   quant més hagi avançat l'scroll, més alt serà el valor que li passem
    dibuixaPixels(Math.floor(event.progress * 100));
}