import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from '@nestjs/common';
import { log } from 'console';
import { map, Observable, tap } from 'rxjs';




@Injectable()
export class DataResponseInterceptor implements NestInterceptor{

  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    
    return next.handle().pipe(map(data => {
      if (data && data.data) {
        return data; 
      }
      return { data };
    }));
  }
}
