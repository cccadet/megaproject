import CcHome from '../components/Home'
import CcServices from '@/components/Services'
import CcProjects from '@/components/Projects'
import CcContacts from '@/components/Contacts'

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: CcHome
  },
  {
    path: '/servicos',
    name: 'Services',
    component: CcServices
  },
  {
    path: '/projetos',
    name: 'Projects',
    component: CcProjects
  },
  {
    path: '/contato',
    name: 'Contacts',
    component: CcContacts
  }
]

