/* eslint-disable newline-after-var */
class AudioVisualizer {
    // audio ctx analyser
    #analyser;
    #svg;

    constructor(
        audioElement,
        visualizerElement,
        d3,
        svgHeight,
        svgWidth,
        bars = 40,
        barPadding = 1,
    ) {
        this.Bars = new Uint8Array(bars);
        this.Audio = new (window.AudioContext || window.webkitAudioContext)();
        this.audioElement = audioElement;
        this.visualizerElement = visualizerElement;
        this.d3 = d3;
        this.svgHeight = svgHeight;
        this.svgWidth = svgWidth;
        this.barPadding = barPadding;
        this.stop = true;
        this.bars = this.Bars.length;
        this.rectangles = null;
        this.lines = null;
    }

    init() {
        let self = this;
        this.#svg = this.createSvg(); 

        this.#svg.selectAll('rect')
            .data(this.Bars)
            .enter()
            .append('rect')
            .attr('y', function (d, i) {
                return i * self.svgHeight / self.bars;
            }).attr('height', function() {
                return self.svgHeight / self.bars;
            }).attr('x', function() {
                return 0;
            }).attr('width', function() {
                return self.svgWidth - 100;
            }).attr('fill', function() {
                return '#070707';
            }).attr('stroke', function() {
                return '#070707';
            }).attr('stroke-width', function() {
                return 1;
            });

        this.#svg.selectAll('line')
            .data(this.Bars)
            .enter()
            .append('line')
            .attr('y1', function (d, i) {
                return i * self.svgHeight / self.bars;
            }).attr('y2', function(d, i) {
                return i * self.svgHeight / self.bars;
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
        this.#analyser = this.Audio.createAnalyser();
        console.log(this.#analyser);
        let source = this.Audio.createMediaElementSource(this.audioElement);
        source.connect(this.#analyser);
        source.connect(this.Audio.destination);
    }

    startChart() {
        this.setStop();
        this.Audio.resume();
    }

    stopChart() {
        this.setStop();
    }

    setStop() {
        this.stop = !this.stop;
    }

    setSvgHeight(height) {
        this.svgHeight = height;
    }

    setSvgWidth(width) {
        this.svgWidth = width;
    }

    updateChart() {
        let self = this;

        // this.init();
        if(this.#svg) {
            this.#svg
                .attr('height', () => this.svgHeight)
                .attr('width', () => this.svgWidth);

            this.#svg.selectAll('rect')
                .attr('y', function (d, i) {
                    return i * self.svgHeight / self.bars;
                }).attr('height', function() {
                    return self.svgHeight / self.bars;
                });

            this.#svg.selectAll('line')
                .attr('y1', function (d, i) {
                    return i * self.svgHeight / self.bars;
                }).attr('y2', function(d, i) {
                    return i * self.svgHeight / self.bars;
                }).attr('x1', function() {
                    return 0;
                }).attr('x2', function() {
                    return self.svgWidth;
                });
        }
       
    }

    ramp(n) {
        let percentage = Math.round(n / 255 * this.svgWidth);
        
        return percentage;
    }

    renderChart() {   
        let self = this;

        let id = requestAnimationFrame(this.renderChart.bind(this));

        // Copy frequency data to frequencyData array.
        this.#analyser.getByteFrequencyData(this.Bars);

        if(this.Bars.every((d) => d === 0) && this.stop) {
            // will need to launch idle animation here
            cancelAnimationFrame(id);
            return;
        }

        // Update d3 chart with new data.
        this.#svg.selectAll('rect')
            .data(this.Bars)
            .attr('x', function() {
                return 0;
            })
            .attr('width', function(d) {
                return self.svgWidth - self.ramp(d);
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