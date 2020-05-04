let imatgeOri, imatgeProcess;


function preload() {
    //imatgeOri = loadImage("js/pixelSorting/img/twinpeaks.jpg");
    imatgeOri = loadImage("js/pixelSorting/img/scarlett.jpg");
}


function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("#quart");
    
    imatgeProcess = createImage(imatgeOri.width, imatgeOri.height);
    imatgeProcess.set(0, 0, imatgeOri);
}

function draw() {
    background(250, 200, 200);
    image(imatgeProcess, 0, 0);
}


function dibuixaPixels(pasos) {
//Funció que es crida quan canvia el progress de l'scroll al quart div
    
    //console.log("Pas: " + pasos);

    //Copiem la imatge original a imatge process cada cop
    imatgeProcess.set(0, 0, imatgeOri);

    //Carreguem els pixels de la imatge al seu array de pixels
    imatgeProcess.loadPixels();
    
    //Ho fem tot tantes vegades com ens diguin per paràmetre
    for (let j = 0; j < pasos; j++) {
        //El for avança en cops de 4 en 4 pq cada pixel ocupa 4 posicions a l'array (RGBA)
        for (let i = 0; i < imatgeProcess.pixels.length; i = i + 4) {
            let vermell = imatgeProcess.pixels[i];
            let verd = imatgeProcess.pixels[i + 1];
            let blau = imatgeProcess.pixels[i + 2];
            //let opacitat = imatgeProcess.pixels[i + 3]; //només per img amb transparència

            if (verd > 180 && blau > 150 && blau < 220 && vermell > 150) {
                let fila = imatgeProcess.width * 4;
                //(i+4-fila) és el pixel de l'esquerra (+4) i adalt (-fila)
                imatgeProcess.pixels[i + 4 - fila] = vermell + 20;
                imatgeProcess.pixels[i + 5 - fila] = verd - 1;
                imatgeProcess.pixels[i + 6 - fila] = blau;
            }

            if (verd > 50 && verd < 190 && blau > 70 && blau < 140 && vermell > 15 && vermell < 60) {
                //i-4 és el pixel de la dreta
                imatgeProcess.pixels[i - 4] = vermell + 1;
                imatgeProcess.pixels[i - 3] = verd + 2;
                imatgeProcess.pixels[i - 2] = blau + 2;
            }
        }
    }
    //Actualitzem la imatge amb els pixels que hem modificat
    imatgeProcess.updatePixels();
}
