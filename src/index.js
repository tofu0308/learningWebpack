import _ from 'lodash'

/* すべてのexportをimport */
// import * as utilities from './utilities'
/* 指定してimport */
// import {Name, Nijou}  from './utilities'
/* default import */
import Lion from './utilities'

function componet() {
  const element = document.createElement('div')
  const array = ['hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(componet());

// console.log(utilities.Nijou(31))
// console.log(utilities.Name)
console.log(Lion.say())