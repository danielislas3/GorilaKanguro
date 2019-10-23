import axios from 'axios'
import _ from 'lodash';
function Uri(uri, params = {}, includes = []) {
  let newuri = uri;
  // Se revisa si existe algun parametro por reemplazar
  let parsedParams = [];

  if (newuri.includes('{')) {

    _.each(params, (value, key) => {
      let find = '{' + key + '}';

      if (_.includes(newuri, find)) {
        parsedParams.push(key);
        newuri = _.replace(newuri, find, value);
      }
    });

  }

  //Si no existen reemplazos se agregara a la url los parametros
  let uriParams = [];
  _.forEach(params, (value, key) => {
    if (_.indexOf(parsedParams, key) == -1) {
      uriParams.push(key + '=' + value)
    }
  });

  // Verifica que existan includes y los agrega a la uri
  if (includes.length != 0) {
    uriParams.push('include=' + _.join(includes, ','))
  }

  if (uriParams.length!=0) {
    newuri += ('?' + _.join(uriParams, '&'));
  }

  return newuri;
}

/**
 * Limpia parametros default de axios
 * @param  {Array}  params Lista de parametros a limpiar si existen
 * @return {String}        Url limpia
 */
let CleanUri = (params = []) => {
  _.forEach(params, (itm) => {
    if (_.hasIn(axios.defaults.params, itm)) {
      delete axios.defaults.params[itm]
    }
  })
}

export { Uri , CleanUri }
