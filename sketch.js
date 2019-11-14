let capture
let tracker

function setup() {

    // let canvas = createCanvas(windowWidth, windowHeight)
    // canvas.parent("p5")

    createCanvas(800, 600)

    capture = createCapture(VIDEO)

    capture.size(800, 600)
    capture.hide()

    tracker = new clm.tracker()
    tracker.init()
    tracker.start(capture.elt)    

}


function draw() {    

    //background(0)
    image(capture, 0, 0, capture.width, capture.height)

    let positions = tracker.getCurrentPosition()
    if (positions.length > 0) {

        noStroke()
        //stroke(255)
        // noFill()
        //     beginShape() //curve of mask
        //         vertex(positions[0][0], positions[0][1])
        //         vertex(positions[1][0], positions[1][1])
        //         vertex(positions[2][0], positions[2][1])
        //         vertex(positions[3][0], positions[3][1])
        //         vertex(positions[4][0], positions[4][1])
        //         vertex(positions[5][0], positions[5][1])
        //         vertex(positions[6][0], positions[6][1])
        //         vertex(positions[7][0], positions[7][1])
        //         vertex(positions[8][0], positions[8][1])
        //         vertex(positions[9][0], positions[9][1])
        //         vertex(positions[10][0], positions[10][1])
        //         vertex(positions[11][0], positions[11][1])
        //         vertex(positions[12][0], positions[12][1])
        //         vertex(positions[13][0], positions[13][1])
        //         vertex(positions[14][0], positions[14][1])
        //     endShape()


        fill(170)
        beginShape() //highlighted portion of face
            vertex(positions[7][0], positions[7][1])
            vertex(positions[8][0], positions[8][1])
            vertex(positions[9][0], positions[9][1])
            vertex(positions[10][0], positions[10][1])
            vertex(positions[11][0], positions[11][1])
            vertex(positions[12][0], positions[12][1])
            vertex(positions[13][0], positions[13][1])
            vertex(positions[14][0], positions[14][1])
            vertex(positions[15][0], positions[15][1])
            vertex(positions[16][0], positions[16][1])
            vertex(positions[17][0], positions[17][1])
            vertex(positions[18][0], positions[18][1])
            vertex(positions[33][0], positions[33][1])
        endShape()

        fill(85)
        beginShape() //shadowed portion of face
            vertex(positions[0][0], positions[0][1])
            vertex(positions[1][0], positions[1][1])
            vertex(positions[2][0], positions[2][1])
            vertex(positions[3][0], positions[3][1])
            vertex(positions[4][0], positions[4][1])
            vertex(positions[5][0], positions[5][1])
            vertex(positions[6][0], positions[6][1])
            vertex(positions[7][0], positions[7][1])
            vertex(positions[33][0], positions[33][1])
            vertex(positions[22][0], positions[22][1])
            vertex(positions[21][0], positions[21][1])
            vertex(positions[20][0], positions[20][1])
            vertex(positions[19][0], positions[19][1])
        endShape()







        fill(0)
        beginShape()  //Above Left Eye Shadow
            vertex(positions[23][0], positions[23][1])
            vertex(positions[63][0], positions[63][1])
            vertex(positions[24][0], positions[24][1])
            vertex(positions[64][0], positions[64][1])
            vertex(positions[25][0], positions[25][1])
            vertex(positions[33][0], positions[33][1])
            vertex(positions[22][0], positions[22][1])
            vertex(positions[21][0], positions[21][1])
            vertex(positions[20][0], positions[20][1])
            vertex(positions[19][0], positions[19][1])
        endShape()


        fill(255)
            beginShape() //Left Eye
                vertex(positions[23][0], positions[23][1])
                vertex(positions[63][0], positions[63][1])
                vertex(positions[24][0], positions[24][1])
                vertex(positions[64][0], positions[64][1])
                vertex(positions[25][0], positions[25][1])
                vertex(positions[65][0], positions[65][1])
                vertex(positions[26][0], positions[26][1])
                vertex(positions[66][0], positions[66][1])
            endShape()



            fill(0)
            beginShape() //above right eye shadow
                vertex(positions[30][0], positions[30][1])
                vertex(positions[68][0], positions[68][1])
                vertex(positions[29][0], positions[29][1])
                vertex(positions[16][0], positions[16][1])
                vertex(positions[17][0], positions[17][1])
                vertex(positions[18][0], positions[18][1])
                vertex(positions[22][0], positions[22][1])
            endShape()

            fill(85) //lighter above right eye shadow
            beginShape()
                vertex(positions[16][0], positions[16][1])
                vertex(positions[29][0], positions[29][1])
                vertex(positions[67][0], positions[67][1])
            endShape()



            fill(255)
            beginShape() //Right Eye
                vertex(positions[30][0], positions[30][1])
                vertex(positions[68][0], positions[68][1])
                vertex(positions[29][0], positions[29][1])
                vertex(positions[67][0], positions[67][1])
                vertex(positions[28][0], positions[28][1])
                vertex(positions[70][0], positions[70][1])
                vertex(positions[31][0], positions[31][1])
                vertex(positions[69][0], positions[69][1])
            endShape()




            fill(85) //cupids bow
            beginShape()
                vertex(positions[37][0], positions[37][1])
                vertex(positions[47][0], positions[47][1])
                vertex(positions[48][0], positions[48][1])
            endShape()
            fill(170)
            beginShape()
                vertex(positions[37][0], positions[37][1])
                vertex(positions[47][0], positions[47][1])
                vertex(positions[46][0], positions[46][1])
            endShape()


            fill(0)
            beginShape() //upper lip
                vertex(positions[44][0], positions[44][1])
                vertex(positions[45][0], positions[45][1])
                vertex(positions[46][0], positions[46][1])
                vertex(positions[47][0], positions[47][1])
                vertex(positions[48][0], positions[48][1])
                vertex(positions[49][0], positions[49][1])
                vertex(positions[50][0], positions[50][1])
                vertex(positions[59][0], positions[59][1])
                vertex(positions[60][0], positions[60][1])
                vertex(positions[61][0], positions[61][1])
            endShape()

            fill(85)
            beginShape() //lower lip
                vertex(positions[44][0], positions[44][1])
                vertex(positions[55][0], positions[55][1])
                vertex(positions[54][0], positions[54][1])
                vertex(positions[53][0], positions[53][1])
                vertex(positions[52][0], positions[52][1])
                vertex(positions[51][0], positions[51][1])
                vertex(positions[50][0], positions[50][1])
                vertex(positions[58][0], positions[58][1])
                vertex(positions[57][0], positions[57][1])
                vertex(positions[56][0], positions[56][1])
            endShape()
                
           

            fill(255)
            beginShape() //inside mouth
                vertex(positions[61][0], positions[61][1])
                vertex(positions[60][0], positions[60][1])
                vertex(positions[59][0], positions[59][1])
                vertex(positions[50][0], positions[50][1])
                vertex(positions[58][0], positions[58][1])
                vertex(positions[57][0], positions[57][1])
                vertex(positions[56][0], positions[56][1])
                vertex(positions[44][0], positions[44][1])
            endShape()







            fill(170)
            beginShape()
                vertex(positions[22][0], positions[22][1])
                vertex(positions[41][0], positions[41][1])
                vertex(positions[18][0], positions[18][1])
            endShape()

            // beginShape()
            //     vertex(positions[34][0], positions[34][1])
            //     vertex(positions[33][0], positions[33][1])
            //     vertex(positions[40][0], positions[40][1])
            //     vertex(positions[41][0], positions[41][1])
            // endShape()


            fill(255)
            beginShape() //overnose right highlight
                vertex(positions[62][0], positions[62][1])
                vertex(positions[41][0], positions[41][1])
                vertex(positions[33][0], positions[33][1])
                vertex(positions[43][0], positions[43][1])
            endShape()

            fill(170)
            beginShape() //overnose left shadow 
                vertex(positions[62][0], positions[62][1])
                vertex(positions[41][0], positions[41][1])
                vertex(positions[33][0], positions[33][1])
                vertex(positions[42][0], positions[42][1])
            endShape()

            fill(85)
            beginShape() //under nose
                vertex(positions[42][0], positions[42][1])
                vertex(positions[62][0], positions[62][1])
                vertex(positions[43][0], positions[43][1])
                vertex(positions[37][0], positions[37][1])
            endShape()

            fill(0)
            beginShape() //under nose shadow left
                vertex(positions[35][0], positions[35][1])
                vertex(positions[42][0], positions[42][1])
                vertex(positions[37][0], positions[37][1])
                vertex(positions[36][0], positions[36][1])
            endShape()


}
}






// function windowResized() {
//     resizeCanvas(windowWidth, windowHeight)
// }