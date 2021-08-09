 export function titleToUrl(link: String) {
  return link.toLowerCase().split(' ').join('-')
};

export function UrlTotitle(title: String){
  return title.toLowerCase().split('-').join(' ')
}