/* eslint-disable max-depth */
/* eslint-disable newline-after-var */
import $ from 'jquery';
import velocity from 'velocity-animate';

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
        var AudioContext = window.AudioContext || window.webkitAudioContext;
        this.Bars = new Uint8Array(bars);
        this.Audio = new AudioContext({
            sampleRate: 44100
        });
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
        this.idle = true;
        this.counter = 0;
        this.rectangles = '';
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
                return self.svgWidth;
            }).attr('fill', function() {
                return '#070707';
            }).attr('stroke', function() {
                return '#070707';
            }).attr('stroke-width', function() {
                return 1;
            });

        this.rectangles = document.querySelectorAll('#visualizer-container rect');
        this.rectangles = Array.from(this.rectangles);

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
        this.renderChart();
    }

    connect() {
        this.#analyser = this.Audio.createAnalyser();
        let source = this.Audio.createMediaElementSource(this.audioElement);
        source.connect(this.#analyser);
        source.connect(this.Audio.destination);
    }

    createSvg() {
        let self = this;

        return this.d3.select(this.visualizerElement)
            .append('svg')
            .attr('height', self.svgHeight)
            .attr('width', self.svgWidth);
    }

    randomPercentage(upTo, add) {
        return `${Math.floor(Math.random() * upTo) + add}%`;
    }

    idleAnimation() {
        let self = this;

        let rectangles = $('#visualizer-container rect');

        velocity(rectangles, {
            width: [function() {
                return self.randomPercentage(10, 90);
            }, "100%"]
        }, {
            duration: 250,
        });

        velocity($('#visualizer-container rect'), {
            width: [function() {
                return self.randomPercentage(10, 90);
            }, function(i) {
                return $(rectangles[i]).attr("width");
            }]
        }, {
            loop: true,
            duration: 1000,
        });
    }

    ramp(n) {
        let percentage = Math.round(n / 255 * this.svgWidth);
        
        return percentage;
    }

    renderChart() {   
        let self = this;
        let id = requestAnimationFrame(this.renderChart.bind(this));

        this.#analyser.getByteFrequencyData(this.Bars);

        if(this.Bars.every((d) => d === 0) && this.stop) {
            if(this.idle) {
                this.idleAnimation();
            }
            // exits
            cancelAnimationFrame(id);
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

    startChart() {
        this.setStop();
        this.setIdle(false);
        this.Audio.resume().then(
            velocity($('#visualizer-container rect'), "finish")
        );
    }

    stopChart() {
        this.setStop();
        this.setIdle(true);
    }

    setIdle(value) {
        this.idle = value;
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
}

export default AudioVisualizer;