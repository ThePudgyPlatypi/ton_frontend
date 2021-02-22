/* eslint-disable newline-after-var */
class AudioVisualizer {
    static Audio = new (window.AudioContext || window.webkitAudioContext)();
    static Bars =  new Uint8Array(40);
    
    // audio ctx analyser
    #analyser;
    #svg;

    constructor(
        audioElement = "",
        visualizerElement = "",
        d3 = "",
        bars = 35,
        svgHeight = window.innerHeight,
        svgWidth = 975,
        barPadding = 1,
    ) {
        this.audioElement = audioElement;
        this.visualizerElement = visualizerElement;
        this.d3 = d3;
        this.svgHeight = svgHeight;
        this.svgWidth = svgWidth;
        this.barPadding = barPadding;
        this.stop = true;
        this.bars = bars;
    }

    init() {
        let self = this;
        let bars = AudioVisualizer.Bars.length;
        this.#svg = this.createSvg(); 

        this.#svg.selectAll('rect')
            .data(AudioVisualizer.Bars)
            .enter()
            .append('rect')
            .attr('y', function (d, i) {
                return i * self.svgHeight / bars;
            }).attr('height', function() {
                return self.svgHeight / bars;
            }).attr('x', function() {
                return 0;
            }).attr('width', function() {
                return self.svgWidth - 50;
            }).attr('fill', function() {
                return '#070707';
            }).attr('stroke', function() {
                return '#070707';
            }).attr('stroke-width', function() {
                return 1;
            });

        this.#svg.selectAll('line')
            .data(AudioVisualizer.Bars)
            .enter()
            .append('line')
            .attr('y1', function (d, i) {
                return i * self.svgHeight / bars;
            }).attr('y2', function(d, i) {
                return i * self.svgHeight / bars;
            }).attr('x1', function() {
                return 0;
            }).attr('x2', function() {
                return self.svgWidth;
            }).attr('stroke', function() {
                return '#070707';
            }).attr('stroke-width', function() {
                return 8;
            });
    }

    connect() {
        this.#analyser = AudioVisualizer.Audio.createAnalyser();
        let source = AudioVisualizer.Audio.createMediaElementSource(this.audioElement);
        source.connect(this.#analyser);
        source.connect(AudioVisualizer.Audio.destination);
    }

    startChart() {
        this.setStop();
        AudioVisualizer.Audio.resume();
    }

    stopChart() {
        this.setStop();
    }

    setStop() {
        this.stop = !this.stop;
    }

    renderChart() {   
        let self = this;

        let id = requestAnimationFrame(this.renderChart.bind(this));

        // Copy frequency data to frequencyData array.
        this.#analyser.getByteFrequencyData(AudioVisualizer.Bars);

        if(AudioVisualizer.Bars.every((d) => d === 0) && this.stop) {
            // will need to launch idle animation here
            cancelAnimationFrame(id);
            return;
        }

        // Update d3 chart with new data.
        this.#svg.selectAll('rect')
            .data(AudioVisualizer.Bars)
            .attr('x', function() {
                return 0;
            })
            .attr('width', function(d) {
                return self.svgWidth - d * 3.2;
            });
    }

    createSvg() {
        let self = this;

        return this.d3.select(this.visualizerElement)
            .append('svg')
            .attr('height', self.svgHeight)
            .attr('width', self.svgWidth);
    }
}

export default AudioVisualizer;