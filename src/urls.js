export function logo () {
  return '/static/elogo.png'
}

export function repoCommits (repoName) {
  return `https://api.github.com/repos/ensemblGSOC/${repoName}/commits`
}

export function urlSpeciesList () {
  return '/api/species/'
}
