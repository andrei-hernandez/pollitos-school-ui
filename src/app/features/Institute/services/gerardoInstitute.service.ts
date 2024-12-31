import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

@Injectable()
export class GerardoService {
    constructor(private httpClient: HttpClient){

    }

    getApi(){
        return this.httpClient.get('http://localhost:8080/students')
    }
}