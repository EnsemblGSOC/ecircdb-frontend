export function logo() {
  return '/static/elogo.png'
}

export function repoCommits(repoName) {
  return `https://api.github.com/repos/ensemblGSOC/${repoName}/commits`
}

export function urlSpeciesList() {
  return '/api/species/'
}

export function urlSpeciesDetails(id) {
  return `${urlSpeciesList()}${id}/`
}

export function urlSpeciesStats(speciesId, assemblyId) {
  return `/api/species_view_stats/${speciesId}/${assemblyId}/`
}

export function urlSamplesList(speciesId, assemblyId) {
  return `${urlSpeciesList()}samples/${speciesId}/${assemblyId}`
}

export function urlSampleStats(speciesId, assemblyId, sampleId) {
  return `/api/sample_view_stats/${speciesId}/${assemblyId}/${sampleId}`
}

export function urlLocationStats(speciesId, assemblyId) {
  return `/api/location_view_stats/${speciesId}/${assemblyId}/`
}

export function urlExportSpeciesView(speciesId, assemblyId) {
  return `/api/export_species_view_list/${speciesId}/${assemblyId}/`
}

export function urlExportSampleView(speciesId, assemblyId, sampleId) {
  return `/api/export_sample_view_list/${speciesId}/${assemblyId}/${sampleId}/`
}
