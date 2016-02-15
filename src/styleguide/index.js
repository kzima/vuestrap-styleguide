import 'vuestrap/core'
import 'vuestrap/components'
import vsIcon from 'vuestrap-icons/src/components/icons'
import {vsDropdown} from 'vuestrap-base-components/src/components'
import './styleguide-bootstrap.scss'
import '../theme/app.scss'
import bootstrap from './styleguide-bootstrap.html'

Vue.mixin({
	vuestrapIconsPath: '/assets/icons.min.svg',
})

window.vm = new Vue({
  el: '#styleguide',
	components: {
	 	bootstrap: {
	 		template: bootstrap,
	 		data() {
	 			return {
		 			navbar: JSON.parse(localStorage.getItem('navbar')) || {
		 				inverse: false, 
		 			},
			    buttons: JSON.parse(localStorage.getItem('buttons')) || {
			    	regular: true, 
			    	outline: true,
			    	sizes: true,
			    	primary: true, 
			    	secondary: true, 
			    	success: true, 
			    	info: true,
			    	warning: true, 
			    	danger: true,
			    },
			    alerts: JSON.parse(localStorage.getItem('alerts')) || {
			    	success: true, 
			    	info: true,
			    	warning: true, 
			    	danger: true,
			    },
			    forms: JSON.parse(localStorage.getItem('forms')) || {
			    	size: 'md'
			    }, 
			    table: JSON.parse(localStorage.getItem('table')) || {
			    	inverse: false, 
			    }, 
			    thead: JSON.parse(localStorage.getItem('thead')) || {
			    	inverse: false,
			    },
			    buttonVariants: ['primary', 'secondary', 'success', 'info', 'warning', 'danger'],
	 			}
	 		},
	 		methods: {
	 		  setItem(context, item, value) {
	 		    if (context === 'navbar') {
	 		    	this.navbar[item] = !this.navbar[item]
	 		    	localStorage.setItem('navbar', JSON.stringify(this.navbar))
	 		    }
	 		    if (context === 'buttons') {
	 		    	this.buttons[item] = !this.buttons[item]
	 		    	localStorage.setItem('buttons', JSON.stringify(this.buttons))
	 		    }
	 		    if (context === 'alerts') {
	 		    	this.alerts[item] = !this.alerts[item]
	 		    	localStorage.setItem('alerts', JSON.stringify(this.alerts))
	 		    }
	 		    if (context === 'thead') {
	 		    	this.thead[item] = !this.thead[item]
	 		    	localStorage.setItem('thead', JSON.stringify(this.thead))
	 		    }
	 		    if (context === 'table') {
	 		    	this.table[item] = !this.table[item]
	 		    	localStorage.setItem('table', JSON.stringify(this.table))
	 		    }
	 		    if (context === 'forms') {
	 		    	this.forms[item] = value
	 		    	localStorage.setItem('forms', JSON.stringify(this.forms))
	 		    }
	 		  },
	 		},
	 		components: {
	 			vsIcon,
	 			vsDropdown,
	 		}
	 	},
	},
	data: {
    currentView: 'bootstrap'
  },
  methods: {

  },
  ready() {
  },
})