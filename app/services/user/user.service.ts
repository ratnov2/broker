

import {instance} from '@/api/interceptors'
import { getUsersUrl } from '@/config/api.config'

export const UserService = {
  async getProfile(){
    const response = instance.get(getUsersUrl('/profile'))
    return response
  }
 
}