import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { YogaComponent } from "./yoga/yoga.component";
import { HomeComponent } from "./home/home.component";
import { ZajeciaYogaComponent } from "./yoga/zajecia-yoga/zajecia-yoga.component"
import { PotyComponent } from "./poty/poty.component";
// import { PostListComponent } from "./posts/posts-list/post-list.component";
// import { PostCreateComponent } from "./posts/posts-create/post-create.component";
// import { LoginComponent } from "./auth/login/login.component";
// import { SignupComponent } from "./auth/signup/signup.component";
// import { AuthGuard } from "./auth/auth-guard";

const routes: Routes = [
    { path: 'yoga', component: YogaComponent , data: {animation: { value: 'yoga'}}},
    { path: 'home', component: HomeComponent},
    { path: 'poty', component: PotyComponent},
    { path: 'yoga/zajecia', component: ZajeciaYogaComponent, data: {animation: { value: 'home'}}}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}