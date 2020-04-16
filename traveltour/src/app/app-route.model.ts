import { MainComponentComponent } from './main-component/main-component.component';

export class appRoute {


    appRoute: [Object] = [
        { 'path': "", 'component': MainComponentComponent },
        { 'path': "/flights", 'component': FlightsComponent },
        { 'path': "/why-us", 'component': WhyusComponent },
        { 'path': "/contact", 'component': ContactComponent },
    ]
}