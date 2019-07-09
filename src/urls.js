export function logo() {
  return "/static/elogo.png"
}

export function repoCommits(repoName) {
  return `https://api.github.com/repos/ensemblGSOC/${repoName}/commits`
}

export function urlSpeciesList() {
  return "/api/species/"
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
