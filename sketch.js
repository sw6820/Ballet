function setup() {
    createCanvas(100, 32);
    // Start classifying
    // The sound model will continuously listen to the microphone
    classifier.classify(gotResult);
}
