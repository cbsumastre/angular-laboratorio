import { User as UserApi } from './api-model'
import { User } from './view-model'

export const mapUsersFromAPIToVM = (users: UserApi[]): User[] => {
  return users.map((user) => mapUserFromAPIToVM(user));
}

export const mapUserFromAPIToVM = (user: UserApi): User => {

  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website && (!user.website.startsWith('http')) ? `https://${user.website}` : user.website
  }
}


export const mapUserVMToAPI = (user: User): UserApi => {
  return {
    id: user.id,
    name: user.name,
    email: user.email,
    phone: user.phone,
    website: user.website,
  }
}
