/* All Imports */
import {Injectable} from '@angular/core';
import {Subject, Subscription} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class Events {

    private channels: { [key: string]: Subject<any>; } = {};

    public subscribe(topic: string, observer: (_: any) => void): Subscription {
        if (!this.channels[topic]) {
            this.channels[topic] = new Subject<any>();
        }

        return this.channels[topic].subscribe(observer);
    }

    public publish(topic: string, ...args: any): void {
        const subject = this.channels[topic];
        if (!subject) {
            return;
        }

        subject.next(args);
    }

    public destroy(topic: string): boolean {
        const subject = this.channels[topic];
        if (!subject) {
            return false;
        }

        subject.complete();
        delete this.channels[topic];
        return true;
    }
    
}
