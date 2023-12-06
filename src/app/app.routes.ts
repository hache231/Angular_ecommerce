import { Routes } from '@angular/router';
import { ArticleListComponent } from './article-list/article-list.component';
import { AboutComponent } from './about/about.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { ProduitComponent } from './produit/produit.component';
​
export const routes: Routes = [
    {
        path:'',
        component:ArticleListComponent,
        title:"Articles"
    },
    {
        path:'about',
        component:AboutComponent,
        title:"A propos"
    },
    {
        path:'detail/:id',
        component:DetailsComponent,
        title:"Detail"
    },
    {
        path:'create',
        component:CreateComponent,
        title:'create'
    },
    {
        path:'produit',
        component:ProduitComponent,
        title:'produit'

    }
];
