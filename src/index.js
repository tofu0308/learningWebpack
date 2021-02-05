import _ from 'lodash'
import { Nijou } from './utilities'

function componet() {
  const element = document.createElement('div')
  const array = ['hello', 'webpack', '!!!']
  element.innerHTML = _.join(array, ' ')
  return element;
}

document.body.appendChild(componet());

console.log(Nijou(3))