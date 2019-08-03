function findGetParameter(parameterName) {
  var result = null,
    tmp = []
  var items = location.search.substr(1).split('&')
  for (var index = 0; index < items.length; index++) {
    tmp = items[index].split('=')
    if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1])
  }
  return result
}


const speciesId = findGetParameter('speciesId')
const assemblyId = findGetParameter('assemblyId')

const Http = new XMLHttpRequest()
const url = `/api/get_genome/${speciesId}/${assemblyId}`
Http.open('GET', url)
Http.send()

Http.onreadystatechange = function() {
  if (this.readyState == 4 && this.status == 200) {
    let genome = JSON.parse(this.responseText)
    browser = new Genoverse({
      container: '#genoverse', // Where to inject Genoverse (css/jQuery selector/DOM element)
      genome: genome, // see js/genomes/
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
        Genoverse.Track.Gene,
        Genoverse.Track.extend({
          name: 'CircRNA Tracks',
          url: `/api/circrna_track/${speciesId}/${assemblyId}/__CHR__:__START__-__END__/`,
          itemRgb: 'On',
          resizable: 'auto',
          model: Genoverse.Track.Model.extend({ dataRequestLimit: 5000000 }),
          setFeatureColor: function(f) {
            f.color = '#FF00FF'
          }
        }),
        Genoverse.Track.dbSNP
      ]
    })

    setTimeout(function() {
      document.getElementsByClassName('gv-fullscreen-button')[0].click()
      document.getElementsByClassName('gv-fullscreen-button')[0].click()
    }, 4000)
  }
}
