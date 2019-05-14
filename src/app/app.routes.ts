import { Routes } from '@angular/router';
import { GeneratekeypairComponent } from './generatekeypair/generatekeypair.component';
import { CheckkeyComponent } from './checkkey/checkkey.component';




export const AppRoutes: Routes = [
    { path: '', redirectTo: '/generatekeypair', pathMatch: 'full' },
    { path: 'generatekeypair', component: GeneratekeypairComponent},
    { path: 'checkkey', component: CheckkeyComponent},
    
];
