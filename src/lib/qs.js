const qs = (param)=>{
  const array = window.location.search.substr(1).split('&')
  let object = {}
  array.forEach(item=>{
    ;
    const prop = item.split('=')
    object[prop[0]] = prop[1]
  })
  if (param) {return object[param]}
  return object
}

export default qs
