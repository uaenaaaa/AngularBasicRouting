import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from '@app/homepage/homepage.component';
import { SignupComponent } from '@app/signup/signup.component';
import { LoginComponent } from '@app/login/login.component';
import { LandingPageComponent } from '@app/landing-page/landing-page.component';
import { NgModule } from '@angular/core';
export const routes: Routes = [
    {
        path: '',
        component: HomepageComponent,
        title: 'Homepage',
    },
    {
        path: 'auth/signup',
        component: SignupComponent,
        title: 'Signup',
    },
    {
        path: 'auth/login',
        component: LoginComponent,
        title: 'Login',
    },
    {
        title: 'Landing Page',
        component: LandingPageComponent,
        path: 'landing-page',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
