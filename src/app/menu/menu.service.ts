import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoaderService } from '../shared/loader/loader.service';
import { MenuItem, Order } from './menu.models';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  apiUrl = environment.apiUrl;

  constructor(private http: HttpClient, private loaderService: LoaderService) { }

  getMenuItems(): Observable<MenuItem[]> {
     return this.http.get<MenuItem[]>(`${this.apiUrl}/RestaurantChain/GetMenu`)
    //return of(this.getMockedData())
      .pipe(
        tap(() => this.loaderService.isLoading$.next(false))
      );
  }

  createOrder(order: Order): Observable<Order> {
     return this.http.post<Order>(`${this.apiUrl}/RestaurantChain/CreateOrder`, order);
    //return of(order);
  }

  getMockedData(): MenuItem[] {
    return [
      {
        id: 1,
        name: 'Caprese Salad with Pesto Sauce',
        description: 'Nothing like a fresh tomato salad in summers! A great antipasto bite to start your meal with. This combination of juicy tomatoes and mozzarella cheese salad topped with freshly made pesto sauce is a distinct yet simple one. It offers a twist to the classic caprese salad. ',
        price: 45,
        isMeal: false,
        imgUrl: 'https://i.ndtvimg.com/i/2017-09/caprese-salad_625x350_51506417724.jpg'
      },
      {
        id: 2,
        name: 'Panzenella',
        description: 'Panzenella is a Tuscan bread salad, ideal for summer. It does not follow a particular recipe, but the two ingredients that do not change are tomatoes and bread. This salad is great with a chilled glass of Prosecco and lots of sunshine!',
        price: 23,
        isMeal: false,
        imgUrl: 'https://i.ndtvimg.com/i/2017-09/panzenella_600x300_71506417795.jpg'
      },
      {
        id: 3,
        name: 'Bruschetta',
        description: 'An antipasto dish, bruschetta has grilled bread topped with veggies, rubbed garlic and tomato mix. A country bread sliced and topped with different toppings - the evergreen tomato-basil and an inventive mushroom-garlic. The classic Italian starter!',
        price: 13,
        isMeal: false,
        imgUrl: 'https://i.ndtvimg.com/i/2017-09/bruschetta_625x350_71506417841.jpg'
      },
      {
        id: 4,
        name: 'Focaccia Bread',
        description: 'Fresh dough is topped with caramelized onions, olives, tomato slices, basil leaves, grated parmesan cheese and baked delicious!',
        price: 14,
        isMeal: false,
        imgUrl: 'https://i.ndtvimg.com/i/2017-09/frocaccia_600x300_41506417893.jpg'
      }
    ]

  }
}
