const Http = new XMLHttpRequest()
const url = `/api/get_genome/${speciesId}/${assemblyId}`
Http.open('GET', url)
Http.send()

Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let genome = JSON.parse(this.responseText)
    browser = new Genoverse({
      container: '#genoverse',
      genome: genome,
      chr: 13,
      start: 32296945,
      end: 32370557,
      plugins: [
        'controlPanel',
        'karyotype',
        'trackControls',
        'resizer',
        'focusRegion',
        'fullscreen',
        'tooltips',
        'fileDrop'
      ],
      tracks: [
        Genoverse.Track.Scalebar,
        Genoverse.Track.extend({
          name: 'Sequence',
          controller: Genoverse.Track.Controller.Sequence,
          model: Genoverse.Track.Model.Sequence.Ensembl,
          view: Genoverse.Track.View.Sequence,
          100000: false,
          resizable: 'auto'
        }),
        Genoverse.Track.extend({
          name: 'Ensembl Genes',
          url: `/api/gene_track_bed/${speciesId}/${assemblyId}/__CHR__:__START__-__END__/`,
          itemRgb: 'On',
          resizable: 'auto',
          model: Genoverse.Track.Model.File.BED,
          view: Genoverse.Track.View.Transcript.Ensembl,
          controller: Genoverse.Track.Controller
        }),
        Genoverse.Track.extend({
          name: 'CircRNAs',
          url: `/api/circrna_track_bed/${speciesId}/${assemblyId}/__CHR__:__START__-__END__/`,
          itemRgb: 'On',
          resizable: 'auto',
          model: Genoverse.Track.Model.File.BED,
          view: Genoverse.Track.View.Transcript.Ensembl,
          controller: Genoverse.Track.Controller
        })
      ]
    })

    setTimeout(function() {
      document.getElementsByClassName('gv-fullscreen-button')[0].click()
      document.getElementsByClassName('gv-fullscreen-button')[0].click()
    }, 4000)
  }
}
