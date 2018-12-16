document.ready

function init() {
    var myWave1 = wavify(document.getElementById('feel-the-wave'), {
        height: 450,
        bones: 4,
        amplitude: 40,
        color: 'rgba(34, 148, 243, .8)',
        speed: .2
    });

    var myWave2 = wavify(document.getElementById('feel-the-wave-two'), {
        height: 470,
        bones: 3,
        amplitude: 70,
        color: 'rgba(56, 52, 245, .8)',
        speed: .15
    });
}

