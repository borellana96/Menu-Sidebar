import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpRequest, HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { StorageService } from '../storage/storage.service';
import { StorageKey } from '../storage/storage.model';
const { AUTH_TOKEN } = StorageKey

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(private storageService: StorageService, private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        console.log("INTERCEPTOR --- INICIO");
        const authToken = this.storageService.readToken(AUTH_TOKEN) || '';
        req = req.clone({
            setHeaders: {
                Authorization: "Bearer " + authToken
            }
        });
        console.log("INTERCEPTOR --- FIN");
        return next.handle(req).pipe(
            catchError((err: HttpErrorResponse) => {

                if (err.status === 401) {
                    this.router.navigateByUrl('/login');
                }
                return throwError(err);
            })
        );;
    }

}
